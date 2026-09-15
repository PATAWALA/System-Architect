"use client";

import { Calendar, Users, TrendingUp, Activity } from "lucide-react";

const metrics = [
  { label: "Réservations", value: "128", delta: "+12%", icon: Calendar },
  { label: "Demandes qualifiées", value: "47", delta: "+8%", icon: Users },
  { label: "Gain de temps", value: "32h/sem", delta: "+22%", icon: TrendingUp },
];

export function SystemDashboard() {
  return (
    <div className="relative w-full max-w-xl">
      {/* Glow derrière la carte */}
      <div
        aria-hidden
        className="absolute -inset-8 bg-gold-radial opacity-70 blur-2xl"
      />

      <div className="relative card-glass rounded-2xl p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-xs font-medium tracking-widest text-emerald-400">
              SYSTEM OPERATIONAL
            </span>
          </div>
          <Activity className="w-4 h-4 text-slate-500" />
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl bg-slate-950/60 border border-slate-800/60 p-3"
            >
              <m.icon className="w-4 h-4 text-gold-400 mb-2" />
              <div className="text-lg font-semibold text-white">{m.value}</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500">
                {m.label}
              </div>
              <div className="text-[10px] text-emerald-400 mt-1">{m.delta}</div>
            </div>
          ))}
        </div>

        {/* Faux graphique */}
        <div className="rounded-xl bg-slate-950/60 border border-slate-800/60 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-slate-400">Flux hebdomadaire</span>
            <span className="text-xs text-gold-400">+18%</span>
          </div>
          <div className="flex items-end gap-1.5 h-20">
            {[40, 55, 45, 70, 60, 85, 75, 95, 80, 100, 90, 110].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-gold-600/40 to-gold-400/90"
                style={{ height: `${(h / 110) * 100}%` }}
              />
            ))}
          </div>
        </div>

        {/* Ligne activité */}
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <span>Dernière synchronisation · il y a 2 min</span>
          <span className="text-gold-400">Auto</span>
        </div>
      </div>
    </div>
  );
}