import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = "https://seu-dominio.com"; // troque ao publicar
  const now = new Date();
  return [
    { url: `${url}/`,            lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${url}/formacao`,    lastModified: now, changeFrequency: "yearly",  priority: 0.8 },
    { url: `${url}/experiencias`,lastModified: now, changeFrequency: "yearly",  priority: 0.8 },
    { url: `${url}/projetos`,    lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${url}/ajuda`,       lastModified: now, changeFrequency: "yearly",  priority: 0.5 },
    { url: `${url}/curriculo`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];
}
