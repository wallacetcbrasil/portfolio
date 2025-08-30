// src/app/projetos/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/lib/projects.config";
import ProjectCard from "@/components/ProjectCard";
import AppContainer from "@/components/AppContainer";

/** Converte URL do HF (huggingface.co/spaces/owner/space)
 *  para o domínio de embed (owner-space.hf.space/?__theme=dark).
 *  Se não bater o regex, devolve a própria URL.
 */
function toEmbed(url: string) {
  const m = url.match(/huggingface\.co\/spaces\/([^/]+)\/([^/?#]+)/i);
  if (!m) return url;
  const owner = m[1];
  const space = m[2];
  return `https://${owner}-${space}.hf.space/?__theme=dark`;
}

export default function ProjetosPage() {
  const [open, setOpen] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const selected = useMemo(
    () => projects.find((p) => p.slug === open) ?? null,
    [open]
  );

  // trava scroll quando o modal está aberto
  useEffect(() => {
    const original = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, [open]);

  // fecha com ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // quando abrir um projeto novo, mostra loader do iframe
  useEffect(() => {
    if (selected?.kind === "iframe" && selected.url) setIsLoading(true);
  }, [selected]);

  return (
    <main className="space-y-4">
      <h1 className="text-2xl md:text-3xl font-semibold">Projetos</h1>

      {/* grade de cartões */}
      <section
        aria-label="Lista de projetos"
        className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} onOpen={setOpen} />
        ))}
      </section>

      {/* overlay + modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.button
              aria-label="Fechar projeto"
              onClick={() => setOpen(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              layoutId={`card-${selected.slug}`}
              role="dialog"
              aria-modal="true"
              aria-label={`Projeto ${selected.title}`}
              className="fixed left-1/2 top-1/2 w-[92vw] md:w-[80vw] max-w-6xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-neutral-900 border border-neutral-800 p-3 md:p-4 shadow-2xl"
            >
              {/* cabeçalho */}
              <div className="flex items-center justify-between mb-2 px-1">
                <h2 className="text-lg md:text-xl font-semibold">{selected.title}</h2>
                <div className="flex items-center gap-2">
                  {selected.url && (
                    <a
                      href={selected.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-full border border-neutral-700 text-sm hover:border-neutral-600"
                    >
                      Abrir em nova aba
                    </a>
                  )}
                  <button
                    onClick={() => setOpen(null)}
                    className="px-3 py-1 rounded-full border border-neutral-700 text-sm hover:border-neutral-600"
                  >
                    Fechar
                  </button>
                </div>
              </div>

              {/* caixa cinza padronizada */}
              <AppContainer>
                {/* IFRAME (embed) */}
                {selected.kind === "iframe" && selected.url && (
                  <div className="relative w-full h-full">
                    {isLoading && (
                      <div className="absolute inset-0 grid place-items-center text-neutral-400">
                        Carregando…
                      </div>
                    )}
                    <iframe
                      // usa domínio *.hf.space para embutir
                      src={toEmbed(selected.url)}
                      className="w-full h-full"
                      loading="lazy"
                      sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-downloads"
                      allow="clipboard-read; clipboard-write; fullscreen"
                      referrerPolicy="no-referrer"
                      onLoad={() => setIsLoading(false)}
                    />
                  </div>
                )}

                {/* placeholder para futuros apps internos */}
                {selected.kind === "internal" && (
                  <div className="w-full h-full flex items-center justify-center text-neutral-400">
                    Implementação para <code className="px-1">{selected.kind}</code> ainda não adicionada.
                  </div>
                )}
              </AppContainer>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
