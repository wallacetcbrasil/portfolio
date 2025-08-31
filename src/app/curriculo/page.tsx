import type { Metadata } from "next";
import Link from "next/link";

import Section from "@/components/Section";
import { SUMMARY, SKILLS } from "@/lib/skills.data";
import { Pills } from "@/components/Pills";

export const metadata: Metadata = {
  title: "Currículo",
  description:
    "Resumo, habilidades e currículo em PDF do Wallace Correia Brasil.",
};

const CV_URL = "/cv/wallace-correa-brasil-cv.pdf";

export default function CurriculoPage() {
  return (
    <main className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-semibold text-center">
        Currículo
      </h1>

      {/* Resumo */}
      <Section title="Resumo" titleClassName="text-center">
        <p className="text-sm text-neutral-300 whitespace-pre-wrap text-center max-w-3xl mx-auto">
          {SUMMARY}
        </p>
      </Section>

      {/* Habilidades */}
      <Section title="Habilidades" titleClassName="text-center">
        <div className="space-y-4 max-w-4xl mx-auto">
          {Object.entries(SKILLS).map(([categoria, itens]) => (
            <div key={categoria} className="space-y-1 text-center">
              <div className="text-sm text-neutral-400">{categoria}</div>
              <div className="flex justify-center">
                <Pills items={itens} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PDF + Ações */}
      <Section title="Visualizar / Baixar" titleClassName="text-center">
        <div className="flex flex-wrap gap-2 mb-3 justify-center">
          <Link
            href={CV_URL}
            target="_blank"
            rel="noopener"
            className="px-3 py-1 rounded-full border border-neutral-700 text-sm hover:border-neutral-600"
          >
            Abrir em nova aba
          </Link>

          <a
            href={CV_URL}
            download
            className="px-3 py-1 rounded-full border border-neutral-700 text-sm hover:border-neutral-600"
          >
            Baixar PDF
          </a>
        </div>

        <div className="rounded-xl border border-neutral-800 overflow-hidden bg-neutral-950 h-[70vh]">
          <object
            data={CV_URL}
            type="application/pdf"
            className="w-full h-full"
            aria-label="Visualizador de PDF do currículo"
          >
            <div className="p-4 text-sm text-neutral-400">
              Seu navegador não conseguiu exibir o PDF. Use os botões acima.
            </div>
          </object>
        </div>
      </Section>
    </main>
  );
}
