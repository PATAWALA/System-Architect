import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://patawala.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Patawala — Votre diagnostic gratuit",
  description:
    "2 minutes pour décrire votre situation. Je reviens vers vous sous 24 h avec une première analyse.",
  keywords: [
    "diagnostic gratuit",
    "logiciel métier sur-mesure",
    "système d'acquisition",
    "gestion clients",
    "Patawala",
  ],
  authors: [{ name: "Patawala" }],
  creator: "Patawala",

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

  manifest: "/manifest.json",

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Patawala",
    title: "Patawala — Votre diagnostic gratuit",
    description:
      "2 minutes pour décrire votre situation. Je reviens vers vous sous 24 h avec une première analyse.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Patawala — Diagnostic gratuit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Patawala — Votre diagnostic gratuit",
    description:
      "2 minutes pour décrire votre situation. Réponse sous 24 h.",
    images: ["/og-image.png"],
  },

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
      <body className="min-h-screen font-sans bg-[#F8FAFC] text-[#0F172A] antialiased">
        {children}
      </body>
    </html>
  );
}