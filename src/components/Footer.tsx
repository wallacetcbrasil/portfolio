// src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { SOCIAL } from "@/lib/site.config";

export default function Footer() {
  // junta primárias (LinkedIn, GitHub, Currículo) + secundárias (YouTube, etc.)
  const items = [...SOCIAL.primary, ...SOCIAL.secondary];

  return (
    <footer className="border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col items-center gap-4">
        <nav className="flex flex-wrap justify-center gap-2" aria-label="Redes sociais">
          {items.map(({ name, href, iconSrc, aria, download }) => {
            const isExternal = href.startsWith("http");
            return (
              <Link
                key={name}
                href={href}
                prefetch={false}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                aria-label={aria ?? name}
                className="inline-flex items-center gap-1 px-2 py-1 rounded-full border border-neutral-700 hover:border-neutral-500 text-sm"
                {...(download ? { download: true } : {})}
              >
                <Image src={iconSrc} alt="" width={16} height={16} className="opacity-90" />
                <span>{name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="text-xs text-neutral-400">
          © {new Date().getFullYear()} Wallace Correia Brasil.
        </div>
      </div>
    </footer>
  );
}
