"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypewriterProps {
  words: string[];
  /** Durée d'affichage du mot complet (ms) */
  displayDuration?: number;
  /** Durée de la transition fade (s) */
  fadeDuration?: number;
  className?: string;
}

export function Typewriter({
  words,
  displayDuration = 2000,
  fadeDuration = 0.4,
  className,
}: TypewriterProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % words.length);
    }, displayDuration);
    return () => clearTimeout(timer);
  }, [index, words.length, displayDuration]);

  return (
    <span className={cn("relative inline-grid", className)}>
      {/* Mot le plus long en invisible pour réserver l'espace (évite le "saut" de mise en page) */}
      <span className="invisible col-start-1 row-start-1" aria-hidden>
        {words.reduce((a, b) => (a.length > b.length ? a : b))}
      </span>

      {/* Mot animé en position superposée */}
      <span className="col-start-1 row-start-1 inline-flex justify-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={words[index]}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: fadeDuration, ease: "easeOut" }}
            className="whitespace-nowrap"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}