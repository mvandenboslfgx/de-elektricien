import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Juridische kennisgeving",
  description:
    "Lees de juridische kennisgeving van De Elektricien: aansprakelijkheid, diensten, intellectueel eigendom, externe links, reviews en gegevensverwerking.",
  keywords: [
    "elektricien",
    "juridische kennisgeving",
    "disclaimer",
    "aansprakelijkheid",
    "elektrotechniek Nederland"
  ],
  alternates: {
    canonical: "/juridische-kennisgeving"
  },
  openGraph: {
    title: "Juridische kennisgeving | De Elektricien",
    description:
      "Belangrijke juridische informatie over aansprakelijkheid, diensten, intellectueel eigendom, externe links en gegevensverwerking van De Elektricien.",
    url: "https://www.de-elektricien.nl/juridische-kennisgeving"
  }
};

export default function JuridischeKennisgevingPage() {
  return (
    <section className="section-padding">
      <div className="container-width space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Juridisch
          </p>
          <h1 className="font-heading text-3xl font-bold text-primary md:text-4xl">
            Juridische kennisgeving De Elektricien
          </h1>
          <p className="max-w-3xl text-slate-600">
            Op deze pagina vindt u de belangrijkste juridische voorwaarden
            rondom het gebruik van onze website, onze diensten en de informatie
            die wij verstrekken. Door gebruik te maken van deze website gaat u
            akkoord met deze juridische kennisgeving.
          </p>
        </div>

        <div className="space-y-6 text-slate-700">
          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-primary">
              1. Aansprakelijkheid
            </h2>
            <p>
              De Elektricien is niet aansprakelijk voor:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm md:text-base">
              <li>
                directe of indirecte schade voortvloeiende uit het gebruik van
                de website, offertes, adviezen of andere verstrekte informatie;
              </li>
              <li>
                schade ontstaan door verkeerd gebruik van elektrische
                installaties of het negeren van veiligheidsrichtlijnen;
              </li>
              <li>
                schade veroorzaakt door derden, onderaannemers of leveranciers.
              </li>
            </ul>
            <p className="text-sm md:text-base">
              Adviezen die mondeling of schriftelijk worden verstrekt, zijn
              altijd afhankelijk van de informatie die door de klant wordt
              aangeleverd. De Elektricien is niet aansprakelijk voor schade die
              ontstaat door onvolledige of onjuist verstrekte informatie.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-primary">
              2. Diensten en werkzaamheden
            </h2>
            <p className="text-sm md:text-base">
              Alle elektrotechnische werkzaamheden worden uitgevoerd volgens de
              geldende regelgeving en veiligheidsnormen (waaronder NEN-normen).
              De Elektricien behoudt zich het recht voor om opdrachten te
              weigeren of te beëindigen indien de situatie onveilig, illegaal of
              technisch onverantwoord wordt geacht.
            </p>
            <p className="text-sm md:text-base">
              Prijsindicaties, offertes en planningen zijn onder voorbehoud en
              kunnen worden gewijzigd indien omstandigheden daartoe aanleiding
              geven, waaronder maar niet beperkt tot materiaalprijzen,
              beschikbaarheid en aanvullende klantwensen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-primary">
              3. Intellectuele eigendom
            </h2>
            <p className="text-sm md:text-base">
              Alle teksten, logo&apos;s, ontwerpen, beelden en bestanden op deze
              website zijn eigendom van De Elektricien, tenzij anders vermeld.
              Het is niet toegestaan materiaal te kopiëren, verspreiden of te
              gebruiken zonder voorafgaande schriftelijke toestemming.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-primary">
              4. Externe links &amp; reviews
            </h2>
            <p className="text-sm md:text-base">
              Deze website kan verwijzingen bevatten naar externe websites,
              waaronder Werkspot en Trustpilot. De Elektricien is niet
              verantwoordelijk voor de inhoud, veiligheid of betrouwbaarheid van
              deze externe bronnen.
            </p>
            <p className="text-sm md:text-base">
              Reviews zijn afkomstig van onafhankelijke platforms en kunnen niet
              door De Elektricien worden aangepast of verwijderd, behalve
              volgens de voorwaarden van het betreffende platform.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-primary">
              5. Privacy &amp; gegevensverwerking
            </h2>
            <p className="text-sm md:text-base">
              Bij het invullen van het contactformulier worden uitsluitend de
              gegevens gevraagd die nodig zijn voor het beantwoorden van vragen
              of het opmaken van een offerte. Persoonsgegevens worden verwerkt
              volgens de geldende privacywetgeving (AVG) en niet aan derden
              verstrekt zonder noodzaak of toestemming. Meer informatie vindt u
              in ons{" "}
              <a
                href="/privacybeleid"
                className="text-accent underline-offset-4 hover:underline"
              >
                privacybeleid
              </a>
              .
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-primary">
              6. Wijzigingen
            </h2>
            <p className="text-sm md:text-base">
              De Elektricien behoudt zich het recht voor deze juridische
              kennisgeving op elk moment te wijzigen. De meest recente versie is
              altijd beschikbaar op deze website.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

