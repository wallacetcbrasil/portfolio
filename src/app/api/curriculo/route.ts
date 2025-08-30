// src/app/api/curriculo/route.ts
import { NextResponse } from "next/server";
import { SUMMARY, SKILLS } from "@/lib/skills.data";
import { EDUCATION, CERTIFICATIONS } from "@/lib/education.data";
import { EXPERIENCES } from "@/lib/experience.data";
import { projects } from "@/lib/projects.config";

// Revalida a cada 1h em edge/CDN
export const revalidate = 3600;

export async function GET() {
  // Seleciona só o que faz sentido expor dos projetos
  const publicProjects = projects.map(({ slug, title, short, tags, thumb, kind, url }) => ({
    slug, title, short, tags, thumb, kind, url,
  }));

  const payload = {
    updatedAt: new Date().toISOString(),
    summary: SUMMARY,
    skills: SKILLS,
    education: EDUCATION,
    certifications: CERTIFICATIONS,
    experiences: EXPERIENCES,
    projects: publicProjects,
  };

  return NextResponse.json(payload, {
    headers: {
      // cache em edge + CORS aberto para você consumir de fora (se quiser)
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
