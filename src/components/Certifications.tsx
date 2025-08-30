"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import type { CertificationItem } from "@/lib/education.data";
import Section from "@/components/Section";

export default function Certifications({ items }: { items: CertificationItem[] }) {
  const [area, setArea] = useState<string | null>(null);
  const [subs, setSubs] = useState<Set<string>>(new Set());

  // Contadores por área
  const areas = useMemo(() => {
    const m = new Map<string, number>();
    items.forEach(i => m.set(i.area, (m.get(i.area) ?? 0) + 1));
    return Array.from(m.entries()).sort((a,b) => a[0].localeCompare(b[0]));
  }, [items]);

  // Subáreas disponíveis para a área selecionada
  const subareas = useMemo(() => {
    if (!area) return [];
    const s = new Set<string>();
    items.filter(i => i.area === area).forEach(i => i.subareas.forEach(x => s.add(x)));
    return Array.from(s).sort((a,b) => a.localeCompare(b));
  }, [area, items]);

  // Lista filtrada
  const filtered = useMemo(() => {
    return items.filter(i => {
      if (area && i.area !== area) return false;
      if (subs.size === 0) return true;
      return i.subareas.some(s => subs.has(s));
    });
  }, [items, area, subs]);

  // Função para formatar o período  
  function formatPeriod(start?: string, end?: string, year?: string) {
  if (start && end) return `${start} — ${end}`;   // já no formato AAAA-MM-DD
  if (start) return `${start} — ${start}`;
  return year ?? "";                              // fallback: só ano
  }

  function toggleSub(s: string) {
    setSubs(prev => {
      const n = new Set(prev);
      if (n.has(s)) n.delete(s); else n.add(s);
      return n;
    });
  }

  return (
    <Section title="Certificações (seleção)">
      {/* Filtro por ÁREA */}
      <div className="mb-3 flex flex-wrap gap-2">
        <button
          onClick={() => { setArea(null); setSubs(new Set()); }}
          className={`px-3 py-1 rounded-full border text-sm ${area ? "border-neutral-700" : "border-neutral-500"}`}
        >
          Todas ({items.length})
        </button>

        {areas.map(([name, count]) => (
          <button
            key={name}
            onClick={() => { setArea(name); setSubs(new Set()); }}
            className={`px-3 py-1 rounded-full border text-sm ${area === name ? "border-neutral-500" : "border-neutral-700"}`}
            title={`Mostrar só ${name}`}
          >
            {name} ({count})
          </button>
        ))}
      </div>

      {/* Filtro por SUBÁREA (aparece se tiver área selecionada) */}
      {area && (
        <div className="mb-4 flex flex-wrap gap-2">
          {subareas.map(s => {
            const active = subs.has(s);
            return (
              <button
                key={s}
                onClick={() => toggleSub(s)}
                className={`px-2 py-1 rounded-full border text-xs ${active ? "border-neutral-500" : "border-neutral-700"}`}
              >
                {s}
              </button>
            );
          })}
          <button
            onClick={() => setSubs(new Set())}
            className="px-2 py-1 rounded-full border text-xs border-neutral-700"
            title="Limpar subáreas"
          >
            Limpar
          </button>
        </div>
      )}

      {/* Lista */}
      <div className="grid gap-3 md:grid-cols-2">
        {filtered.map((c, i) => (
          <article key={c.title + i} className="rounded-2xl bg-neutral-900 border border-neutral-800 p-4">
            <div className="flex items-start gap-3">
              {c.logo && (
                <Image src={c.logo} alt={c.provider} width={36} height={36} className="rounded bg-neutral-800" />
              )}

              <div className="min-w-0 flex-1">
                {/* Topo: título + CARGA HORÁRIA (pill à direita) */}
                <div className="flex items-baseline gap-3">
                  <h3 className="font-semibold flex-1 truncate">{c.title} · {c.provider}</h3>
                  {typeof c.hours === "number" && (
                    <span className="shrink-0 text-xs px-2 py-0.5 rounded-full border border-neutral-600">
                      {c.hours}h
                    </span>
                  )}
                </div>

                {/* Período “início — fim” (ou só ano quando não houver datas) */}
                <p className="text-xs text-neutral-400 mt-1">
                  {formatPeriod(c.start, c.end, c.year)}
                </p>

                {/* Subáreas como pílulas */}
                <div className="mt-2 flex flex-wrap gap-2">
                  {c.subareas.map(s => (
                    <span key={s} className="text-xs px-2 py-1 rounded-full border border-neutral-700">{s}</span>
                  ))}
                </div>

                {c.link && (
                  <a href={c.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm underline">
                    Ver certificado
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
