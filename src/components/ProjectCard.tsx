// src/components/ProjectCard.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects.config";

export interface ProjectCardProps {
  project: Project;             // dados do cartão
  onOpen: (slug: string) => void; // callback para abrir na caixa cinza
}

/**
 * Cartão clicável que mostra capa, título, descrição curta e tags.
 * - motion.*: habilita animações (Framer Motion)
 * - layoutId: mesmo ID aqui e no modal => animação "morph"
 */
export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project.slug)}
      layoutId={`card-${project.slug}`}
      className="text-left rounded-2xl bg-neutral-900 border border-neutral-800 p-4 hover:border-neutral-700 transition"
      aria-label={`Abrir projeto ${project.title}`}
    >
      {/* Capa */}
      <div className="relative w-full aspect-video mb-3 overflow-hidden rounded-xl border border-neutral-800">
        <Image src={project.thumb} alt={project.title} fill className="object-cover" />
      </div>

      {/* Título + descrição */}
      <div className="text-lg font-medium">{project.title}</div>
      <p className="text-sm text-neutral-400">{project.short}</p>

      {/* Tags */}
      <div className="mt-2 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full border border-neutral-700">
            {t}
          </span>
        ))}
      </div>
    </motion.button>
  );
}
