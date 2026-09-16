"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ---------- Types ---------- */
interface FormData {
  activity: string;
  problems: string[];
  otherProblem: string;
  email: string;
  whatsapp: string;
}

const PROBLEMS = [
  "Je perds des prospects",
  "Je gère tout à la main",
  "Mes clients sont éparpillés",
  "Je n'ai pas de suivi commercial",
  "Mes réservations sont manuelles",
  "J'ai besoin d'un espace client",
  "Autre chose",
];

/* ---------- Champ ---------- */
function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#0F172A] mb-3">
        {label}
      </label>
      {children}
      {hint && <p className="mt-2 text-xs text-[#94A3B8]">{hint}</p>}
    </div>
  );
}

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-[#94A3B8] text-sm transition-all outline-none focus:border-[#B8860B] focus:ring-4 focus:ring-[#B8860B]/10";

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

    if (!data.activity) {
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
        "Une erreur est survenue. Réessayez ou écrivez-nous à contact@patawala.com."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative">
      {/* Halo doré discret */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(184,134,11,0.07),transparent_70%)] pointer-events-none"
      />

      <div className="relative mx-auto max-w-2xl px-6 pt-16 pb-20 lg:pt-24 lg:pb-24">
        {/* ---------- En-tête ---------- */}
        <div className="text-center mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0F172A] leading-tight"
          >
            Votre diagnostic gratuit.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base text-[#64748B] leading-relaxed max-w-md mx-auto"
          >
            2 minutes pour décrire votre situation. Je reviens vers vous
            sous 24 h avec une première analyse.
          </motion.p>
        </div>

        {/* ---------- Carte formulaire ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl bg-white border border-[#E2E8F0] shadow-[0_1px_3px_rgba(15,23,42,0.06),0_8px_24px_rgba(15,23,42,0.06)] p-8 sm:p-10"
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
                className="space-y-7"
              >
                {/* 01 — Métier */}
                <Field label="1. Votre métier">
                  <input
                    type="text"
                    required
                    value={data.activity}
                    onChange={(e) =>
                      setData((d) => ({ ...d, activity: e.target.value }))
                    }
                    placeholder="Ex : Coach sportif, Restaurant, Consultant…"
                    className={inputClass}
                  />
                </Field>

                {/* 02 — Problèmes (multi-select) */}
                <Field
                  label="2. Vos problèmes aujourd'hui"
                  hint="Cochez tout ce qui s'applique."
                >
                  <div className="grid sm:grid-cols-2 gap-2">
                    {PROBLEMS.map((p) => {
                      const checked = data.problems.includes(p);
                      return (
                        <button
                          key={p}
                          type="button"
                          onClick={() => toggleProblem(p)}
                          className={
                            "group flex items-center gap-3 text-left px-3.5 py-3 rounded-lg border text-sm transition-all " +
                            (checked
                              ? "border-[#B8860B] bg-[#FBF7E9] text-[#0F172A] font-medium"
                              : "border-[#E2E8F0] bg-white text-[#64748B] hover:border-[#CBD5E1] hover:bg-[#F8FAFC]")
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
                          <span>{p}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Champ "Autre chose" conditionnel */}
                  <AnimatePresence>
                    {hasOther && (
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
                          className={inputClass + " mt-3"}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Field>

                {/* 03 — Coordonnées */}
                <Field
                  label="3. Vos coordonnées"
                  hint="Aucun spam. Uniquement pour vous recontacter."
                >
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input
                      type="email"
                      required
                      value={data.email}
                      onChange={(e) =>
                        setData((d) => ({ ...d, email: e.target.value }))
                      }
                      placeholder="Email"
                      className={inputClass}
                    />
                    <input
                      type="tel"
                      value={data.whatsapp}
                      onChange={(e) =>
                        setData((d) => ({ ...d, whatsapp: e.target.value }))
                      }
                      placeholder="WhatsApp (optionnel)"
                      className={inputClass}
                    />
                  </div>
                </Field>

                {/* Erreur */}
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3"
                  >
                    {error}
                  </motion.p>
                )}

                {/* Submit */}
                <div className="pt-2">
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
                className="text-center py-4"
              >
                <div className="w-14 h-14 rounded-full bg-[#FBF7E9] border border-[#B8860B]/30 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-7 h-7 text-[#B8860B]" />
                </div>

                <h3 className="text-2xl font-semibold text-[#0F172A]">
                  Demande envoyée.
                </h3>
                <p className="mt-3 text-[#64748B] leading-relaxed max-w-md mx-auto">
                  Merci. Je reviens vers vous sous 24 h avec une première
                  analyse de votre situation. En attendant, vous pouvez
                  réserver directement un créneau d'appel.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  {/* ⚠️ Remplace l'URL par ton lien Calendly / Cal.com réel */}
                  <a
                    href="https://cal.com/patawala/diagnostic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#996515] text-slate-950 font-semibold shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all duration-300"
                  >
                    Réserver un créneau d'appel
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <p className="mt-6 text-xs text-[#94A3B8]">
                  Une confirmation vous a été envoyée à {data.email}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ---------- Bas de page ---------- */}
        <p className="mt-8 text-center text-sm text-[#94A3B8]">
          Une question ?{" "}
          <a
            href="mailto:contact@patawala.com"
            className="text-[#334155] underline underline-offset-4 decoration-[#E2E8F0] hover:decoration-[#0F172A] transition-colors"
          >
            contact@patawala.com
          </a>
        </p>
      </div>
    </section>
  );
}