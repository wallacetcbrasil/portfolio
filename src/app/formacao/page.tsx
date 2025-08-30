// src/app/formacao/page.tsx
import Section from "@/components/Section";
import InfoCard from "@/components/InfoCard";
import { EDUCATION, CERTIFICATIONS } from "@/lib/education.data";
import Certifications from "@/components/Certifications";

export default function FormacaoPage() {
  return (
    <main className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-semibold">Formação</h1>

      <Section title="Acadêmica">
        <div className="space-y-4">
          {EDUCATION.map((e) => (
            <InfoCard
              key={e.institution + e.course}
              title={e.institution}
              subtitle={`${e.course} · ${e.level}`}
              period={[e.start, e.end].filter(Boolean).join(" — ")}
              bullets={e.details}
              linkHref={e.link}
              logoSrc={e.logo}
              logoAlt={e.institution}
              certificateHref={e.certificateUrl}      // ← novo
              certificateImgSrc={e.certificateImg}    // ← opcional
            />
          ))}
        </div>
      </Section>

      {/* filtro por área/subárea com contadores */}
      <Certifications items={CERTIFICATIONS} />
    </main>
  );
}
