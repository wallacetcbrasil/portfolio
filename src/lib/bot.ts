// Detecção simples por user-agent
export function isBot(ua: string | null | undefined): boolean {
  if (!ua) return false;
  const patterns = [
    /bot/i, /crawl/i, /spider/i, /slurp/i,
    /Googlebot/i, /bingbot/i, /DuckDuckBot/i, /Baiduspider/i, /YandexBot/i,
    /facebookexternalhit/i, /Facebot/i, /twitterbot/i, /LinkedInBot/i,
    /Slackbot/i, /Discordbot/i, /WhatsApp/i, /TelegramBot/i, /Applebot/i,
    /SemrushBot/i, /AhrefsBot/i, /SiteAuditBot/i,
  ];
  return patterns.some((r) => r.test(ua));
}

// YYYY-MM-DD (UTC) — padroniza a “data de hoje”
export function dateKeyUTC(d = new Date()): string {
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

// Retorna um array com as últimas N datas (YYYY-MM-DD), incluindo hoje
export function lastNDatesUTC(n: number): string[] {
  const arr: string[] = [];
  const now = new Date();
  for (let i = 0; i < n; i++) {
    const d = new Date(Date.UTC(
      now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - i
    ));
    arr.push(dateKeyUTC(d));
  }
  return arr;
}
