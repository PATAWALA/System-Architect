"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const REASSURANCES = [
  "Diagnostic en 4 h",
  "Prototype en 5 jours",
  "Première version en 30 jours",
];

export function HeroSection() {
  const scrollToForm = () => {
    document
      .querySelector("#diagnostic")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Halo doré discret en fond */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(184,134,11,0.08),transparent_70%)] pointer-events-none"
      />

      <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="flex flex-col items-center text-center">
          {/* ---------- H1 — orienté logiciel métier ---------- */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-[40px] sm:text-5xl lg:text-[64px] font-semibold tracking-tight text-[#0F172A] leading-[1.05] max-w-4xl"
          >
            Votre logiciel métier,
            <br />
            <span className="text-[#B8860B]">
              aligné sur vos vrais problèmes.
            </span>
            <br />
            <span className="text-[#64748B] text-3xl sm:text-4xl lg:text-[44px] font-medium">
              Livré dans quelques semaines.
            </span>
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
            className="mt-8 text-lg text-[#64748B] leading-relaxed max-w-2xl"
          >
            À partir de votre façon de travailler actuelle, nous concevons le{" "}
            <span className="text-[#334155] font-medium">
              logiciel dédié
            </span>{" "}
            qui gère votre{" "}
            <span className="text-[#334155] font-medium">acquisition</span>,
            vos{" "}
            <span className="text-[#334155] font-medium">réservations</span> et
            vos{" "}
            <span className="text-[#334155] font-medium">clients</span>. Fini
            le chaos WhatsApp et les fichiers éparpillés.
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
            className="mt-12 pt-8 border-t border-[#E2E8F0] flex flex-wrap justify-center gap-x-8 gap-y-3 w-full max-w-2xl"
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