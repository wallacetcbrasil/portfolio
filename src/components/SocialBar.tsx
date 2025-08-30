// src/components/SocialBar.tsx
import Link from "next/link";
import Image from "next/image";
import { SOCIAL } from "@/lib/site.config";

type Props = {
  variant?: "primary" | "secondary";
  className?: string;
};

export default function SocialBar({ variant = "primary", className = "" }: Props) {
  const items = SOCIAL[variant];
  return (
    <nav className={`flex items-center gap-2 ${className}`} aria-label={`Links ${variant}`}>
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
            <Image
              src={iconSrc}
              alt=""
              width={16}
              height={16}
              className="opacity-90"
              priority={false}
            />
            <span className="hidden sm:inline">{name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
