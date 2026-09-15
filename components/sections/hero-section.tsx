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

export function HeroSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
        {/* ---------- Badge centré ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-[11px] font-medium tracking-[0.08em] uppercase text-[#64748B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B]" />
            Architecture web &amp; automatisation sur-mesure
          </div>
        </motion.div>

        {/* ---------- H1 centré avec machine à écrire ---------- */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-center text-4xl sm:text-5xl lg:text-[60px] font-semibold tracking-tight text-[#0F172A] leading-[1.08]"
        >
          Votre futur{" "}
          <span className="text-[#B8860B] inline-flex items-baseline justify-center align-baseline">
            <Typewriter
              words={ROTATING_WORDS}
              displayDuration={2200}
              fadeDuration={0.4}
            />
          </span>
          <br className="hidden sm:block" /> sur-mesure.
          <br />
          <span className="text-[#64748B]">
            Livré dans quelques semaines.
          </span>
        </motion.h1>

        {/* ---------- Sous-titre centré ---------- */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-7 mx-auto text-center text-lg text-[#64748B] leading-relaxed max-w-2xl"
        >
          À partir de votre façon de travailler actuelle, nous construisons la
          plateforme dédiée qui gère votre{" "}
          <span className="text-[#334155] font-medium">acquisition</span>, vos{" "}
          <span className="text-[#334155] font-medium">réservations</span> et
          vos{" "}
          <span className="text-[#334155] font-medium">données clients</span>.
          Fini le chaos sur WhatsApp et les fichiers éparpillés.
        </motion.p>

        {/* ---------- Bouton unique centré ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <Button
            size="lg"
            variant="primary"
            onClick={() => {
              document
                .querySelector("#diagnostic")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Demander mon diagnostic gratuit
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>

        {/* ---------- Image centrée sous le texte ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative w-full max-w-2xl">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#F1F5F9] border border-[#E2E8F0] shadow-[0_4px_12px_rgba(15,23,42,0.08),0_16px_40px_rgba(15,23,42,0.08)]">
              <Image
                src="/portrait.png"
                alt="Portrait du fondateur — Patawala"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 672px"
                className="object-cover object-center"
              />
            </div>

            {/* Carte flottante discrète */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white border border-[#E2E8F0] rounded-xl shadow-[0_1px_3px_rgba(15,23,42,0.06),0_8px_24px_rgba(15,23,42,0.06)] px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
                  <span className="relative inline-flex rounded-full w-2 h-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-medium text-[#334155]">
                  Disponible pour 2 projets
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}