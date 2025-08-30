// src/lib/site.config.ts

// Link do currículo usado em várias partes do site
export const CV_URL = "/cv/wallace-correa-brasil-cv.pdf";

// Tipo comum para os links sociais (usando seus SVGs do /public/icons)
export type SocialLink = {
  name: string;
  href: string;
  iconSrc: string; // caminho relativo dentro de /public
  aria?: string;
  download?: boolean;
};

// Redes organizadas por prioridade (primary = navbar; secondary = rodapé)
export const SOCIAL: {
  primary: SocialLink[];
  secondary: SocialLink[];
} = {
  primary: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/wallacecorreiabrasil/",
      iconSrc: "/icons/linkedin.svg",
      aria: "LinkedIn de Wallace",
    },
    {
      name: "GitHub",
      href: "https://github.com/wallacetcbrasil",
      iconSrc: "/icons/github.svg",
      aria: "GitHub de Wallace",
    },
  ],
  secondary: [
    {
      name: "ArtStation",
      href: "https://www.artstation.com/wallacetcbrasil",
      iconSrc: "/icons/artstation.svg",
      aria: "ArtStation",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@Stream_Brasil/",
      iconSrc: "/icons/youtube.svg",
      aria: "YouTube",
    },
    {
      name: "Twitch",
      href: "https://www.twitch.tv/stream_brasil",
      iconSrc: "/icons/twitch.svg",
      aria: "Twitch",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/wallace__brasil/",
      iconSrc: "/icons/instagram.svg",
      aria: "Instagram",
    },
  ],
};

// Metadados globais do site (usados no layout e SEO)
export const siteMeta = {
  title: "Wallace Correia Brasil",
  description: "Portfólio — projetos, experiências e currículo.",
  // Em produção, defina NEXT_PUBLIC_SITE_URL nas variáveis de ambiente (ex.: https://seu-dominio.com)
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-nu-plum-54.vercel.app/",
  ogImage: "/og-default.png",
  // Perfis públicos para JSON-LD (melhora SEO/Knowledge Graph)
  sameAs: [
    "https://www.linkedin.com/in/wallacecorreiabrasil/",
    "https://github.com/wallacetcbrasil",
    "https://www.artstation.com/wallacetcbrasil",
    "https://www.youtube.com/@Stream_Brasil/",
    "https://www.twitch.tv/stream_brasil",
    "https://www.instagram.com/wallace__brasil/",
  ],
} as const;

// Helper para montar URLs absolutas a partir do baseUrl
export const absoluteUrl = (path = "/") =>
  new URL(path, siteMeta.baseUrl).toString();
