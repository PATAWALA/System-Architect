import Link from "next/link";
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
      { label: "Prendre rendez-vous", href: "#contact" },
      { label: "contact@system-architect.fr", href: "mailto:contact@system-architect.fr" },
      { label: "LinkedIn", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink-300/60 bg-surface-soft">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Colonne marque */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-ink-900 flex items-center justify-center">
                <span className="text-gold-300 font-bold text-sm">SA</span>
              </div>
              <span className="text-[15px] font-semibold tracking-tight text-ink-900">
                System Architect
              </span>
            </Link>

            <p className="mt-5 text-sm text-ink-500 leading-relaxed max-w-sm">
              Je conçois des plateformes web autonomes pour entrepreneurs.
              Moins de chaos, plus de clarté opérationnelle.
            </p>

            <div className="mt-6 space-y-2.5 text-sm text-ink-500">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-ink-300" />
                <a
                  href="mailto:contact@system-architect.fr"
                  className="hover:text-ink-900 transition-colors"
                >
                  contact@system-architect.fr
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-ink-300" />
                <span>À distance · Europe</span>
              </div>
            </div>
          </div>

          {/* Colonnes de liens */}
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-10">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs uppercase tracking-widest text-ink-500 font-medium mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="group inline-flex items-center gap-1 text-sm text-ink-700 hover:text-ink-900 transition-colors"
                      >
                        {l.label}
                        {l.href.startsWith("http") && (
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

        {/* Bas du footer */}
        <div className="mt-16 pt-8 border-t border-ink-300/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} System Architect. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-xs text-ink-500">
            <Link href="#" className="hover:text-ink-900 transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="hover:text-ink-900 transition-colors">
              Confidentialité
            </Link>
            <Link href="#" className="hover:text-ink-900 transition-colors">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}