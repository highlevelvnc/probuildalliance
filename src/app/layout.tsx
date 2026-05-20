import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/constants";

const display = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.url),
  title: {
    default: "PA Remodelações | Construção e Remodelações em Lisboa e Setúbal",
    template: "%s · PA Remodelações",
  },
  description:
    "Empresa de construção civil, remodelações e manutenção em Lisboa, Setúbal e Área Metropolitana. Pintura, eletricidade, pladur, pavimento flutuante, decks e marcenaria. Orçamento grátis em 24h.",
  applicationName: COMPANY.name,
  authors: [{ name: COMPANY.name }],
  keywords: [
    "construção civil Lisboa",
    "remodelações Setúbal",
    "PA Remodelações",
    "remodelação casa de banho Lisboa",
    "instalação de decks",
    "pavimento flutuante Portugal",
    "pladur drywall",
    "eletricidade Lisboa",
  ],
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: COMPANY.url,
    siteName: COMPANY.name,
    title: "PA Remodelações — Construímos Confiança. Criamos Espaços.",
    description:
      "Construção, remodelações e manutenção premium em Lisboa, Setúbal e Área Metropolitana.",
    images: [
      {
        url: "/icons/og-image.png",
        width: 1200,
        height: 630,
        alt: "PA Remodelações — Construímos Confiança",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PA Remodelações — Construímos Confiança",
    description:
      "Construção, remodelações e manutenção premium em Lisboa, Setúbal e Área Metropolitana.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: COMPANY.url,
    languages: { "pt-PT": COMPANY.url },
  },
};

export const viewport: Viewport = {
  themeColor: "#0F0F10",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT" className={`${display.variable} ${body.variable}`}>
      <body className="font-body bg-ink text-cream antialiased">
        {children}
      </body>
    </html>
  );
}
