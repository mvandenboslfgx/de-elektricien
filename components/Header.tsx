import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
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
                Sterk in elektrotechniek
              </span>
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href as any}
              className="rounded-full px-3 py-1.5 text-sm text-slate-700 transition-colors duration-300 hover:bg-accent/10 hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+31658719011"
            className="text-sm font-semibold text-accent"
          >
            +31 6 58 71 90 11
          </a>
          <Link
            href="/contact"
            className="btn-primary whitespace-nowrap rounded-full text-xs"
          >
            Vraag offerte aan
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href="tel:+31658719011"
            className="rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-white shadow-soft"
          >
            Bel direct
          </a>
        </div>
      </div>
    </header>
  );
}

