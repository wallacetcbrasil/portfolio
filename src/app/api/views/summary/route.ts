import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { lastNDatesUTC, dateKeyUTC } from "@/lib/bot";

export const runtime = "edge";

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
  const [total, humans, bots] = (await redis.mget<number[]>(
    `${base}:total`,
    `${base}:humans`,
    `${base}:bots`,
  ))?.map((x) => Number(x ?? 0)) ?? [0,0,0];

  // Hoje
  const today = dateKeyUTC();
  const [hToday, bToday] = (await redis.mget<number[]>(
    `${base}:day:${today}:humans`,
    `${base}:day:${today}:bots`,
  ))?.map((x) => Number(x ?? 0)) ?? [0,0];

  // Semana (últimos 7 dias incluindo hoje)
  const days = lastNDatesUTC(7);
  const hKeys = days.map((d) => `${base}:day:${d}:humans`);
  const bKeys = days.map((d) => `${base}:day:${d}:bots`);
  const [hVals, bVals] = await Promise.all([
    redis.mget<number[]>(...hKeys),
    redis.mget<number[]>(...bKeys),
  ]);
  const sum = (arr?: (number | null)[]) =>
    (arr ?? []).reduce((acc, v) => acc + Number(v ?? 0), 0);

  const weekHumans = sum(hVals);
  const weekBots   = sum(bVals);

  // Top páginas (humans/bots)
  // Upstash Redis v4: zrange com { rev: true, withScores: true }
  const [topH] = (await redis.zrange<{ member: string; score: number }[]>(
    `${base}:pages:humans`,
    0, 0,
    { rev: true, withScores: true }
  )) ?? [];
  const [topB] = (await redis.zrange<{ member: string; score: number }[]>(
    `${base}:pages:bots`,
    0, 0,
    { rev: true, withScores: true }
  )) ?? [];

  return NextResponse.json({
    totals: { total, humans, bots },
    week:   { humans: weekHumans, bots: weekBots },
    today:  { humans: hToday, bots: bToday, date: today },
    top: {
      humans: { path: topH?.member ?? "-", views: Number(topH?.score ?? 0) },
      bots:   { path: topB?.member ?? "-", views: Number(topB?.score ?? 0) },
    },
  });
}
