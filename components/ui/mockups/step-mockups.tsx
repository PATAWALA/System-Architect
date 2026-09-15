"use client";

import { CheckCircle2, Circle, FileJson, Globe, Server, Sparkles } from "lucide-react";

/* ---------- Étape 01 : Audit ---------- */
export function AuditMockup() {
  const items = [
    { label: "Processus de réservation manuel", priority: "Haute", done: true },
    { label: "Doublons clients WhatsApp", priority: "Haute", done: true },
    { label: "Reporting inexistant", priority: "Moyenne", done: false },
    { label: "Quick Win : formulaire centralisé", priority: "Haute", done: true },
  ];
  return (
    <div className="card-glass rounded-2xl p-5 font-mono text-xs">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
        <FileJson className="w-4 h-4 text-gold-400" />
        <span className="text-slate-300">Rapport_Diagnostic.json</span>
      </div>
      <div className="space-y-2">
        {items.map((it, i) => (
          <div key={i} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {it.done ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              ) : (
                <Circle className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              )}
              <span className={it.done ? "text-slate-400 line-through" : "text-slate-200"}>
                {it.label}
              </span>
            </div>
            <span
              className={
                it.priority === "Haute"
                  ? "text-gold-400"
                  : "text-slate-500"
              }
            >
              {it.priority}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2 text-gold-400">
        <Sparkles className="w-3.5 h-3.5" />
        <span>3 Quick Wins identifiés</span>
      </div>
    </div>
  );
}

/* ---------- Étape 02 : Prototype ---------- */
export function PrototypeMockup() {
  return (
    <div className="card-glass rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        </div>
        <div className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-950/70 border border-slate-800 text-xs">
          <Globe className="w-3 h-3 text-emerald-400" />
          <span className="text-slate-400">prototype.votre-domaine.com</span>
        </div>
      </div>
      <div className="rounded-xl bg-slate-950/60 border border-slate-800/60 p-4 space-y-3">
        <div className="h-3 w-1/3 rounded bg-slate-800" />
        <div className="h-2 w-2/3 rounded bg-slate-800/60" />
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="h-16 rounded-lg bg-gradient-to-br from-gold-600/30 to-gold-400/10 border border-gold-400/30" />
          <div className="h-16 rounded-lg bg-slate-800/50" />
        </div>
        <div className="h-8 rounded-lg bg-gold-gradient opacity-90 flex items-center justify-center text-[10px] font-semibold text-slate-950 tracking-wider">
          CLIQUABLE
        </div>
      </div>
    </div>
  );
}

/* ---------- Étape 03 : Sprints ---------- */
export function SprintsMockup() {
  const sprints = [
    { n: 1, label: "Sprint 1 — Auth & Réservations", status: "done" },
    { n: 2, label: "Sprint 2 — Dashboard & CRM", status: "active" },
    { n: 3, label: "Sprint 3 — Automatisations", status: "pending" },
  ];
  return (
    <div className="card-glass rounded-2xl p-5">
      <div className="text-xs text-slate-400 mb-4">Suivi du projet</div>
      <div className="space-y-3">
        {sprints.map((s) => (
          <div
            key={s.n}
            className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800/60"
          >
            <div className="flex items-center gap-3">
              <div
                className={
                  s.status === "done"
                    ? "w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center"
                    : s.status === "active"
                    ? "w-7 h-7 rounded-full bg-gold-400/20 border border-gold-400/50 flex items-center justify-center animate-pulse-slow"
                    : "w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center"
                }
              >
                {s.status === "done" ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <span className="text-[10px] text-slate-400">{s.n}</span>
                )}
              </div>
              <span className="text-xs text-slate-300">{s.label}</span>
            </div>
            <span
              className={
                s.status === "done"
                  ? "text-[10px] text-emerald-400"
                  : s.status === "active"
                  ? "text-[10px] text-gold-400"
                  : "text-[10px] text-slate-600"
              }
            >
              {s.status === "done" ? "✓ Livré" : s.status === "active" ? "En cours" : "À venir"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Étape 04 : Indépendance ---------- */
export function IndependenceMockup() {
  return (
    <div className="card-glass rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Server className="w-4 h-4 text-gold-400" />
        <span className="text-xs text-slate-300">Infrastructure</span>
      </div>
      <div className="space-y-2.5">
        {[
          { label: "Infomaniak", status: "OK", ok: true },
          { label: "Cloud Production", status: "OK", ok: true },
          { label: "Domaine & DNS", status: "OK", ok: true },
          { label: "Backups quotidiens", status: "OK", ok: true },
        ].map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800/60"
          >
            <span className="text-xs text-slate-300">{row.label}</span>
            <span className="inline-flex items-center gap-1.5 text-[10px] text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {row.status}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-xl bg-gold-gradient/10 border border-gold-400/30 text-[11px] text-gold-300 text-center">
        Vous êtes propriétaire à 100%
      </div>
    </div>
  );
}