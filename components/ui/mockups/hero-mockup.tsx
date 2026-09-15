"use client";

import {
  Bell,
  Calendar,
  Search,
  Settings,
  Users,
  LayoutDashboard,
  MessageSquare,
  CheckCircle2,
  Circle,
} from "lucide-react";

export function HeroMockup() {
  return (
    <div className="relative">
      {/* Halo doré derrière, discret */}
      <div
        aria-hidden
        className="absolute -inset-x-10 -top-10 -bottom-20 bg-[radial-gradient(ellipse_at_top,rgba(184,134,11,0.10),transparent_60%)] pointer-events-none"
      />

      {/* Fenêtre mockup */}
      <div className="relative mx-auto max-w-6xl rounded-2xl bg-white border border-[#E2E8F0] shadow-[0_4px_12px_rgba(15,23,42,0.06),0_24px_64px_rgba(15,23,42,0.10)] overflow-hidden">
        {/* Barre de fenêtre */}
        <div className="flex items-center gap-2 px-4 h-10 border-b border-[#E2E8F0] bg-[#F8FAFC]">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-3 py-0.5 rounded-md bg-white border border-[#E2E8F0] text-[10px] text-[#64748B] font-medium">
              app.patawala.com
            </div>
          </div>
        </div>

        {/* Corps du mockup */}
        <div className="grid grid-cols-[200px_1fr] min-h-[420px]">
          {/* Sidebar */}
          <aside className="border-r border-[#E2E8F0] bg-[#F8FAFC] p-4 space-y-1">
            <div className="px-3 py-2 mb-3 rounded-lg bg-[#0F172A]">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-gradient-to-br from-[#D4AF37] to-[#996515] flex items-center justify-center text-[10px] font-bold text-white">
                  P
                </span>
                <span className="text-xs font-semibold text-white">
                  Patawala
                </span>
              </div>
            </div>

            {[
              { icon: LayoutDashboard, label: "Tableau de bord", active: true },
              { icon: Calendar, label: "Réservations" },
              { icon: Users, label: "Clients" },
              { icon: MessageSquare, label: "Messages" },
              { icon: Settings, label: "Paramètres" },
            ].map((item) => (
              <div
                key={item.label}
                className={
                  item.active
                    ? "flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white border border-[#E2E8F0] text-[#0F172A] text-xs font-medium"
                    : "flex items-center gap-2.5 px-3 py-2 rounded-lg text-[#64748B] text-xs"
                }
              >
                <item.icon className="w-3.5 h-3.5" />
                {item.label}
              </div>
            ))}
          </aside>

          {/* Main */}
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-base font-semibold text-[#0F172A]">
                  Bonjour, Marc
                </div>
                <div className="text-xs text-[#64748B]">
                  Voici votre activité aujourd'hui
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-32 h-8 rounded-lg bg-[#F1F5F9] border border-[#E2E8F0] flex items-center px-2.5 gap-1.5">
                  <Search className="w-3 h-3 text-[#94A3B8]" />
                  <span className="text-[10px] text-[#94A3B8]">
                    Rechercher…
                  </span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center relative">
                  <Bell className="w-3.5 h-3.5 text-[#64748B]" />
                  <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#B8860B]" />
                </div>
              </div>
            </div>

            {/* KPI cards */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { label: "Réservations", value: "128", delta: "+12%" },
                { label: "Nouveaux clients", value: "47", delta: "+8%" },
                { label: "Temps économisé", value: "32 h", delta: "+22%" },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-xl bg-white border border-[#E2E8F0] p-3"
                >
                  <div className="text-[10px] uppercase tracking-wider text-[#94A3B8] mb-1.5">
                    {kpi.label}
                  </div>
                  <div className="text-lg font-semibold text-[#0F172A]">
                    {kpi.value}
                  </div>
                  <div className="text-[10px] text-emerald-600 mt-0.5 font-medium">
                    {kpi.delta}
                  </div>
                </div>
              ))}
            </div>

            {/* Tableau */}
            <div className="rounded-xl bg-white border border-[#E2E8F0] overflow-hidden">
              <div className="grid grid-cols-[1fr_100px_100px] px-4 py-2.5 border-b border-[#E2E8F0] bg-[#F8FAFC] text-[10px] uppercase tracking-wider text-[#94A3B8] font-medium">
                <span>Client</span>
                <span>Date</span>
                <span>Statut</span>
              </div>
              {[
                { name: "Sophie Martin", date: "12 mai", status: "confirmed" },
                { name: "Karim Benali", date: "13 mai", status: "pending" },
                { name: "Léa Rousseau", date: "14 mai", status: "confirmed" },
                { name: "Thomas Girard", date: "15 mai", status: "pending" },
              ].map((row) => (
                <div
                  key={row.name}
                  className="grid grid-cols-[1fr_100px_100px] items-center px-4 py-2.5 border-b border-[#F1F5F9] last:border-b-0 text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[10px] font-medium text-[#334155]">
                      {row.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                    <span className="text-[#0F172A] font-medium">
                      {row.name}
                    </span>
                  </div>
                  <span className="text-[#64748B]">{row.date}</span>
                  <span className="inline-flex items-center gap-1.5 text-[10px]">
                    {row.status === "confirmed" ? (
                      <>
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        <span className="text-emerald-600 font-medium">
                          Confirmé
                        </span>
                      </>
                    ) : (
                      <>
                        <Circle className="w-3 h-3 text-amber-500" />
                        <span className="text-amber-600 font-medium">
                          En attente
                        </span>
                      </>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}