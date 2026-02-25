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
  title: "Elektrische diensten: groepenkasten, storingen, nieuwbouw & meer",
  description:
    "Professionele elektrotechnische diensten: groepenkast vervangen, storingen verhelpen, nieuwbouw en renovatie, verlichting en data-installaties. Vraag een offerte aan.",
  keywords: [
    "elektricien",
    "groepenkast vervangen",
    "storing oplossen",
    "elektrotechniek Nederland"
  ],
  alternates: { canonical: "/diensten" },
  openGraph: {
    title: "Diensten | De Elektricien",
    description:
      "Groepenkast, storingen, nieuwbouw, verlichting en data. Vraag een offerte aan.",
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
            Elektrische diensten voor woning en bedrijf
          </h1>
          <p className="max-w-2xl text-slate-600">
            De Elektricien is uw partner voor alle elektrotechnische
            werkzaamheden. Van het vervangen van verouderde groepenkasten tot
            het oplossen van storingen en het realiseren van complete
            installaties bij nieuwbouw en renovatie. Altijd met focus op
            veiligheid, betrouwbaarheid en een nette afwerking.
          </p>
        </div>
      </section>

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
        title="Nieuwbouw & renovatie installaties"
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
            bekabeling, montage van schakelmateriaal, groepenkast en afwerking.
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

      <CTA title="Ook een offerte voor verlichting of data?" />

      <ServiceSection
        id="verlichting"
        title="Binnen- en buitenverlichting"
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
            installatie met oog voor detail: strak gemonteerde kabels en buizen,
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
        id="data"
        title="Data- en netwerkbekabeling"
        image={dataImage}
      >
        <>
          <p>
            Een stabiel netwerk is onmisbaar voor zowel particuliere als zakelijke
            gebruikers. Steeds meer apparaten zijn verbonden met internet en een
            betrouwbare bekabelde verbinding blijft daarbij de basis. De
            Elektricien verzorgt de aanleg van data- en netwerkbekabeling in
            woningen, kantoren, winkels en bedrijfshallen.
          </p>
          <p>
            We denken mee over de beste locatie voor aansluitpunten, patchkasten
            en apparatuur, en leggen gestructureerde bekabeling aan die klaar is
            voor hoge snelheden. Hierbij letten we op nette kabelvoering, correcte
            afscherming en duidelijke labeling zodat het netwerk ook in de toekomst
            eenvoudig beheerbaar blijft.
          </p>
          <p>
            Door elektrotechniek en data-infrastructuur te combineren in één
            totaaloplossing voorkomt u losse kabels en ad-hocoplossingen. U krijgt
            een professioneel aangelegd netwerk dat klaar is voor intensief gebruik,
            videoconferencing, domotica en andere moderne toepassingen.
          </p>
        </>
      </ServiceSection>

      <CTA />
    </>
  );
}

