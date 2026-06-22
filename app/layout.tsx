import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { marca } from "@/lib/content";
import "./globals.css";

// Fonte de display (títulos): geométrica, confiante, com personalidade.
const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

// Fonte do corpo: limpa e legível.
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MPX Digital — Marketing e Tecnologia",
  description: marca.descricaoSEO,
  metadataBase: new URL("https://mpxdigital.net"),
  openGraph: {
    title: "MPX Digital — Marketing e Tecnologia",
    description: marca.descricaoSEO,
    type: "website",
    locale: "pt_BR",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased bg-navy-900 text-white">
        {children}
      </body>
    </html>
  );
}
