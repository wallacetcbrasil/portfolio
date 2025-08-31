import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { isBot, dateKeyUTC } from "@/lib/bot";

export const config = {
  matcher: ["/", "/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|og|thumbs|cv|icons).*)"],
};

export default async function middleware(req: NextRequest) {
  if (!redis) return NextResponse.next();

  const path = req.nextUrl.pathname;

  // Ignora requisições para arquivos com extensão (.png, .js, etc.)
  if (/\.[a-z0-9]+$/i.test(path)) return NextResponse.next();

  const ua = req.headers.get("user-agent") || "";
  const bot = isBot(ua);
  const today = dateKeyUTC(); // "YYYY-MM-DD" em UTC

  // Chaves no Redis (mantemos um "namespace" = views)
  const base = "views";
  const totalKey  = `${base}:total`;
  const botsKey   = `${base}:bots`;
  const humansKey = `${base}:humans`;

  const dayTotal  = `${base}:day:${today}:total`;
  const dayBots   = `${base}:day:${today}:bots`;
  const dayHumans = `${base}:day:${today}:humans`;

  // Rankings (sorted sets) por página
  const zTotal  = `${base}:pages:total`;
  const zBots   = `${base}:pages:bots`;
  const zHumans = `${base}:pages:humans`;

  try {
    // Conta site inteiro e o dia atual
    await redis.incr(totalKey);
    await redis.incr(dayTotal);
    await redis.incr(bot ? botsKey : humansKey);
    await redis.incr(bot ? dayBots : dayHumans);

    // Ranking de páginas (score += 1)
    await redis.zincrby(zTotal, 1, path);
    await redis.zincrby(bot ? zBots : zHumans, 1, path);
  } catch (e) {
    // Não derruba a navegação em caso de erro
    console.error("view counter error", e);
  }

  return NextResponse.next();
}