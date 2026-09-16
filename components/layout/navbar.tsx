"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
        <div className="flex h-16 items-center justify-center">
          <Link
            href="/"
            aria-label="Patawala — Accueil"
            className="flex items-center transition-opacity hover:opacity-80"
          >
            <Image
              src="/images/patawala_logo_v2.png"
              alt="Patawala"
              width={180}
              height={48}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}