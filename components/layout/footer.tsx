import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const columns = [
  {
    title: "Prestations",
    links: [
      { label: "Audit de structure", href: "#process" },
      { label: "Prototype cliquable", href: "#process" },
      { label: "Sprints de développement", href: "#process" },
      { label: "Suivi & maintenance", href: "#process" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Méthode", href: "#expertise" },
      { label: "Études de cas", href: "#" },
      { label: "Journal", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Prendre rendez-vous", href: "#diagnostic" },
      {
        label: "contact@patawala.com",
        href: "mailto:contact@patawala.com",
      },
      { label: "LinkedIn", href: "#", external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[#E2E8F0] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* ---------- Colonne marque ---------- */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <Link
              href="/"
              aria-label="Retour à l'accueil"
              className="inline-flex items-center transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/patawala_logo_v2.png"
                alt="Patawala"
                width={180}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Baseline */}
            <p className="mt-5 text-sm text-[#64748B] leading-relaxed max-w-sm">
              Plateformes web sur-mesure pour entrepreneurs.
              Moins de chaos, plus de clarté opérationnelle.
            </p>

            {/* Coordonnées */}
            <div className="mt-6 space-y-2.5 text-sm text-[#64748B]">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#CBD5E1]" />
                <a
                  href="mailto:contact@patawala.com"
                  className="hover:text-[#0F172A] transition-colors"
                >
                  contact@patawala.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#CBD5E1]" />
                <span>À distance · Europe</span>
              </div>
            </div>
          </div>

          {/* ---------- Colonnes de liens ---------- */}
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-10">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs uppercase tracking-[0.08em] text-[#64748B] font-medium mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="group inline-flex items-center gap-1 text-sm text-[#334155] hover:text-[#0F172A] transition-colors"
                      >
                        {l.label}
                        {"external" in l && l.external && (
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Bas du footer ---------- */}
        <div className="mt-16 pt-8 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-[#64748B]">
            © {new Date().getFullYear()} Patawala. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-xs text-[#64748B]">
            <Link
              href="#"
              className="hover:text-[#0F172A] transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="#"
              className="hover:text-[#0F172A] transition-colors"
            >
              Confidentialité
            </Link>
            <Link
              href="#"
              className="hover:text-[#0F172A] transition-colors"
            >
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}