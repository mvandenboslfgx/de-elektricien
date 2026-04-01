import type { Metadata } from "next";
import Image from "next/image";
import CTA from "@/components/CTA";
import type { ReactNode } from "react";
import {
  getProjectImages,
  findProjectImage,
  type ProjectImage
} from "@/lib/projectImages";

export const metadata: Metadata = {
  title:
    "Elektrotechnische diensten: groepenkast, storingen, bekabeling & verlichting",
  description:
    "Elektrotechnische installaties: groepenkast, storingen, bekabeling en aansluitingen, verlichting, renovatie en nieuwbouw. Offerte op maat, vaste prijs per opdracht.",
  keywords: [
    "elektricien",
    "elektrotechnische installaties",
    "groepenkast vervangen",
    "storing oplossen",
    "elektrotechniek Nederland"
  ],
  alternates: { canonical: "/diensten" },
  openGraph: {
    title: "Diensten | De Elektricien",
    description:
      "Elektrotechniek voor woning en bedrijf — groepenkast, storingen, bekabeling, verlichting, nieuwbouw.",
    url: "https://www.de-elektricien.nl/diensten"
  }
};

type ServiceSectionProps = {
  id: string;
  title: string;
  image?: ProjectImage;
  children: ReactNode;
};

function ServiceSection({ id, title, image, children }: ServiceSectionProps) {
  return (
    <section id={id} className="section-padding">
      <div className="container-width grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
        <div className="space-y-4">
          <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
            {title}
          </h2>
          <div className="space-y-3 leading-relaxed text-slate-600">
            {children}
          </div>
          <a
            href="/contact"
            className="btn-primary mt-2 inline-flex rounded-full transition-all duration-300"
          >
            Vraag een offerte aan
          </a>
        </div>
        <div className="relative aspect-[4/3] min-h-[220px] overflow-hidden rounded-2xl bg-slate-200 shadow-soft md:aspect-square md:min-h-0">
          {image && (
            <Image
              src={image.src}
              alt={`${title} door De Elektricien (${image.filename})`}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover transition-transform duration-300 hover:scale-[1.02]"
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default function DienstenPage() {
  const projectImages = getProjectImages();

  const fallbackImage = (index: number): ProjectImage | undefined =>
    projectImages[index];

  const groepenkastImage =
    findProjectImage("image-384x841.jpg") ?? fallbackImage(0);
  const storingenImage =
    findProjectImage("image-384x683.jpg") ?? fallbackImage(1);
  const nieuwbouwImage =
    findProjectImage("image-409x384.jpg") ?? fallbackImage(2);
  const verlichtingImage =
    findProjectImage("image-384x605.jpg") ?? fallbackImage(3);
  const dataImage =
    findProjectImage("image-1058x384.jpg") ?? fallbackImage(4);

  return (
    <>
      <section className="section-padding">
        <div className="container-width space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Diensten
          </p>
          <h1 className="font-heading text-3xl font-bold text-primary md:text-4xl">
            Elektrotechnische diensten voor woning en bedrijf
          </h1>
          <p className="max-w-2xl text-slate-600">
            Als zelfstandig installatiebedrijf verzorgen wij elektrotechnische
            installaties op basis van aangenomen werk: van groepenkast en
            storingen tot bekabeling, verlichting en complete elektra bij
            nieuwbouw en renovatie. Wij werken met offerte op maat en vaste prijs
            per opdracht — gericht op een veilig en deugdelijk eindresultaat.
          </p>
        </div>
      </section>

      <ServiceSection
        id="elektrotechniek"
        title="Elektrotechnische installaties"
        image={fallbackImage(0)}
      >
        <>
          <p>
            Wij ontwerpen, installeren en onderhouden elektrotechnische
            installaties voor particuliere en zakelijke opdrachtgevers. Dat
            omvat onder meer verdeel- en groepenkasten, bekabeling,
            aardingssystemen, verlichtingscircuits en aansluitingen van
            apparatuur — steeds conform de geldende NEN-normen en met oog voor
            veiligheid en toekomstige uitbreidingen.
          </p>
          <p>
            Elke opdracht start met een heldere inventarisatie en een offerte
            op maat. Zo weet u vooraf wat er wordt geleverd en tegen welke vaste
            prijs per opdracht, zonder verrassingen achteraf.
          </p>
        </>
      </ServiceSection>

      <ServiceSection
        id="groepenkast"
        title="Groepenkast vervangen & uitbreiden"
        image={groepenkastImage}
      >
        <>
          <p>
            De groepenkast is het hart van uw elektrische installatie. Een
            verouderde groepenkast, slechte verbindingen of te weinig groepen
            kunnen zorgen voor overbelasting, uitvallende zekeringen en zelfs
            gevaarlijke situaties. Zeker wanneer u overstapt op elektrische
            koken, een laadpaal laat plaatsen of zonnepanelen installeert, is
            het belangrijk dat de groepenkast hierop is voorbereid.
          </p>
          <p>
            Wij starten altijd met een inventarisatie van uw installatie en
            toekomstplannen. Welke apparaten gebruikt u nu, welke grootverbruikers
            zijn aanwezig en welke uitbreidingen verwacht u de komende jaren?
            Op basis daarvan ontwerpen wij een groepenkast die voldoende
            capaciteit biedt, logisch is ingedeeld en voldoet aan de actuele
            NEN-normen. We werken uitsluitend met betrouwbare A-merken en zorgen
            voor een duidelijke labeling van alle groepen.
          </p>
          <p>
            Tijdens het vervangen houden wij de overlast zo klein mogelijk. We
            spreken vooraf door wanneer de stroom tijdelijk wordt uitgeschakeld
            en testen na afloop alle circuits zorgvuldig door. Zo weet u zeker
            dat uw installatie veilig functioneert en klaar is voor de toekomst.
          </p>
        </>
      </ServiceSection>

      <ServiceSection
        id="storingen"
        title="Storingen oplossen & spoedservice"
        image={storingenImage}
      >
        <>
          <p>
            Een stroomstoring of defecte installatie zorgt direct voor
            hinder. Verlichting valt uit, stopcontacten doen het niet meer of
            machines komen stil te staan. In zulke situaties wilt u snel weten
            wat er aan de hand is én hoe het veilig kan worden opgelost. De
            Elektricien heeft ruime ervaring met het traceren van kortsluitingen,
            aardfouten, loszittende verbindingen en overbelasting.
          </p>
          <p>
            Met professionele meetapparatuur en een gestructureerde aanpak
            achterhalen wij de oorzaak van de storing in plaats van alleen het
            symptoom weg te nemen. We controleren onder andere de belasting van
            groepen, de staat van bekabeling en de werking van aardlekschakelaars.
            Waar nodig herstellen wij beschadigde delen van de installatie of
            adviseren we over vervanging.
          </p>
          <p>
            Bij urgente problemen kunnen we snel ter plaatse zijn om de storing
            veilig te verhelpen. Daarbij krijgt u altijd een heldere uitleg over
            wat er mis was en welke stappen zijn genomen om herhaling te
            voorkomen. Zo kunt u met een gerust gevoel weer verder.
          </p>
        </>
      </ServiceSection>

      <ServiceSection
        id="nieuwbouw"
        title="Renovatie en nieuwbouw elektra"
        image={nieuwbouwImage}
      >
        <>
          <p>
            Bij nieuwbouw en renovatie is een goed doordachte elektrische
            installatie essentieel. Stopcontacten op de juiste plekken, voldoende
            lichtpunten, aparte groepen voor grootverbruikers en rekening houden
            met toekomstige uitbreidingen: alles begint met een slim ontwerp.
            De Elektricien denkt vanaf het eerste moment met u, uw aannemer of
            architect mee.
          </p>
          <p>
            We vertalen uw wensen naar een praktisch licht- en
            schakelplan, inclusief datapunten en voorzieningen voor bijvoorbeeld
            domotica of laadpunten. Vervolgens verzorgen wij de complete
            bekabeling, het plaatsen en aansluiten van schakelmateriaal, de
            groepenkast en de nette afwerking van de installatie.
            Daarbij werken we netjes, gestructureerd en altijd volgens de geldende
            normen.
          </p>
          <p>
            Door vroeg in het traject aan te haken, voorkomen we verrassingen
            achteraf en kunnen we efficiënt samenwerken met andere disciplines op
            de bouw. Het resultaat is een veilige, toekomstbestendige installatie
            die perfect aansluit op het gebruik van de ruimte.
          </p>
        </>
      </ServiceSection>

      <CTA title="Offerte op maat voor verlichting of bekabeling?" />

      <ServiceSection
        id="verlichting"
        title="Verlichting installeren"
        image={verlichtingImage}
      >
        <>
          <p>
            Goede verlichting zorgt voor comfort, veiligheid en uitstraling. Of
            het nu gaat om functionele verlichting in een werkplaats, sfeerverlichting
            in de woonkamer of energiezuinige buitenverlichting rond uw woning of
            bedrijfspand: wij adviseren u over de juiste armaturen, lichtkleur en
            schakeling.
          </p>
          <p>
            Samen bekijken we hoe de ruimtes worden gebruikt en waar lichtpunten
            het meeste effect hebben. Vervolgens realiseren wij een nette
            installatie met oog voor detail: strak aangebrachte kabels en buizen,
            correct geplaatste armaturen en slimme schakelingen, bijvoorbeeld met
            bewegingsmelders, schemerschakelaars of dimmers.
          </p>
          <p>
            Door te kiezen voor moderne LED-oplossingen bespaart u energie en
            geniet u van een lange levensduur. Wij werken met kwalitatieve
            producten die geschikt zijn voor de omgeving, zoals spatwaterdichte
            armaturen voor buiten of vochtige ruimtes.
          </p>
        </>
      </ServiceSection>

      <ServiceSection
        id="bekabeling"
        title="Bekabeling en aansluitingen"
        image={dataImage}
      >
        <>
          <p>
            Nette bekabeling en correcte aansluitingen zijn de basis van elke
            veilige installatie. Wij verzorgen aanleg, vervanging en uitbreiding
            van krachtstroom- en installatiebekabeling, aansluitingen op
            groepenkasten en apparatuur, en waar nodig gestructureerde
            data-/netwerkbekabeling in woningen en bedrijfsruimtes.
          </p>
          <p>
            Een stabiel netwerk is voor veel klanten even belangrijk: wij leggen
            data- en netwerkbekabeling aan met nette kabelvoering, correcte
            afscherming en duidelijke labeling.
          </p>
          <p>
            Zo krijgt u één degelijke elektrotechnische aansluiting — zonder losse
            kabels of tijdelijke oplossingen — klaar voor gebruik en uitbreiding.
          </p>
        </>
      </ServiceSection>

      <CTA />
    </>
  );
}

