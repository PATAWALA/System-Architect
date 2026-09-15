"use client";

import { motion,type Variants } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SystemDashboard } from "@/components/ui/mockups/system-dashboard";

const badges = [
  { value: "4h", label: "d'Audit de vos processus" },
  { value: "5 jours", label: "pour un Prototype cliquable" },
  { value: "1", label: "livrable fonctionnel / semaine" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as const, // ← 🎯 LE FIX
    },
  }),
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Grille décorative */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-28 lg:pt-32 lg:pb-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Colonne texte */}
          <div>
            {/* Badge */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full card-glass text-xs tracking-widest text-gold-300 uppercase"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Architecture Web Sur-Mesure
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05]"
            >
              Du chaos opérationnel à une{" "}
              <span className="text-gradient-gold">plateforme sur-mesure.</span>
              <br />
              <span className="text-slate-400">En quelques semaines.</span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="mt-6 text-base lg:text-lg text-slate-400 leading-relaxed max-w-xl"
            >
              Éliminez la gestion manuelle sur WhatsApp et les fichiers éparpillés.
              Nous concevons le système web autonome qui gère vos réservations,
              vos clients et vos flux à votre place.
            </motion.p>

            {/* Badges métriques */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
              className="mt-8 flex flex-wrap gap-3"
            >
              {badges.map((b) => (
                <div
                  key={b.label}
                  className="card-glass rounded-xl px-4 py-2.5 flex items-baseline gap-2"
                >
                  <span className="text-lg font-semibold text-gradient-gold">
                    {b.value}
                  </span>
                  <span className="text-xs text-slate-400">{b.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={4}
              className="mt-10 flex flex-col sm:flex-row gap-3"
            >
              <Button size="lg" variant="primary">
                Évaluer la maturité de ma structure
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="secondary">
                <PlayCircle className="w-4 h-4" />
                Voir le processus
              </Button>
            </motion.div>
          </div>

          {/* Colonne visuelle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <SystemDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}