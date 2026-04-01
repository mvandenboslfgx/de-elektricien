import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aangenomen werk & DBA",
  description:
    "Hoe De Elektricien opdrachten uitvoert: zelfstandig installatiebedrijf, aangenomen werk, geen arbeidsovereenkomst in de zin van de Wet DBA.",
  alternates: { canonical: "/dba-verklaring" },
  openGraph: {
    title: "Aangenomen werk | De Elektricien",
    description:
      "Wij werken op basis van aangenomen werk. Geen gezagsverhouding in de zin van een arbeidsovereenkomst.",
    url: "https://www.de-elektricien.nl/dba-verklaring"
  }
};

export default function DbaVerklaringPage() {
  return (
    <section className="section-padding">
      <div className="container-width max-w-3xl space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Juridisch
          </p>
          <h1 className="font-heading text-3xl font-bold text-primary md:text-4xl">
            Aangenomen werk (informatie opdrachtgevers)
          </h1>
          <p className="text-slate-600">
            Deze pagina verduidelijkt hoe wij onze opdrachten juridisch kaderen.
          </p>
        </div>

        <div className="card space-y-4 border-l-4 border-accent p-6 text-slate-700 shadow-soft">
          <p className="leading-relaxed">
            Wij voeren onze werkzaamheden uit als zelfstandig installatiebedrijf
            en werken uitsluitend op basis van aangenomen werk.
          </p>
          <p className="leading-relaxed">
            Er is geen sprake van een arbeidsovereenkomst of gezagsverhouding.
            Wij bepalen zelfstandig de uitvoering van onze werkzaamheden.
          </p>
          <p className="leading-relaxed">
            Op alle opdrachten zijn onze algemene voorwaarden van toepassing.
          </p>
        </div>

        <p className="text-sm text-slate-600">
          Heeft u vragen over een concrete offerte of overeenkomst?{" "}
          <Link href="/contact" className="font-medium text-accent hover:underline">
            Neem contact op
          </Link>{" "}
          of raadpleeg onze{" "}
          <Link
            href="/algemene-voorwaarden"
            className="font-medium text-accent hover:underline"
          >
            algemene voorwaarden
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
