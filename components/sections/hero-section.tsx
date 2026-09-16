"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const REASSURANCES = [
  "Maquette gratuite validée avec vous",
  "Hébergé en Suisse · Infomaniak",
  "Votre logiciel vous appartient",
];

export function HeroSection() {
  const scrollToForm = () => {
    document
      .querySelector("#diagnostic")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Halo doré discret */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(184,134,11,0.08),transparent_70%)] pointer-events-none"
      />

      <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="flex flex-col items-center text-center">
          {/* ---------- Badge ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-[11px] font-medium tracking-[0.08em] uppercase text-[#64748B]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B]" />
            Systèmes web pour entrepreneurs
          </motion.div>

          {/* ---------- H1 en 3 lignes ---------- */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="mt-8 text-[36px] sm:text-5xl lg:text-[64px] font-semibold tracking-tight text-[#0F172A] leading-[1.1]"
          >
            Votre système d'
            <span className="text-[#334155]">acquisition.</span>
            <br />
            Votre système de{" "}
            <span className="text-[#334155]">gestion.</span>
            <br />
            <span className="text-[#B8860B]">Dans un seul logiciel.</span>
          </motion.h1>

          {/* ---------- Sous-titre ---------- */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="mt-7 text-lg text-[#64748B] leading-relaxed max-w-2xl"
          >
            Je conçois le logiciel sur-mesure qui{" "}
            <span className="text-[#334155] font-medium">
              capte vos clients
            </span>
            ,{" "}
            <span className="text-[#334155] font-medium">
              structure votre activité
            </span>{" "}
            et{" "}
            <span className="text-[#334155] font-medium">
              centralise vos données
            </span>
            . Maquette gratuite validée avec vous avant le moindre
            développement.
          </motion.p>

          {/* ---------- CTA unique ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="mt-10"
          >
            <Button size="lg" variant="primary" onClick={scrollToForm}>
              Réserver mon diagnostic gratuit
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* ---------- Réassurances ---------- */}
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 0.45 },
              },
            }}
            className="mt-12 pt-8 border-t border-[#E2E8F0] flex flex-wrap justify-center gap-x-8 gap-y-3 w-full max-w-3xl"
          >
            {REASSURANCES.map((r) => (
              <motion.li
                key={r}
                variants={{
                  hidden: { opacity: 0, y: 6 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 text-sm text-[#334155]"
              >
                <Check
                  className="w-4 h-4 text-[#B8860B]"
                  strokeWidth={2.5}
                />
                {r}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}