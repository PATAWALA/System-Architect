import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* URL de production — à adapter une fois déployé */
const SITE_URL = "https://patawala.com";

export const metadata: Metadata = {
  /* ---------- Base ---------- */
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Patawala — Plateformes web sur-mesure",
    template: "%s · Patawala",
  },
  description:
    "À partir de votre façon de travailler actuelle, nous construisons la plateforme dédiée qui gère votre acquisition, vos réservations et vos données clients.",

  /* ---------- Mots-clés & auteurs ---------- */
  keywords: [
    "plateforme web sur-mesure",
    "automatisation PME",
    "portail client",
    "système de réservation",
    "gestion clients",
    "Patawala",
  ],
  authors: [{ name: "Patawala" }],
  creator: "Patawala",

  /* ---------- Icônes ---------- */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      {
        url: "/android-chrome-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "/android-chrome-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },

  /* ---------- Manifest PWA ---------- */
  manifest: "/manifest.json",

  /* ---------- Open Graph (Facebook, LinkedIn, WhatsApp) ---------- */
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Patawala",
    title: "Patawala — Plateformes web sur-mesure",
    description:
      "Votre futur portail client sur-mesure, livré dans quelques semaines. Acquisition, réservations et gestion clients dans un seul système.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Patawala — Plateformes web sur-mesure",
      },
    ],
  },

  /* ---------- Twitter / X ---------- */
  twitter: {
    card: "summary_large_image",
    title: "Patawala — Plateformes web sur-mesure",
    description:
      "Votre futur portail client sur-mesure, livré dans quelques semaines.",
    images: ["/og-image.png"],
  },

  /* ---------- Robots ---------- */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ---------- Couleur de la barre navigateur mobile ---------- */
export const viewport: Viewport = {
  themeColor: "#F8FAFC",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen font-sans flex flex-col bg-[#F8FAFC] text-[#0F172A] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}