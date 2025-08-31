export const CV_URL = "/cv/wallace-correa-brasil-cv.pdf";

export type SocialLink = {
  name: string;
  href: string;
  iconSrc: string; 
  aria?: string;
  download?: boolean;
};

export const SOCIAL: {
  primary: SocialLink[];
  secondary: SocialLink[];
} = {
  primary: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/wallacecorreiabrasil/",
      iconSrc: "/icons/linkedin.png",
      aria: "LinkedIn de Wallace",
    },
    {
      name: "GitHub",
      href: "https://github.com/wallacetcbrasil",
      iconSrc: "/icons/github.png",
      aria: "GitHub de Wallace",
    },
  ],
  secondary: [
    {
      name: "ArtStation",
      href: "https://www.artstation.com/wallacetcbrasil",
      iconSrc: "/icons/artstation.png",
      aria: "ArtStation",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@Stream_Brasil/",
      iconSrc: "/icons/youtube.png",
      aria: "YouTube",
    },
    {
      name: "Twitch",
      href: "https://www.twitch.tv/stream_brasil",
      iconSrc: "/icons/twitch.png",
      aria: "Twitch",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/wallace__brasil/",
      iconSrc: "/icons/instagram.png",
      aria: "Instagram",
    },
  ], 
};

export const siteMeta = {
  title: "Portfolio - Wallace Correia Brasil",
  description: "Projetos, experiências e currículo.",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-nu-plum-54.vercel.app/",
  ogImage: "/og-default.png",
  sameAs: [
    "https://www.linkedin.com/in/wallacecorreiabrasil/",
    "https://github.com/wallacetcbrasil",
    "https://www.artstation.com/wallacetcbrasil",
    "https://www.youtube.com/@Stream_Brasil/",
    "https://www.twitch.tv/stream_brasil",
    "https://www.instagram.com/wallace__brasil/",
  ],
} as const;

export const absoluteUrl = (path = "/") =>
  new URL(path, siteMeta.baseUrl).toString();
