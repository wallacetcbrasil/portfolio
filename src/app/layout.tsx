import type { Metadata, Viewport } from "next";
import { siteMeta } from "@/lib/site.config";
import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

/** Meta de viewport (mobile / PWA-ish) */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  colorScheme: "dark",
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.baseUrl),
  title: { default: siteMeta.title, template: `%s · ${siteMeta.title}` },
  description: siteMeta.description,
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.png",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.baseUrl,
    siteName: siteMeta.title,
    images: [
      {
        url: siteMeta.ogImage, // ex.: "/og-default.png"
        width: 1200,
        height: 630,
        alt: siteMeta.title,
      },
    ],
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
      <head>
        {/* JSON-LD no <head> para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Wallace Correia Brasil",
              url: siteMeta.baseUrl,
              sameAs: siteMeta.sameAs, 
              image: siteMeta.ogImage,
            }),
          }}
        />
      </head>
      {/* flex-col + flex-1 empurra o footer para o fim da viewport */}
      <body className="min-h-dvh bg-black text-neutral-100 flex flex-col">
        <Nav />
        <main className="mx-auto max-w-7xl px-4 py-6 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
