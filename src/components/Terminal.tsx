"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Typewriter from "@/components/Typewriter";

export default function Terminal() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const helpText = `
 > Bem-vindo ao meu terminal interativo.
 > Digite um comando para explorar:
 > formacao      - ver minha formação
 > experiencias  - ver minhas experiências
 > projetos      - ver meus projetos
 > curriculo     - visualizar meu currículo
`;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const cmd = value.trim().toLowerCase();
    setValue("");
    setError(null);

    const map: Record<string, string> = {
      formacao: "/formacao",
      experiencias: "/experiencias",
      projetos: "/projetos",
      curriculo: "/curriculo",
      cv: "/curriculo",
      easter: "/ajuda",
      // secretos:
      // mp3: "/projetos/mp3-player", 
      views: "/secret/views",
      entrevista: "/secret/problemas", 
      
    };

    if (cmd === "clear") {
      setError(null);
      return;
    }

    if (map[cmd]) {
      router.push(map[cmd]);
    } else if (cmd.length > 0) {
      setError(
        `Comando não reconhecido: ${cmd}. Tente: formacao, experiencias, projetos, help, clear.`
      );
    }
  }

  return (
    <section
      aria-label="Terminal interativo"
      className="rounded-2xl bg-neutral-900 border border-neutral-800 p-4"
    >
      {/* Texto “digitando” */}
      <Typewriter text={helpText} speedMs={18} />

      {/* Campo de entrada de comando */}
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="flex items-center gap-2 font-mono">
          {/* espaço + ">" para alinhar com o texto acima */}
          <span aria-hidden="true" className="text-neutral-400 select-none">
            &nbsp;&gt;
          </span>

          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="digite um comando… (ex.: projetos)"
            aria-label="Entrada de comando"
            autoCapitalize="off" autoCorrect="off" spellCheck={false}
            className="flex-1 bg-transparent outline-none border-b border-neutral-700 focus:border-neutral-500 py-1"
          />

          <button
            type="submit"
            className="px-3 py-1 rounded-full border border-neutral-700 text-sm hover:border-neutral-600"
          >
            Enviar
          </button>
        </div>
      </form>

      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
    </section>
  );
}
