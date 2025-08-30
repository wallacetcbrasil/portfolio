// src/components/AppContainer.tsx

/**
 * Moldura padrão para exibir o app (a "caixa cinza").
 * Mantém estilo/altura consistentes entre projetos.
 */
export default function AppContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-3 md:p-4">
      <div className="bg-neutral-950 rounded-xl border border-neutral-800 overflow-hidden h-[70vh]">
        {children}
      </div>
    </div>
  );
}
