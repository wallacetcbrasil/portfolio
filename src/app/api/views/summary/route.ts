import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { lastNDatesUTC, dateKeyUTC } from "@/lib/bot";

export const runtime = "edge";

// Tipo esperado quando usamos zrange(..., { withScores: true })
type ZItem = { member: string; score: number };

// Converte array (string|number|null|undefined) -> number[]
function toNumArray(arr?: unknown[] | null): number[] {
  return (arr ?? []).map((v) => Number((v as number | string | null) ?? 0));
}

// Soma segura (com acumulador inicial)
function sum(arr: number[]): number {
  return arr.reduce((acc, v) => acc + v, 0);
}

// Extrai o 1º item do ranking com validação de tipo
function pickTop(arr: unknown[] | null | undefined): { path: string; views: number } {
  const first = (arr ?? [])[0];
  if (first && typeof first === "object") {
    const obj = first as Partial<ZItem>;
    const path = typeof obj.member === "string" ? obj.member : "-";
    const viewsRaw =
      typeof obj.score === "number"
        ? obj.score
        : Number((obj as { score?: unknown })?.score ?? 0);
    const views = Number.isFinite(viewsRaw) ? viewsRaw : 0;
    return { path, views };
  }
  return { path: "-", views: 0 };
}

/**
 * GET /api/views/summary
 * Retorna:
 * - totais (site)
 * - semana (últimos 7 dias)
 * - hoje
 * - página mais acessada (humans/bots)
 */
export async function GET() {
  if (!redis) {
    // Sem Redis configurado: retorna zeros (modo seguro)
    return NextResponse.json({
      totals: { total: 0, humans: 0, bots: 0 },
      week:   { humans: 0, bots: 0 },
      today:  { humans: 0, bots: 0, date: dateKeyUTC() },
      top:    {
        humans: { path: "-", views: 0 },
        bots:   { path: "-", views: 0 },
      },
    });
  }

  const base = "views";

  // Totais gerais
  const totalsRaw = await redis.mget(
    `${base}:total`,
    `${base}:humans`,
    `${base}:bots`,
  );
  const [total, humans, bots] = toNumArray(totalsRaw);

  // Hoje
  const todayKey = dateKeyUTC();
  const todayRaw = await redis.mget(
    `${base}:day:${todayKey}:humans`,
    `${base}:day:${todayKey}:bots`,
  );
  const [hToday, bToday] = toNumArray(todayRaw);

  // Semana (últimos 7 dias incluindo hoje)
  const days = lastNDatesUTC(7);
  const hKeys = days.map((d) => `${base}:day:${d}:humans`);
  const bKeys = days.map((d) => `${base}:day:${d}:bots`);

  const [hValsRaw, bValsRaw] = await Promise.all([
    redis.mget(...hKeys),
    redis.mget(...bKeys),
  ]);

  const weekHumans = sum(toNumArray(hValsRaw));
  const weekBots   = sum(toNumArray(bValsRaw));

  // Top páginas (humans/bots) — pega apenas o 1º do ranking
  const [topHRaw, topBRaw] = await Promise.all([
    redis.zrange(`${base}:pages:humans`, 0, 0, { rev: true, withScores: true }),
    redis.zrange(`${base}:pages:bots`,   0, 0, { rev: true, withScores: true }),
  ]);

  const topHumans = pickTop(topHRaw);
  const topBots   = pickTop(topBRaw);

  return NextResponse.json({
    totals: { total, humans, bots },
    week:   { humans: weekHumans, bots: weekBots },
    today:  { humans: hToday,    bots: bToday,   date: todayKey },
    top: {
      humans: topHumans,
      bots:   topBots,
    },
  });
}
