import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klantreviews | Ervaringen met De Elektricien",
  description:
    "Lees wat klanten zeggen over De Elektricien. Hoge klanttevredenheid, 4.9/5 gemiddeld. Bekijk onze beoordelingen op Trustpilot.",
  keywords: [
    "elektricien",
    "groepenkast vervangen",
    "storing oplossen",
    "elektrotechniek Nederland"
  ],
  alternates: { canonical: "/reviews" },
  openGraph: {
    title: "Reviews | De Elektricien",
    description: "Ervaringen van klanten. 4.9/5. Bekijk onze beoordelingen op Trustpilot.",
    url: "https://www.de-elektricien.nl/reviews"
  }
};

type Review = {
  name: string;
  location: string;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Inna Tetiyevska",
    location: "Nederland",
    text:
      "Ik beveel Ricardo aan vanwege de volgende redenen: snelle en duidelijke communicatie, hij reageert snel op berichten; hij komt afspraken na en is altijd op tijd; goede service en netjes werk, met extra groepen in de meterkast en bijbehorende bedrading die zorgvuldig zijn aangelegd; naleving van veiligheidsprincipes, waarbij hij weigerde ongeaarde stopcontacten aan te sluiten; en flexibiliteit bij extra werkzaamheden die tijdens het werk naar voren kwamen."
  },
  {
    name: "orsin",
    location: "Nederland",
    text:
      "Ricardo is een kundige vakman. Denkt mee in oplossingen en probeert altijd op korte termijn het werk te verrichten. Al meerdere keren gebruikgemaakt van zijn diensten. Prijs is zeer schappelijk en klantvriendelijkheid staat voorop."
  },
  {
    name: "Hans Int Veld",
    location: "Nederland",
    text:
      "Door heel mijn huis is er nieuwe elektriciteit aangelegd en dit is heel netjes en professioneel gedaan."
  },
  {
    name: "Leon Van der hoff",
    location: "Nederland",
    text:
      "Zeer mooie tuinverlichting aangelegd door de elektricien. Zeker een aanrader, klasse!"
  },
  {
    name: "Gavin Louwers",
    location: "Nederland",
    text: "Vriendelijk en netjes, zeker een aanrader!"
  },
  {
    name: "J Majoor",
    location: "Nederland",
    text: "Ik ben heel erg tevreden met het resultaat, bedankt!"
  },
  {
    name: "Consumer",
    location: "Nederland",
    text: "Reageert snel en komt afspraken na."
  },
  {
    name: "Annelies Emmen",
    location: "Nederland",
    text:
      "Hij heeft door de hele woning alle lampen opgehangen en aangesloten. Dit alles naar volle tevredenheid en zeer vriendelijk en snel gewerkt. Zal hem zeker opnieuw benaderen!"
  },
  {
    name: "Joyce Peters",
    location: "Nederland",
    text:
      "Goede service en kwaliteit, netjes en vriendelijk. Wij zijn geholpen door Ricardo, nogmaals dankjewel."
  },
  {
    name: "Luca Gobbo",
    location: "Nederland",
    text: "Goed werk geleverd."
  },
  {
    name: "Angel Heels",
    location: "Nederland",
    text:
      "Geweldig geholpen! Er waren al twee andere elektriciens geweest die het probleem niet konden vinden, maar hij loste het binnen een half uur op. Nu kan ik eindelijk vaatwasser en magnetron tegelijk gebruiken zonder dat alles eruit klapt. Een aanrader met vriendelijke service, schappelijke prijs en top vakwerk."
  },
  {
    name: "Piet",
    location: "Nederland",
    text: "Perfecte service, werd goed geholpen door Ricardo."
  },
  {
    name: "J Koppe",
    location: "Nederland",
    text: "Goed werk geleverd en makkelijke communicatie."
  },
  {
    name: "Wesley Kommene",
    location: "Nederland",
    text:
      "Goeie sociale, vriendelijke gozer die hard en netjes werkt. Zou hem iedereen aanraden, top kerel."
  },
  {
    name: "Matthijs",
    location: "Nederland",
    text: "Levert goed werk en reageert snel."
  }
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index}>★</span>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <section className="section-padding">
      <div className="container-width space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Reviews
          </p>
          <h1 className="font-heading text-3xl font-bold text-primary md:text-4xl">
            Ervaringen van onze klanten
          </h1>
          <p className="max-w-2xl text-slate-600">
            Wij streven naar 100% klanttevredenheid en waarderen iedere review.
            Hieronder leest u een selectie van reacties van particuliere en
            zakelijke opdrachtgevers.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="flex items-center gap-4">
            <div className="flex items-baseline gap-1">
              <span className="font-heading text-4xl font-bold text-primary">4,9</span>
              <span className="text-slate-500">/5</span>
            </div>
            <div>
              <p className="font-semibold text-primary">gemiddeld</p>
              <p className="text-sm text-slate-600">Gebaseerd op tevreden klanten</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3">
            <span className="text-2xl font-bold text-emerald-600">Trustpilot</span>
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="card flex flex-col gap-3 p-6 transition-shadow duration-300 hover:shadow-lg"
            >
              <Stars />
              <p className="text-slate-600">{review.text}</p>
              <p className="mt-auto text-sm font-semibold text-primary">
                {review.name}
                <span className="font-normal text-slate-400"> • {review.location}</span>
              </p>
            </article>
          ))}
        </div>

        <div className="flex flex-col items-start gap-4 rounded-2xl bg-slate-50 p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between">
          <p className="text-slate-600">
            Wilt u meer ervaringen lezen of zelf een beoordeling achterlaten?
          </p>
          <a
            href="https://nl.trustpilot.com/review/de-elektricien.nl"
            target="_blank"
            rel="noreferrer"
            className="btn-primary rounded-full transition-all duration-300"
          >
            Bekijk onze beoordelingen op Trustpilot
          </a>
        </div>
      </div>
    </section>
  );
}

