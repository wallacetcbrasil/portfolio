"use client";
import { useState } from "react";
import Section from "@/components/Section";
import Link from "next/link";

const SECRET = {
  views: { label: "Painel de Views", path: "/secret/views" },
  entrevista: { label: "Problemas & Soluções", path: "/secret/problemas" },
};

export default function AjudaPage() {
  const [code, setCode] = useState("");
  const [hit, setHit] = useState<null | keyof typeof SECRET>(null);

  function check(e: React.FormEvent) {
    e.preventDefault();
    const key = code.trim().toLowerCase() as keyof typeof SECRET;
    setHit(SECRET[key] ? key : null);
    setCode("");
  }

  return (
    <main className="space-y-6">
      {/* ...seções que você já tem... */}

      <Section title="Código secreto">
        <form onSubmit={check} className="flex items-center gap-2">
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="digite o código…"
            className="flex-1 bg-transparent outline-none border-b border-neutral-700 focus:border-neutral-500 py-1"
          />
          <button className="px-3 py-1 rounded-full border border-neutral-700 text-sm">
            Enviar
          </button>
        </form>

        {hit && (
          <div className="mt-3 rounded-xl border border-neutral-800 p-3">
            <p className="text-sm mb-2">
              Código reconhecido: <b>{hit}</b> — {SECRET[hit].label}
            </p>
            <Link href={SECRET[hit].path} className="text-sm underline">
              Abrir agora
            </Link>
          </div>
        )}
      </Section>
    </main>
  );
}
