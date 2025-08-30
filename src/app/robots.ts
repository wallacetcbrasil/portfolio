import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const url = "https://seu-dominio.com"; // troque ao publicar
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${url}/sitemap.xml`,
  };
}
