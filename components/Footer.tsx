import Link from "next/link";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-primary text-slate-200">
      <div className="container-width flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-lg font-semibold text-white">
            De Elektricien
          </p>
          <p className="mt-2 max-w-md text-sm text-slate-300">
            Veilige en betrouwbare elektrotechnische installaties voor woningen
            en bedrijven. Altijd met oog voor kwaliteit en veiligheid.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <p>
            <span className="text-slate-400">Telefoon:</span>{" "}
            <a href="tel:+31658719011" className="font-semibold text-accent">
              +31 6 58 71 90 11
            </a>
          </p>
          <p>
            <span className="text-slate-400">E-mail:</span>{" "}
            <a
              href="mailto:algemeen@de-elektricien.nl"
              className="font-medium text-slate-100"
            >
              algemeen@de-elektricien.nl
            </a>
          </p>
          <a
            href="https://nl.trustpilot.com/review/de-elektricien.nl"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-slate-100 shadow-soft ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/10"
          >
            ⭐ Bekijk onze beoordelingen op Trustpilot
          </a>
        </div>
      </div>
      <div className="border-t border-slate-700/60 bg-primary/95">
        <div className="container-width flex flex-col items-center justify-between gap-3 py-4 text-xs text-slate-400 md:flex-row">
          <p>© {currentYear} De Elektricien. Alle rechten voorbehouden.</p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
            <p>Elektrotechniek • Groepenkasten • Storingen • Verlichting</p>
            <span className="hidden text-slate-500 md:inline">•</span>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/privacybeleid"
                className="text-slate-300 underline-offset-4 hover:text-white hover:underline"
              >
                Privacybeleid
              </Link>
              <span className="text-slate-500">|</span>
              <Link
                href="/juridische-kennisgeving"
                className="text-slate-300 underline-offset-4 hover:text-white hover:underline"
              >
                Juridische kennisgeving
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

