"use client";

import { useEffect, useState } from "react";

type Summary = {
  totals: { total: number; humans: number; bots: number };
  week:   { humans: number; bots: number };
  today:  { humans: number; bots: number; date: string };
  top:    {
    humans: { path: string; views: number };
    bots:   { path: string; views: number };
  };
};

export default function SecretViewsPage() {
  const [data, setData] = useState<Summary | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch("/api/views/summary", { cache: "no-store" });
        const json = await res.json();
        if (alive) setData(json);
      } catch (e) {
        console.error(e);
      }
    })();
    return () => { alive = false; };
  }, []);

  return (
    <main className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-semibold">Views (secreto)</h1>

      {!data ? (
        <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-4">
          Carregando…
        </div>
      ) : (
        <>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <Card title="Usuários (total)">
              <Stat label="Total do site" value={data.totals.humans} />
              <Stat label="Semana (7d)"  value={data.week.humans} />
              <Stat label={`Hoje (${data.today.date})`} value={data.today.humans} />
              <Stat label="Página + acessada (users)" value={`${data.top.humans.path} — ${data.top.humans.views}`} />
            </Card>

            <Card title="Bots">
              <Stat label="Total do site" value={data.totals.bots} />
              <Stat label="Semana (7d)"  value={data.week.bots} />
              <Stat label={`Hoje (${data.today.date})`} value={data.today.bots} />
              <Stat label="Página + acessada (bots)" value={`${data.top.bots.path} — ${data.top.bots.views}`} />
            </Card>
          </div>

          <Card title="Total geral">
            <Stat label="Total (humans + bots)" value={data.totals.total} />
          </Card>
        </>
      )}
    </main>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl bg-neutral-900 border border-neutral-800 p-4">
      <h2 className="text-lg md:text-xl font-semibold mb-3">{title}</h2>
      <div className="grid gap-2">{children}</div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-neutral-400">{label}</span>
      <span className="font-mono">{value}</span>
    </div>
  );
}
