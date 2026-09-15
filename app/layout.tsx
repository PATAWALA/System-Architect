import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "System Architect — Plateformes web sur-mesure",
  description:
    "Je conçois des plateformes web autonomes pour entrepreneurs. Du chaos opérationnel à un système structuré.",
  keywords: [
    "développeur web sur-mesure",
    "système autonome",
    "plateforme B2B",
    "audit digital",
  ],
  openGraph: {
    title: "System Architect — Plateformes web sur-mesure",
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
      <body className="min-h-screen font-sans flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}