"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RotatingWords } from "@/components/ui/rotating-words";

const ROTATING_WORDS = [
  "portail client",
  "système d'acquisition",
  "CRM sur-mesure",
  "outil de gestion",
  "machine à écrire",
  "logiciel métier",
];

const REASSURANCES = [
  "Maquette gratuite validée avec vous",
  "Hébergé en Suisse · Infomaniak",
  "L'application vous appartient",
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

      <div className="relative mx-auto max-w-4xl px-6 pt-24 pb-20 lg:pt-32 lg:pb-24">
        <div className="flex flex-col items-center text-center">
          {/* ---------- Badge ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-[11px] font-medium tracking-[0.08em] uppercase text-[#64748B]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B]" />
            Systèmes web sur-mesure
          </motion.div>

          {/* ---------- H1 avec mot rotatif ---------- */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="mt-10 text-[34px] sm:text-5xl lg:text-[60px] font-semibold tracking-tight text-[#0F172A] leading-[1.15]"
          >
            Repartez avec votre
            <br />
            <RotatingWords
              words={ROTATING_WORDS}
              displayDuration={2200}
              fadeDuration={0.45}
            />
            <br />
            <span className="text-[#B8860B]">En 7 jours.</span>
          </motion.h1>

          {/* ---------- CTA unique ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="mt-12"
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
                transition: { staggerChildren: 0.1, delayChildren: 0.4 },
              },
            }}
            className="mt-14 pt-8 border-t border-[#E2E8F0] flex flex-wrap justify-center gap-x-8 gap-y-3 w-full max-w-3xl"
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