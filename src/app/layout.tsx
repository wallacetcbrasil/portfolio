// src/app/layout.tsx
import type { Metadata } from "next";
import { siteMeta } from "@/lib/site.config";
import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.baseUrl),
  title: { default: siteMeta.title, template: `%s · ${siteMeta.title}` },
  description: siteMeta.description,
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.baseUrl,
    siteName: siteMeta.title,
    images: [{ url: siteMeta.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
    images: [siteMeta.ogImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      {/* flex-col + flex-1 para empurrar o footer pro fim da viewport */}
      <body className="min-h-dvh bg-black text-neutral-100 flex flex-col">
        <Nav />
        <main className="mx-auto max-w-7xl px-4 py-6 flex-1">{children}</main>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Wallace Correia Brasil",
              url: siteMeta.baseUrl,
              sameAs: siteMeta.sameAs,
            }),
          }}
        />

        <Footer />
      </body>
    </html>
  );
}
