import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* ============================================================
   CONFIG SITE
   ============================================================ */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://diagnostic.patawala.com";

const SITE_NAME = "Patawala";
const SITE_TITLE = "Patawala — Votre diagnostic gratuit";
const SITE_DESCRIPTION =
  "2 minutes pour décrire votre situation. Je reviens vers vous sous 24 h avec une première analyse. Logiciels métier sur-mesure pour entrepreneurs.";

/* ============================================================
   METADATA
   ============================================================ */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  /* ---------- Titre & description ---------- */
  title: {
    default: SITE_TITLE,
    template: "%s · Patawala",
  },
  description: SITE_DESCRIPTION,

  /* ---------- Mots-clés ---------- */
  keywords: [
    "diagnostic gratuit",
    "logiciel métier sur-mesure",
    "application sur-mesure",
    "système d'acquisition",
    "gestion clients",
    "automatisation PME",
    "portail client",
    "Patawala",
  ],

  /* ---------- Auteur ---------- */
  authors: [{ name: "Patawala", url: SITE_URL }],
  creator: "Patawala",
  publisher: "Patawala",

  /* ---------- Canonical (évite le contenu dupliqué) ---------- */
  alternates: {
    canonical: SITE_URL,
  },

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

  /* ---------- PWA ---------- */
  manifest: "/manifest.json",

  /* ---------- Open Graph (Facebook, LinkedIn, WhatsApp) ---------- */
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["fr_BE", "fr_CA", "fr_CH"],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Patawala — Diagnostic gratuit pour entrepreneurs",
        type: "image/png",
      },
    ],
  },

  /* ---------- Twitter / X ---------- */
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@patawala", // ⚠️ À remplacer par ton vrai compte X si tu en as un
  },

  /* ---------- Robots ---------- */
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  /* ---------- Vérification Google Search Console (à remplir) ---------- */
  verification: {
    google: "", // ⚠️ À remplir quand tu auras ton code GSC
    // yandex: "...",
    // bing: "...",
  },

  /* ---------- Catégorie & autres ---------- */
  category: "business",
  applicationName: "Patawala",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

/* ============================================================
   VIEWPORT
   ============================================================ */
export const viewport: Viewport = {
  themeColor: "#F8FAFC",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/* ============================================================
   JSON-LD (données structurées Schema.org)
   ============================================================ */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "fr-FR",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/android-chrome-512x512.png`,
      width: 512,
      height: 512,
    },
  },
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: SITE_URL,
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    result: {
      "@type": "Reservation",
      name: "Diagnostic gratuit",
    },
  },
};

/* ============================================================
   LAYOUT
   ============================================================ */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        {/* JSON-LD pour Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen font-sans bg-[#F8FAFC] text-[#0F172A] antialiased">
        {children}
      </body>
    </html>
  );
}