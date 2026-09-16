"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

/* ============================================================
   CONFIG WHATSAPP
   ============================================================ */
const WHATSAPP_NUMBER = "22962278090";

const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/* ============================================================
   TYPES & DONNÉES
   ============================================================ */

interface FormData {
  activity: string;
  problems: string[];
  otherProblem: string;
  email: string;
  whatsapp: string;
}

const PROBLEM_GROUPS = [
  {
    title: "Acquisition",
    items: ["Je perds des prospects"],
  },
  {
    title: "Gestion & organisation",
    items: [
      "Je gère tout à la main",
      "Mes clients sont éparpillés",
      "Je n'ai pas de suivi commercial",
      "Mes réservations sont manuelles",
    ],
  },
  {
    title: "Image & automatisation",
    items: [
      "Je veux automatiser mon business",
      "Je veux renforcer mon positionnement",
      "J'ai besoin d'un espace client",
    ],
  },
  {
    title: "Autre",
    items: ["Autre chose"],
  },
];

/* ============================================================
   CHAMP RÉUTILISABLE
   ============================================================ */

function Field({
  number,
  label,
  hint,
  children,
}: {
  number: string;
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-3 mb-3">
        <span className="flex-shrink-0 w-6 h-6 rounded-md bg-[#0F172A] text-white text-xs font-semibold flex items-center justify-center">
          {number}
        </span>
        <div>
          <label className="block text-[15px] font-semibold text-[#0F172A] leading-tight">
            {label}
          </label>
          {hint && (
            <p className="mt-0.5 text-xs text-[#94A3B8]">{hint}</p>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

const inputClass =
  "w-full px-4 py-3.5 sm:py-3 rounded-lg bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-[#94A3B8] text-[15px] sm:text-sm transition-all outline-none focus:border-[#B8860B] focus:ring-4 focus:ring-[#B8860B]/10";

/* ============================================================
   COMPOSANT PRINCIPAL
   ============================================================ */

export function CaptureForm() {
  const [data, setData] = useState<FormData>({
    activity: "",
    problems: [],
    otherProblem: "",
    email: "",
    whatsapp: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleProblem = (p: string) => {
    setData((d) => ({
      ...d,
      problems: d.problems.includes(p)
        ? d.problems.filter((x) => x !== p)
        : [...d.problems, p],
    }));
  };

  const hasOther = data.problems.includes("Autre chose");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!data.activity.trim()) {
      setError("Merci d'indiquer votre métier.");
      return;
    }
    if (data.problems.length === 0) {
      setError("Merci de cocher au moins un problème.");
      return;
    }
    if (hasOther && !data.otherProblem.trim()) {
      setError("Merci de préciser votre problème (champ 'Autre chose').");
      return;
    }
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setError("Merci d'entrer une adresse email valide.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/diagnostic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Envoi échoué");
      setSuccess(true);
    } catch {
      setError(
        "Une erreur est survenue. Réessayez ou écrivez-nous sur WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  /* ---------- Message WhatsApp post-envoi ---------- */
  const confirmationMessage = `Bonjour, je viens d'envoyer ma demande de diagnostic via le site.

Métier : ${data.activity}
Problèmes : ${data.problems.join(", ")}${hasOther && data.otherProblem ? ` — ${data.otherProblem}` : ""}
Email : ${data.email}${data.whatsapp ? `\nWhatsApp : ${data.whatsapp}` : ""}`;

  return (
    <section className="relative">
      {/* Halo doré discret */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(184,134,11,0.07),transparent_70%)] pointer-events-none"
      />

      <div className="relative mx-auto max-w-2xl px-5 sm:px-6 pt-12 sm:pt-16 pb-16 sm:pb-20 lg:pt-24 lg:pb-24">
        {/* ============================================================
            EN-TÊTE
           ============================================================ */}
        <div className="text-center mb-8 sm:mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[28px] sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0F172A] leading-[1.15]"
          >
            Votre diagnostic gratuit.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-[15px] sm:text-base text-[#64748B] leading-relaxed max-w-md mx-auto"
          >
            2 minutes pour décrire votre situation. Je reviens vers vous
            sous 24 h avec une première analyse.
          </motion.p>
        </div>

        {/* ============================================================
            CARTE FORMULAIRE
           ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl bg-white border border-[#E2E8F0] shadow-[0_1px_3px_rgba(15,23,42,0.06),0_8px_24px_rgba(15,23,42,0.06)] p-5 sm:p-8 lg:p-10"
        >
          <AnimatePresence mode="wait">
            {!success ? (
              /* ============ FORMULAIRE ============ */
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {/* ---------- 01 — Métier ---------- */}
                <Field
                  number="1"
                  label="Votre métier"
                  hint="Pour comprendre votre activité."
                >
                  <input
                    type="text"
                    required
                    value={data.activity}
                    onChange={(e) =>
                      setData((d) => ({ ...d, activity: e.target.value }))
                    }
                    placeholder="Ex : Coach, Restaurant, Consultant…"
                    className={inputClass}
                  />
                </Field>

                {/* ---------- 02 — Problèmes ---------- */}
                <Field
                  number="2"
                  label="Vos problèmes aujourd'hui"
                  hint="Cochez tout ce qui s'applique."
                >
                  <div className="space-y-5">
                    {PROBLEM_GROUPS.map((group) => (
                      <div key={group.title}>
                        <div className="flex items-center gap-3 mb-2.5">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#94A3B8] whitespace-nowrap">
                            {group.title}
                          </span>
                          <span className="flex-1 h-px bg-[#E2E8F0]" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {group.items.map((p) => {
                            const checked = data.problems.includes(p);
                            return (
                              <button
                                key={p}
                                type="button"
                                onClick={() => toggleProblem(p)}
                                aria-pressed={checked}
                                className={
                                  "group flex items-center gap-3 text-left px-3.5 py-3 sm:py-2.5 rounded-lg border text-[14px] sm:text-sm transition-all min-h-[48px] " +
                                  (checked
                                    ? "border-[#B8860B] bg-[#FBF7E9] text-[#0F172A] font-medium shadow-[0_0_0_3px_rgba(184,134,11,0.08)]"
                                    : "border-[#E2E8F0] bg-white text-[#64748B] hover:border-[#CBD5E1] hover:bg-[#F8FAFC] active:scale-[0.98]")
                                }
                              >
                                <span
                                  className={
                                    "flex-shrink-0 w-5 h-5 rounded-md border flex items-center justify-center transition-all " +
                                    (checked
                                      ? "border-[#B8860B] bg-[#B8860B]"
                                      : "border-[#CBD5E1] bg-white group-hover:border-[#94A3B8]")
                                  }
                                >
                                  {checked && (
                                    <Check
                                      className="w-3.5 h-3.5 text-white"
                                      strokeWidth={3}
                                    />
                                  )}
                                </span>
                                <span className="leading-snug">{p}</span>
                              </button>
                            );
                          })}
                        </div>

                        {group.title === "Autre" && hasOther && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <input
                              type="text"
                              value={data.otherProblem}
                              onChange={(e) =>
                                setData((d) => ({
                                  ...d,
                                  otherProblem: e.target.value,
                                }))
                              }
                              placeholder="Précisez votre problème…"
                              className={inputClass + " mt-2"}
                            />
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                </Field>

                {/* ---------- 03 — Coordonnées ---------- */}
                <Field
                  number="3"
                  label="Vos coordonnées"
                  hint="Aucun spam. Uniquement pour vous recontacter."
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="email"
                      required
                      inputMode="email"
                      autoComplete="email"
                      value={data.email}
                      onChange={(e) =>
                        setData((d) => ({ ...d, email: e.target.value }))
                      }
                      placeholder="Email"
                      className={inputClass}
                    />
                    <input
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={data.whatsapp}
                      onChange={(e) =>
                        setData((d) => ({ ...d, whatsapp: e.target.value }))
                      }
                      placeholder="WhatsApp (optionnel)"
                      className={inputClass}
                    />
                  </div>
                </Field>

                {/* ---------- Erreur ---------- */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-2.5 text-sm text-red-700 bg-red-50 border border-red-100 rounded-lg px-4 py-3"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </motion.div>
                )}

                {/* ---------- Submit ---------- */}
                <div className="pt-1">
                  <Button
                    type="submit"
                    size="lg"
                    variant="primary"
                    disabled={loading}
                    className="w-full"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Envoi en cours…
                      </>
                    ) : (
                      <>
                        Envoyer ma demande
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                  <p className="mt-3 text-center text-xs text-[#94A3B8]">
                    Réponse sous 24 h · Sans engagement
                  </p>
                </div>
              </motion.form>
            ) : (
              /* ============ CONFIRMATION ============ */
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center py-6"
              >
                <div className="w-14 h-14 rounded-full bg-[#FBF7E9] border border-[#B8860B]/30 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-7 h-7 text-[#B8860B]" />
                </div>

                <h3 className="text-2xl font-semibold text-[#0F172A]">
                  Demande envoyée.
                </h3>
                <p className="mt-3 text-[#64748B] leading-relaxed max-w-md mx-auto text-[15px]">
                  Merci. Je reviens vers vous sous 24 h avec une première
                  analyse de votre situation. Pour accélérer, vous pouvez
                  me contacter directement sur WhatsApp.
                </p>

                <div className="mt-8">
                  {/* Bouton principal — WhatsApp (message pré-rempli) */}
                  <a
                    href={buildWhatsAppUrl(confirmationMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#25D366] text-white font-semibold shadow-[0_4px_14px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    Continuer sur WhatsApp
                  </a>
                </div>

                <p className="mt-6 text-xs text-[#94A3B8]">
                  Une confirmation vous a été envoyée à {data.email}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ============================================================
            PIED DE SECTION — Liens secondaires
           ============================================================ */}
        <div className="mt-8 space-y-3 text-center">
          <p className="text-sm text-[#94A3B8]">
            Une question ?{" "}
            <a
              href={buildWhatsAppUrl(
                "Bonjour, j'ai une question avant de remplir le formulaire."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#334155] font-medium underline underline-offset-4 decoration-[#E2E8F0] hover:decoration-[#0F172A] transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
              Écrivez-moi sur WhatsApp
            </a>
          </p>
          <p className="text-sm text-[#94A3B8]">
            Ou par email :{" "}
            <a
              href="mailto:contact@patawala.com"
              className="text-[#334155] underline underline-offset-4 decoration-[#E2E8F0] hover:decoration-[#0F172A] transition-colors"
            >
              contact@patawala.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}