import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#64748B]">
            © {new Date().getFullYear()} Patawala. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-xs text-[#64748B]">
            <Link href="#" className="hover:text-[#0F172A] transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="hover:text-[#0F172A] transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}