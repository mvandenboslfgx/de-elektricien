import Link from "next/link";
import Image from "next/image";
import { PHONE_DISPLAY, TEL_HREF, WHATSAPP_URL } from "@/lib/company";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/diensten", label: "Diensten" },
  { href: "/galerij", label: "Galerij" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-width flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 sm:h-10 sm:w-10">
              <Image
                src="/images/projecten/logo-de-elektricien.png"
                alt="Logo De Elektricien"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden flex-col sm:flex">
              <span className="font-heading text-base font-semibold text-primary">
                De Elektricien
              </span>
              <span className="text-xs text-slate-500">
                Elektrotechnische installaties
              </span>
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 text-sm font-medium text-slate-700 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href as any}
              className="rounded-full px-2.5 py-1.5 text-sm text-slate-700 transition-colors duration-300 hover:bg-accent/10 hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm font-medium text-slate-600 hover:text-accent lg:inline"
          >
            WhatsApp
          </a>
          <a href={TEL_HREF} className="text-sm font-semibold text-accent">
            {PHONE_DISPLAY}
          </a>
          <Link
            href="/contact"
            className="btn-primary whitespace-nowrap rounded-full text-xs"
          >
            Offerte aanvragen
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={TEL_HREF}
            className="rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-white shadow-soft"
          >
            Bel direct
          </a>
        </div>
      </div>
    </header>
  );
}
