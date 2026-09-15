import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "System Architect — Plateformes Web Sur-Mesure",
  description:
    "Du chaos opérationnel à une plateforme sur-mesure. Diagnostic, prototype et système web autonome pour entrepreneurs.",
  keywords: [
    "développeur web sur-mesure",
    "système autonome",
    "plateforme B2B",
    "audit digital",
  ],
  openGraph: {
    title: "System Architect — Plateformes Web Sur-Mesure",
    description:
      "Remplacez le chaos manuel par un système structuré et autonome.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}