import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description:
    "Lees hoe De Elektricien omgaat met uw persoonsgegevens volgens de AVG: welke gegevens we verwerken, voor welke doeleinden en welke rechten u heeft.",
  keywords: [
    "elektricien",
    "privacyverklaring",
    "AVG",
    "persoonsgegevens",
    "Nederland"
  ],
  alternates: {
    canonical: "/privacyverklaring"
  },
  openGraph: {
    title: "Privacyverklaring | De Elektricien",
    description:
      "In onze privacyverklaring leest u welke persoonsgegevens wij verwerken, met welke doelen en welke rechten u heeft volgens de AVG.",
    url: "https://www.de-elektricien.nl/privacyverklaring"
  }
};

export default function PrivacyverklaringPage() {
  return (
    <section className="section-padding">
      <div className="container-width space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Privacy
          </p>
          <h1 className="font-heading text-3xl font-bold text-primary md:text-4xl">
            Privacyverklaring De Elektricien
          </h1>
          <p className="max-w-3xl text-slate-600">
            In deze privacyverklaring leggen wij uit welke persoonsgegevens wij
            verwerken, waarom we dat doen en welke rechten u heeft. De
            Elektricien gaat zorgvuldig en vertrouwelijk met uw gegevens om,
            conform de geldende privacywetgeving (AVG).
          </p>
        </div>

        <div className="space-y-6 text-slate-700">
          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-primary">
              1. Verantwoordelijke
            </h2>
            <p>
              De verantwoordelijke voor de verwerking van uw persoonsgegevens
              is:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm md:text-base">
              <li>De Elektricien</li>
              <li>E-mail: algemeen@de-elektricien.nl</li>
              <li>Telefoon: 06-16538949</li>
              <li>Vestigingsplaats: Oud-Beijerland</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-primary">
              2. Welke persoonsgegevens wij verwerken
            </h2>
            <p>
              Wij verwerken uitsluitend persoonsgegevens die nodig zijn voor
              onze dienstverlening. Dit omvat onder meer:
            </p>
            <h3 className="font-semibold text-primary">
              Bij contact via de website of offerteaanvraag
            </h3>
            <ul className="list-disc space-y-1 pl-5 text-sm md:text-base">
              <li>Voor- en achternaam</li>
              <li>E-mailadres</li>
              <li>Telefoonnummer</li>
              <li>Adresgegevens (indien relevant voor werkzaamheden)</li>
              <li>Inhoud van de aanvraag of het bericht</li>
            </ul>
            <h3 className="font-semibold text-primary">
              Bij uitvoering van werkzaamheden
            </h3>
            <ul className="list-disc space-y-1 pl-5 text-sm md:text-base">
              <li>Project- en werkopdrachtgegevens</li>
              <li>Administratie- en factuurgegevens</li>
            </ul>
            <h3 className="font-semibold text-primary">
              Automatisch verzamelde websitegegevens
            </h3>
            <ul className="list-disc space-y-1 pl-5 text-sm md:text-base">
              <li>IP-adres</li>
              <li>Browser- en apparaatgegevens</li>
              <li>Gebruiksstatistieken</li>
              <li>Cookies (functioneel en analytisch)</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-primary">
              3. Doeleinden van gegevensverwerking
            </h2>
            <p>Wij gebruiken persoonsgegevens uitsluitend voor:</p>
            <ul className="list-disc space-y-1 pl-5 text-sm md:text-base">
              <li>Het beantwoorden van vragen</li>
              <li>Het opstellen en versturen van offertes</li>
              <li>Het uitvoeren van overeengekomen elektrotechnische werkzaamheden</li>
              <li>Klantenadministratie en facturatie</li>
              <li>Verbetering van onze website en service</li>
              <li>Het voldoen aan wettelijke verplichtingen</li>
            </ul>
            <p className="text-sm md:text-base">
              Wij verwerken geen persoonsgegevens voor commerciële doeleinden
              buiten onze eigen dienstverlening.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-primary">
              4. Rechtsgrond van de verwerking
            </h2>
            <p>Wij verwerken persoonsgegevens op basis van:</p>
            <ul className="list-disc space-y-1 pl-5 text-sm md:text-base">
              <li>Uitvoering van een overeenkomst</li>
              <li>Wettelijke verplichting</li>
              <li>Gerechtvaardigd belang</li>
              <li>Toestemming (bijvoorbeeld via het contactformulier)</li>
            </ul>
            <p className="text-sm md:text-base">
              Toestemming kan te allen tijde worden ingetrokken.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-primary">
              5. Bewaartermijnen
            </h2>
            <p>Wij bewaren persoonsgegevens niet langer dan noodzakelijk:</p>
            <ul className="list-disc space-y-1 pl-5 text-sm md:text-base">
              <li>Offerte- en contactformuliergegevens: maximaal 12 maanden</li>
              <li>Factuur- en financiële gegevens: 7 jaar (wettelijke verplichting)</li>
              <li>
                Projectgegevens: zolang deze relevant zijn voor garantie of
                nazorg
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-primary">
              6. Verstrekking aan derden
            </h2>
            <p>
              Persoonsgegevens worden alleen gedeeld wanneer dit noodzakelijk is
              voor bijvoorbeeld:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm md:text-base">
              <li>Boekhouding</li>
              <li>Hosting van website en e-mail</li>
              <li>Leveranciers of partners bij werkzaamheden</li>
            </ul>
            <p className="text-sm md:text-base">
              Met alle verwerkers wordt een verwerkersovereenkomst gesloten.
              Persoonsgegevens worden niet verkocht.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-primary">
              7. Gebruik van cookies
            </h2>
            <p>Wij gebruiken uitsluitend:</p>
            <ul className="list-disc space-y-1 pl-5 text-sm md:text-base">
              <li>Functionele cookies (noodzakelijk voor de werking van de website)</li>
              <li>
                Analytische cookies (geanonimiseerd voor statistieken)
              </li>
            </ul>
            <p className="text-sm md:text-base">
              Er worden geen tracking- of marketingcookies gebruikt zonder
              expliciete toestemming.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-primary">
              8. Beveiliging van persoonsgegevens
            </h2>
            <p>
              Wij nemen passende technische en organisatorische maatregelen om
              persoonsgegevens te beschermen, waaronder:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm md:text-base">
              <li>SSL-versleuteling</li>
              <li>Beveiligde opslag</li>
              <li>Beperkte toegangsrechten</li>
              <li>Regelmatige updates en beveiligingscontroles</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-primary">
              9. Rechten van betrokkenen
            </h2>
            <p>U heeft het recht om:</p>
            <ul className="list-disc space-y-1 pl-5 text-sm md:text-base">
              <li>Uw gegevens in te zien</li>
              <li>Uw gegevens te laten corrigeren</li>
              <li>Uw gegevens te laten verwijderen</li>
              <li>Verwerking te laten beperken</li>
              <li>Bezwaar te maken tegen verwerking</li>
              <li>Uw gegevens over te dragen (dataportabiliteit)</li>
            </ul>
            <p className="text-sm md:text-base">
              Verzoeken kunnen worden gestuurd naar:{" "}
              <a
                href="mailto:algemeen@de-elektricien.nl"
                className="font-medium text-accent"
              >
                algemeen@de-elektricien.nl
              </a>
              . Wij reageren binnen 30 dagen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-primary">
              10. Klachten
            </h2>
            <p>
              Mocht u een klacht hebben over onze verwerking van
              persoonsgegevens, neem dan eerst contact met ons op. U kunt ook
              een klacht indienen bij:
            </p>
            <p className="text-sm md:text-base">
              Autoriteit Persoonsgegevens –{" "}
              <a
                href="https://www.autoriteitpersoonsgegevens.nl"
                target="_blank"
                rel="noreferrer"
                className="text-accent underline-offset-4 hover:underline"
              >
                www.autoriteitpersoonsgegevens.nl
              </a>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-xl font-semibold text-primary">
              11. Wijzigingen
            </h2>
            <p className="text-sm md:text-base">
              Deze privacyverklaring kan worden aangepast bij wijzigingen in
              wet- of regelgeving of in onze bedrijfsvoering. De meest recente
              versie is altijd beschikbaar op onze website.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
