// next.config.ts
import type { NextConfig } from "next";

/**
 * Você só precisa deste arquivo se for customizar algo.
 * - reactStrictMode: ajuda a pegar problemas de React em dev
 * - images.remotePatterns: permite <Image /> carregar imagens remotas (se usar)
 *   (ex.: thumbs hospedadas fora, ou imagens do HF)
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "huggingface.co", pathname: "/**" },
      { protocol: "https", hostname: "cdn.jsdelivr.net", pathname: "/**" },
      // adicione outros hosts se um dia usar imagens externas
    ],
  },
  // Se um dia precisar de headers/redirects, dá pra configurar aqui:
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         // Exemplo: controlar cache de estáticos ou segurança
  //         // { key: "Cache-Control", value: "public, max-age=3600" },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;