"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/ui/typewriter";

const ROTATING_WORDS = [
  "Portail Client",
  "Système de Réservation",
  "Fichier Client Centralisé",
  "Catalogue Intelligent",
];

const METRICS = [
  { value: "4 h", label: "Audit de vos processus" },
  { value: "5 jours", label: "Prototype cliquable" },
  { value: "1 / sem.", label: "Livrable fonctionnel" },
];

export function HeroSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ---------- Colonne texte ---------- */}
          <div className="lg:col-span-7">
            {/* 1. Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-ink-300/60 text-[11px] font-medium tracking-[0.08em] uppercase text-ink-500"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              Architecture web &amp; automatisation sur-mesure
            </motion.div>

            {/* 2. H1 avec machine à écrire */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-ink-900 leading-[1.08]"
            >
              Votre futur{" "}
              <span className="text-accent inline-flex items-baseline">
                <Typewriter
                  words={ROTATING_WORDS}
                  typingSpeed={55}
                  deletingSpeed={30}
                  pauseDuration={2000}
                />
              </span>{" "}
              sur-mesure.
              <br />
              <span className="text-ink-500">
                Livré dans quelques semaines.
              </span>
            </motion.h1>

            {/* 3. Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-ink-500 leading-relaxed max-w-xl"
            >
              À partir de votre façon de travailler actuelle, nous
              construisons la plateforme dédiée qui gère votre{" "}
              <span className="text-ink-700 font-medium">acquisition</span>,
              vos{" "}
              <span className="text-ink-700 font-medium">réservations</span>{" "}
              et vos{" "}
              <span className="text-ink-700 font-medium">données clients</span>.
              Fini le chaos sur WhatsApp et les fichiers éparpillés.
            </motion.p>

            {/* 4. Bouton unique */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-9"
            >
              <Button
                size="lg"
                variant="primary"
                onClick={() => {
                  // À brancher : scroll vers formulaire, ouverture Calendly,
                  // ou redirection WhatsApp Business structuré
                  document
                    .querySelector("#diagnostic")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Demander mon diagnostic gratuit
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>

            {/* 5. Métriques */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-ink-300/60 grid grid-cols-3 gap-6"
            >
              {METRICS.map((m) => (
                <div key={m.label}>
                  <div className="text-2xl font-semibold tracking-tight text-ink-900">
                    {m.value}
                  </div>
                  <div className="mt-1 text-xs text-ink-500 leading-snug">
                    {m.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ---------- Colonne image ---------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-surface-soft border border-ink-300/60 shadow-elevated">
                <Image
                  src="/portrait.png"
                  alt="Portrait du fondateur — System Architect"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
              </div>

              {/* Carte flottante discrète */}
              <div className="absolute -bottom-5 -left-5 bg-surface border border-ink-300/60 rounded-xl shadow-card px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
                    <span className="relative inline-flex rounded-full w-2 h-2 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-medium text-ink-700">
                    Disponible pour 2 projets
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}