"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;   // ms par caractère
  deletingSpeed?: number; // ms par caractère
  pauseDuration?: number; // ms d'attente quand un mot est complet
  className?: string;
}

export function Typewriter({
  words,
  typingSpeed = 55,
  deletingSpeed = 30,
  pauseDuration = 2000,
  className,
}: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "typing"
  );

  useEffect(() => {
    const currentWord = words[wordIndex];

    // ---- Phase TYPING ----
    if (phase === "typing") {
      if (displayed.length < currentWord.length) {
        const t = setTimeout(() => {
          setDisplayed(currentWord.slice(0, displayed.length + 1));
        }, typingSpeed);
        return () => clearTimeout(t);
      }
      // Mot complet → pause
      const t = setTimeout(() => setPhase("pausing"), pauseDuration);
      return () => clearTimeout(t);
    }

    // ---- Phase PAUSING → DELETE ----
    if (phase === "pausing") {
      setPhase("deleting");
      return;
    }

    // ---- Phase DELETING ----
    if (phase === "deleting") {
      if (displayed.length > 0) {
        const t = setTimeout(() => {
          setDisplayed(currentWord.slice(0, displayed.length - 1));
        }, deletingSpeed);
        return () => clearTimeout(t);
      }
      // Mot effacé → mot suivant
      setWordIndex((i) => (i + 1) % words.length);
      setPhase("typing");
    }
  }, [
    displayed,
    phase,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span className={cn("relative inline-block align-baseline", className)}>
      {/* Texte invisible qui réserve l'espace du mot le plus long */}
      <span className="invisible" aria-hidden>
        {words.reduce((a, b) => (a.length > b.length ? a : b))}
      </span>

      {/* Texte réel en position absolue */}
      <span className="absolute inset-0 whitespace-nowrap">
        {displayed}
        {/* Curseur clignotant */}
        <span
          aria-hidden
          className="inline-block w-[3px] h-[0.9em] ml-1 align-middle bg-gold-500 animate-pulse"
        />
      </span>
    </span>
  );
}