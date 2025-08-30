// src/components/InfoCard.tsx
import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
  period?: string;
  bullets?: string[];
  badges?: string[];
  linkHref?: string;
  logoSrc?: string; // ex.: "/icons/utfpr.png"
  logoAlt?: string; // acessibilidade
  certificateHref?: string;  // PDF
};

export default function InfoCard({
  title, 
  subtitle, 
  period, 
  bullets, 
  badges, 
  linkHref,
  logoSrc, 
  logoAlt, 
  certificateHref
}: Props) {
  return (
    <section className="rounded-2xl bg-neutral-900 border border-neutral-800 p-4">
      <div className="flex items-start gap-3">
        {logoSrc && (
          <div className="shrink-0">
            <Image
              src={logoSrc}
              alt={logoAlt ?? ""}
              width={48}
              height={48}
              className="rounded-md bg-neutral-800 object-cover"
            />
          </div>
        )}

        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-semibold">{title}</h3>
            {period && (
              <div className="text-xs text-neutral-400 shrink-0">{period}</div>
            )}
          </div>

          {subtitle && <div className="text-sm text-neutral-300">{subtitle}</div>}

          {bullets?.length ? (
            <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-neutral-300">
              {bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          ) : null}

          {badges?.length ? (
            <div className="mt-2 flex flex-wrap gap-2">
              {badges.map((b) => (
                <span key={b} className="text-xs px-2 py-1 rounded-full border border-neutral-700">
                  {b}
                </span>
              ))}
            </div>
          ) : null}

          {/* Bloco de links (site e certificado) */}
          {(linkHref || certificateHref) && (
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              {linkHref && (
                <a href={linkHref} target="_blank" rel="noopener noreferrer" className="underline">
                  Site da instituição
                </a>
              )}
              {certificateHref && (
                <a href={certificateHref} target="_blank" rel="noopener noreferrer" className="underline">
                  Ver certificado (PDF)
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
