// src/hooks/useTypewriter.ts
"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hook que "digita" um texto, revelando caractere por caractere.
 *
 * Como usar:
 *   const output = useTypewriter({ text: "Olá", speedMs: 25 });
 *   <pre>{output}</pre>
 *
 * Por que é útil:
 * - Isola a lógica de temporização (fácil de testar e manter).
 * - Garante limpeza do timer ao desmontar (evita vazamento).
 */
export interface UseTypewriterOptions {
  text: string; /** Texto completo a ser revelado. */
  speedMs?: number; /** Intervalo (ms) entre cada caractere. Padrão: 25ms */
  startDelayMs?: number; /** Milissegundos antes de começar a digitar. Padrão: 0ms */
  onDone?: () => void; /** Callback opcional quando terminar de digitar. */
}

export function useTypewriter({
  text,
  speedMs = 25,
  startDelayMs = 0,
  onDone,
}: UseTypewriterOptions): string {
  const [index, setIndex] = useState(0); // posição atual no texto
  const [started, setStarted] = useState(startDelayMs === 0);
  const timerRef = useRef<number | null>(null);
  const delayRef = useRef<number | null>(null);

  // Reinicia quando o texto mudar
  useEffect(() => {
    setIndex(0);
    setStarted(startDelayMs === 0);

    // delay inicial opcional
    if (startDelayMs > 0) {
      delayRef.current = window.setTimeout(() => {
        setStarted(true);
      }, startDelayMs);
    }

    return () => {
      if (delayRef.current) window.clearTimeout(delayRef.current);
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [text, startDelayMs]);

  // Digitação incremental
  useEffect(() => {
    if (!started) return;

    timerRef.current = window.setInterval(() => {
      setIndex((prev) => {
        const next = prev + 1;
        // Quando terminar, para o timer e dispara onDone uma vez
        if (next >= text.length) {
          if (timerRef.current) window.clearInterval(timerRef.current);
          if (onDone) onDone();
        }
        return Math.min(next, text.length);
      });
    }, speedMs);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [started, speedMs, text.length, onDone]);

  // Retorna o "pedaço" do texto já digitado
  return text.slice(0, index);
}
