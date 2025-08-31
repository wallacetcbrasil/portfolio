"use client";

import { useTypewriter, UseTypewriterOptions } from "@/hooks/useTypewriter";

/**
 * Componente que exibe um texto "sendo digitado".
 * Mantém a UI simples; a lógica mora no hook useTypewriter.
 */
export interface TypewriterProps extends UseTypewriterOptions {
  /** Classe CSS opcional para estilizar o <pre>. */
  className?: string;
}

export default function Typewriter({
  text,
  speedMs,
  startDelayMs,
  onDone,
  className = "whitespace-pre-wrap font-mono text-neutral-200",
}: TypewriterProps) {
  const output = useTypewriter({ text, speedMs, startDelayMs, onDone });
  return <pre className={className}>{output}</pre>;
}
