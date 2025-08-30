// src/app/experiencias/page.tsx (trecho)
import { EXPERIENCES } from "@/lib/experience.data";
import Section from "@/components/Section";
import InfoCard from "@/components/InfoCard";

export default function ExperienciasPage() {
  return (
    <main className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-semibold">Experiências</h1>
      <Section title="Profissional">
        <div className="space-y-4">
          {EXPERIENCES.map((x) => (
            <InfoCard
              key={x.company + x.role}
              title={`${x.role} · ${x.company}`}
              period={[x.start, x.end].filter(Boolean).join(" — ")}
              bullets={x.bullets}
              badges={x.tech}
              linkHref={x.link}
              logoSrc={x.logo}     // ← usa o logo se existir
              logoAlt={x.company}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}
