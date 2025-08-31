import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const url = "https://portfolio-nu-plum-54.vercel.app/"; // troque ao publicar
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${url}/sitemap.xml`,
  };
}
