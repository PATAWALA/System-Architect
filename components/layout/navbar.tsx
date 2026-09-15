"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#process", label: "Processus" },
  { href: "#expertise", label: "Expertise" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          ? "bg-white/80 backdrop-blur-md border-b border-[#E2E8F0]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-md bg-[#0F172A] flex items-center justify-center overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-[#D4AF37] font-bold text-sm tracking-tight">
                SA
              </span>
            </div>
            <span className="text-[15px] font-semibold tracking-tight text-[#0F172A]">
              System Architect
            </span>
          </Link>

          {/* Liens desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-ink-500 hover:text-ink-900 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA desktop — reprend le gold exact */}
          <div className="hidden md:flex items-center gap-3">
            <Button size="md" variant="primary">
              Demander mon diagnostic gratuit
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>

          {/* Burger mobile */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 -mr-2 text-ink-700"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden border-t border-[#E2E8F0] bg-white">
          <div className="px-6 py-6 space-y-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm text-ink-700 hover:text-ink-900"
              >
                {l.label}
              </Link>
            ))}
            <Button size="md" variant="primary" className="w-full mt-2">
              Demander mon diagnostic gratuit
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}