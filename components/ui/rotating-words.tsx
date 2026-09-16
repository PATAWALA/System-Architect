"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RotatingWordsProps {
  words: string[];
  /** Durée d'affichage de chaque mot (ms) */
  displayDuration?: number;
  /** Durée de la transition (s) */
  fadeDuration?: number;
  className?: string;
}

export function RotatingWords({
  words,
  displayDuration = 2200,
  fadeDuration = 0.45,
  className,
}: RotatingWordsProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % words.length);
    }, displayDuration);
    return () => clearTimeout(timer);
  }, [index, words.length, displayDuration]);

  // Mot le plus long → pour réserver l'espace
  const longest = words.reduce((a, b) => (a.length > b.length ? a : b));

  return (
    <span className={cn("relative inline-grid align-baseline", className)}>
      {/* Réservation d'espace invisible */}
      <span className="invisible col-start-1 row-start-1" aria-hidden>
        {longest}
      </span>

      {/* Mot animé */}
      <span className="col-start-1 row-start-1 inline-flex justify-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={words[index]}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: fadeDuration,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="whitespace-nowrap text-[#334155]"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}