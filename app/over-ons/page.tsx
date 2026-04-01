import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Over ons | Zelfstandig installatiebedrijf",
  description:
    "De Elektricien is een zelfstandig installatiebedrijf voor elektrotechnische installaties. Wij werken op basis van aangenomen werk met offerte op maat en vaste prijs per opdracht.",
  keywords: [
    "elektricien",
    "installatiebedrijf",
    "elektrotechniek",
    "elektricien Nederland"
  ],
  alternates: { canonical: "/over-ons" },
  openGraph: {
    title: "Over ons | De Elektricien",
    description:
      "Elektrotechniek voor woning en bedrijf — heldere afspraken, veilig eindresultaat.",
    url: "https://www.de-elektricien.nl/over-ons"
  }
};

export default function OverOnsPage() {
  return (
    <section className="section-padding">
      <div className="container-width space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Over ons
          </p>
          <h1 className="font-heading text-3xl font-bold text-primary md:text-4xl">
            Zelfstandig installatiebedrijf in elektrotechniek
          </h1>
          <p className="max-w-3xl text-slate-600">
            Wij zijn een zelfstandig installatiebedrijf gespecialiseerd in
            elektrotechnische installaties voor woningen en bedrijven. Wij
            voeren werkzaamheden uit op basis van aangenomen werk en leveren een
            compleet en veilig eindresultaat — met offerte op maat en vaste prijs
            per opdracht, niet op uurbasis.
          </p>
        </div>

        <div className="space-y-6 text-slate-700">
          <section className="space-y-3">
            <h2 className="font-heading text-xl font-semibold text-primary">
              Hoe wij werken
            </h2>
            <p className="text-sm md:text-base">
              Na uw aanvraag inventariseren wij de situatie en stellen wij een
              offerte op maat. Na akkoord plannen wij de uitvoering en leveren wij
              volgens afspraak op. Zo weet u vooraf waar u aan toe bent — zonder
              “inhuur per uur” of onduidelijke kosten.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-semibold text-primary">
              Waar we sterk in zijn
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-sm md:text-base">
              <li>Elektrotechnische installaties</li>
              <li>Groepenkasten vervangen en uitbreiden</li>
              <li>Storingen oplossen</li>
              <li>Bekabeling en aansluitingen</li>
              <li>Verlichting installeren</li>
              <li>Renovatie en nieuwbouw elektra</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-semibold text-primary">
              Vertrouwen en duidelijkheid
            </h2>
            <p className="text-sm md:text-base">
              Op al onze opdrachten zijn onze algemene voorwaarden van toepassing.
              Meer over de juridische kaders vindt u op onze pagina{" "}
              <Link
                href="/dba-verklaring"
                className="font-medium text-accent hover:underline"
              >
                Aangenomen werk (DBA)
              </Link>
              .
            </p>
          </section>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/diensten"
              className="btn-primary inline-flex rounded-full transition-all duration-300"
            >
              Bekijk diensten
            </Link>
            <Link
              href="/contact"
              className="btn-secondary inline-flex rounded-full transition-all duration-300"
            >
              Offerte aanvragen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
