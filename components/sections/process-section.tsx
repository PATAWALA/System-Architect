"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import {
  AuditMockup,
  PrototypeMockup,
  SprintsMockup,
  IndependenceMockup,
} from "@/components/ui/mockups/step-mockups";

const steps = [
  {
    number: "01",
    title: "Audit",
    duration: "4 heures",
    description:
      "On commence par trouver le vrai problème, pas le symptôme.",
    Mockup: AuditMockup,
  },
  {
    number: "02",
    title: "Prototype",
    duration: "5 jours",
    description:
      "Vous testez votre futur outil avant de valider le projet.",
    Mockup: PrototypeMockup,
  },
  {
    number: "03",
    title: "Sprints",
    duration: "Livraison hebdomadaire",
    description:
      "Vous utilisez et validez l'outil pendant qu'on le construit.",
    Mockup: SprintsMockup,
  },
  {
    number: "04",
    title: "Indépendance & Suivi",
    duration: "À votre rythme",
    description:
      "Le système vous appartient à 100%. On reste à vos côtés si vous le souhaitez.",
    Mockup: IndependenceMockup,
  },
];

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Progression du scroll sur la section (0 → 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.6", "end 0.4"],
  });

  // Hauteur de la ligne dorée animée
  const progressHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  // Détection de l'étape active
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(
      steps.length - 1,
      Math.max(0, Math.floor(latest * steps.length))
    );
    setActive(idx);
  });

  // Mockup actuel (avec crossfade)
  const ActiveMockup = steps[active].Mockup;

  return (
    <section
      ref={containerRef}
      className="relative py-24 lg:py-32"
      id="process"
    >
      {/* Séparateur haut */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-gold-400/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header section */}
        <div className="max-w-2xl mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full card-glass text-xs tracking-widest text-gold-300 uppercase mb-6">
            Le Processus
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
            Un déroulé <span className="text-gradient-gold">précis</span>,
            <br />
            <span className="text-slate-400">du diagnostic à l'autonomie.</span>
          </h2>
        </div>

        {/* Grille : timeline (gauche) + mockup sticky (droite) */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* --- Colonne timeline --- */}
          <div className="relative">
            {/* Ligne de fond */}
            <div className="absolute left-[27px] top-2 bottom-2 w-px bg-slate-800" />
            {/* Ligne de progression dorée */}
            <motion.div
              style={{ height: progressHeight }}
              className="absolute left-[27px] top-2 w-px bg-gradient-to-b from-gold-300 via-gold-400 to-gold-600 shadow-gold-glow"
            />

            <div className="space-y-24">
              {steps.map((step, i) => {
                const isActive = i === active;
                const isDone = i < active;

                return (
                  <div key={step.number} className="relative pl-20">
                    {/* Pastille */}
                    <div
                      className={[
                        "absolute left-0 top-0 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500",
                        isActive
                          ? "bg-gold-gradient text-slate-950 shadow-gold-glow-lg scale-110"
                          : isDone
                          ? "bg-gold-400/20 border border-gold-400/60 text-gold-300"
                          : "bg-slate-900 border border-slate-800 text-slate-500",
                      ].join(" ")}
                    >
                      <span className="text-sm font-semibold tracking-tight">
                        {step.number}
                      </span>
                    </div>

                    {/* Contenu */}
                    <motion.div
                      animate={{
                        opacity: isActive ? 1 : isDone ? 0.75 : 0.4,
                        x: isActive ? 0 : -4,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="flex items-baseline gap-3 mb-2">
                        <h3
                          className={[
                            "text-xl lg:text-2xl font-semibold tracking-tight transition-colors",
                            isActive ? "text-white" : "text-slate-400",
                          ].join(" ")}
                        >
                          {step.title}
                        </h3>
                        <span
                          className={[
                            "text-[11px] uppercase tracking-widest px-2 py-0.5 rounded-full border",
                            isActive
                              ? "border-gold-400/40 text-gold-300 bg-gold-400/5"
                              : "border-slate-800 text-slate-500",
                          ].join(" ")}
                        >
                          {step.duration}
                        </span>
                      </div>
                      <p
                        className={[
                          "text-sm lg:text-base leading-relaxed max-w-md transition-colors",
                          isActive ? "text-slate-300" : "text-slate-500",
                        ].join(" ")}
                      >
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* --- Colonne mockup sticky --- */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <div className="relative h-[420px]">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.number}
                    animate={{
                      opacity: i === active ? 1 : 0,
                      y: i === active ? 0 : 20,
                      scale: i === active ? 1 : 0.96,
                      pointerEvents: i === active ? "auto" : "none",
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <step.Mockup />
                  </motion.div>
                ))}
              </div>

              {/* Indicateur étape */}
              <div className="mt-8 flex items-center gap-3">
                <span className="text-[11px] tracking-widest uppercase text-slate-500">
                  Étape {active + 1} / {steps.length}
                </span>
                <div className="flex gap-1.5">
                  {steps.map((_, i) => (
                    <span
                      key={i}
                      className={[
                        "h-1 rounded-full transition-all duration-500",
                        i === active
                          ? "w-8 bg-gold-400 shadow-gold-glow"
                          : "w-2 bg-slate-800",
                      ].join(" ")}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Version mobile : mockup sous la timeline */}
          <div className="lg:hidden">
            <ActiveMockup />
          </div>
        </div>
      </div>
    </section>
  );
}