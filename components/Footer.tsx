import Link from "next/link";
import { PHONE_DISPLAY, TEL_HREF, WHATSAPP_URL } from "@/lib/company";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-primary text-slate-200">
      <div className="container-width flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md space-y-4">
          <div>
            <p className="font-heading text-lg font-semibold text-white">
              De Elektricien
            </p>
            <p className="mt-2 text-sm text-slate-300">
              Zelfstandig installatiebedrijf voor elektrotechnische installaties
              bij woningen en bedrijven. Offerte op maat, vaste prijs per
              opdracht.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-slate-300">
            <p>
              Wij voeren onze werkzaamheden uit als zelfstandig
              installatiebedrijf en werken uitsluitend op basis van aangenomen
              werk.
            </p>
            <p className="mt-2">
              Er is geen sprake van een arbeidsovereenkomst of gezagsverhouding.
              Wij bepalen zelfstandig de uitvoering van onze werkzaamheden.
            </p>
            <p className="mt-2">
              Op alle opdrachten zijn onze algemene voorwaarden van toepassing.{" "}
              <Link
                href="/dba-verklaring"
                className="font-medium text-accent underline-offset-4 hover:underline"
              >
                Meer lezen
              </Link>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <p>
            <span className="text-slate-400">Telefoon:</span>{" "}
            <a href={TEL_HREF} className="font-semibold text-accent">
              {PHONE_DISPLAY}
            </a>
          </p>
          <p>
            <span className="text-slate-400">WhatsApp:</span>{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-accent"
            >
              Stuur een bericht
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
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 md:justify-end">
            <p className="text-center md:text-right">
              Elektrotechniek · Groepenkast · Storingen · Verlichting
            </p>
            <span className="hidden text-slate-500 md:inline">·</span>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              <Link
                href="/over-ons"
                className="text-slate-300 underline-offset-4 hover:text-white hover:underline"
              >
                Over ons
              </Link>
              <span className="text-slate-500">|</span>
              <Link
                href="/privacyverklaring"
                className="text-slate-300 underline-offset-4 hover:text-white hover:underline"
              >
                Privacyverklaring
              </Link>
              <span className="text-slate-500">|</span>
              <Link
                href="/algemene-voorwaarden"
                className="text-slate-300 underline-offset-4 hover:text-white hover:underline"
              >
                Algemene voorwaarden
              </Link>
              <span className="text-slate-500">|</span>
              <Link
                href="/dba-verklaring"
                className="text-slate-300 underline-offset-4 hover:text-white hover:underline"
              >
                Aangenomen werk
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
