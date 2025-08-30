// src/components/Nav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// só href e label
const NAV_ITEMS = [
  { href: "/", label: "Início" },
  { href: "/formacao", label: "Formação" },
  { href: "/experiencias", label: "Experiências" },
  { href: "/projetos", label: "Projetos" },
  { href: "/curriculo", label: "Currículo" },
  { href: "/ajuda", label: "Ajuda" },
] as const;

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav
      role="navigation"
      aria-label="Navegação principal"
      className="sticky top-0 z-50 w-full bg-black/70 backdrop-blur"
    >
      {/* centralizado e sem conteúdo lateral */}
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-center">
        <div className="flex items-center gap-2">
          {NAV_ITEMS.map(({ href, label }) => {
            const isActive =
              pathname === href || (href !== "/" && pathname?.startsWith(href));

            return (
              <Link
                key={href}
                href={href}
                prefetch={false}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "no-underline inline-flex items-center px-3 py-1.5 rounded-full border text-sm transition",
                  isActive
                    ? "border-neutral-500 bg-neutral-900"
                    : "border-neutral-700 hover:border-neutral-600",
                ].join(" ")}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
