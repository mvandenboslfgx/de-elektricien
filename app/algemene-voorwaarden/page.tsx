import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description:
    "Algemene voorwaarden van De Elektricien: aanneming van werk, offertes op maat, vaste prijs per opdracht, betaling en toepasselijk recht.",
  alternates: { canonical: "/algemene-voorwaarden" },
  openGraph: {
    title: "Algemene voorwaarden | De Elektricien",
    description:
      "Voorwaarden voor opdrachten op projectbasis (resultaatverplichting).",
    url: "https://www.de-elektricien.nl/algemene-voorwaarden"
  }
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <section className="section-padding">
      <div className="container-width space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Juridisch
          </p>
          <h1 className="font-heading text-3xl font-bold text-primary md:text-4xl">
            Algemene voorwaarden
          </h1>
          <p className="max-w-3xl text-slate-600">
            Op alle aanvragen, offertes en overeenkomsten met De Elektricien zijn
            onderstaande voorwaarden van toepassing, tenzij schriftelijk anders
            is overeengekomen.
          </p>
        </div>

        <div className="space-y-6 text-slate-700">
          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-primary">
              1. Partijen en toepasselijkheid
            </h2>
            <p className="text-sm md:text-base">
              De Elektricien (opdrachtnemer) voert werkzaamheden uit als
              zelfstandig installatiebedrijf. De wederpartij (opdrachtgever) sluit
              een overeenkomst van aanneming van werk aan: wij verbinden ons
              tot het leveren van een concreet resultaat (resultaatverplichting),
              niet tot het verrichten van arbeid in dienstbetrekking.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-primary">
              2. Offertes en prijzen
            </h2>
            <p className="text-sm md:text-base">
              Offertes zijn vrijblijvend, tenzij anders vermeld — offerte op maat
              naar uw situatie. Prijzen worden uitgedrukt als vaste prijs per
              opdracht of als duidelijke aanneemsom, inclusief of exclusief btw
              volgens de offerte. Er worden geen uurtarieven gehanteerd in de
              zin van loon voor arbeid in dienstbetrekking; termijnen zijn
              gekoppeld aan projectfasen of oplevering, niet aan gewerkte uren
              als loon.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-primary">
              3. Uitvoering en planning
            </h2>
            <p className="text-sm md:text-base">
              Wij bepalen zelfstandig de wijze van uitvoering binnen de
              overeengekomen specificaties en planning. Meerwerk wordt alleen
              uitgevoerd na schriftelijke bevestiging van de opdrachtgever,
              voorzien van prijsafspraak.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-primary">
              4. Betaling
            </h2>
            <p className="text-sm md:text-base">
              Betalingsvoorwaarden staan op de offerte en/of factuur. Bij
              niet-tijdige betaling zijn wij gerechtigd uitvoering op te schorten
              en rente en incassokosten in rekening te brengen voor zover
              wettelijk toegestaan.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-primary">
              5. Garantie en aansprakelijkheid
            </h2>
            <p className="text-sm md:text-base">
              Wij staan in voor deugdelijke uitvoering conform de overeenkomst.
              Aansprakelijkheid is beperkt tot het bedrag van de betreffende
              opdracht, behoudens opzet of grove schuld. Voor indirecte schade
              zijn wij niet aansprakelijk, tenzij dwingend recht anders voorschrijft.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-primary">
              6. Overmacht
            </h2>
            <p className="text-sm md:text-base">
              Bij overmacht zijn partijen niet gehouden tot nakoming; waar
              mogelijk wordt een nieuwe planning afgesproken.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-primary">
              7. Toepasselijk recht en geschillen
            </h2>
            <p className="text-sm md:text-base">
              Op overeenkomsten is Nederlands recht van toepassing. Geschillen
              worden bij voorkeur in onderling overleg opgelost.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-primary">
              8. Wijzigingen
            </h2>
            <p className="text-sm md:text-base">
              Deze voorwaarden kunnen worden gewijzigd. De versie op de website
              geldt voor nieuwe opdrachten vanaf publicatie.
            </p>
          </section>

          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            Dit document is bedoeld als algemeen kader. Laat juridische teksten
            door een adviseur toetsen op uw specifieke situatie en branche.
            Vragen?{" "}
            <Link href="/contact" className="font-medium text-accent hover:underline">
              Neem contact op
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
