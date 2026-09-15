"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-[#E2E8F0]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* ---------- Logo seul ---------- */}
          <Link
            href="/"
            aria-label="Retour à l'accueil"
            className="flex items-center transition-opacity hover:opacity-80"
          >
            <Image
              src="/patawala_logo_v2.png"
              alt="Patawala"
              width={180}
              height={48}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* ---------- Bouton unique ---------- */}
          <Button
            size="lg"
            variant="primary"
            onClick={() => {
              // À brancher plus tard : scroll vers #diagnostic, Calendly, etc.
              document
                .querySelector("#diagnostic")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Demander mon diagnostic gratuit
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}