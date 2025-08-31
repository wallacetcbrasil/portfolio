import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "huggingface.co", pathname: "/**" },
      { protocol: "https", hostname: "cdn.jsdelivr.net", pathname: "/**" },
    ],
  },
};

export default nextConfig;