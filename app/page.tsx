import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import { getHeroImageSrc, getProjectImages } from "@/lib/projectImages";

export const metadata: Metadata = {
  title: "Elektricien voor woningen & bedrijven in Nederland",
  description:
    "Professionele elektricien met 20+ jaar ervaring: groepenkast vervangen, storingen verhelpen, nieuwbouw en verlichting. 200+ tevreden klanten. Vraag vandaag nog een vrijblijvende offerte aan.",
  keywords: [
    "elektricien",
    "groepenkast vervangen",
    "storing oplossen",
    "elektrotechniek Nederland"
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "De Elektricien | Professionele elektricien voor woning & bedrijf",
    description:
      "20+ jaar ervaring. Groepenkasten, storingen, nieuwbouw, verlichting. Vraag een vrijblijvende offerte aan.",
    url: "https://www.de-elektricien.nl"
  }
};

const servicePreview = [
  {
    title: "Groepenkast vervangen",
    description:
      "Veilige, toekomstbestendige groepenkasten met voldoende capaciteit voor uw woning of bedrijf.",
    href: "/diensten#groepenkast"
  },
  {
    title: "Storingen & onderhoud",
    description:
      "Snelle diagnose en veilige oplossingen bij stroomstoringen, kortsluiting en andere defecten.",
    href: "/diensten#storingen"
  },
  {
    title: "Nieuwbouw & renovatie",
    description:
      "Complete elektrotechnische installaties voor nieuwbouw- en renovatieprojecten, van ontwerp tot oplevering.",
    href: "/diensten#nieuwbouw"
  }
];

export default function HomePage() {
  const heroImageSrc = getHeroImageSrc();
  const projectImages = getProjectImages(3);

  return (
    <>
      <section className="section-padding">
        <div className="container-width grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-6 opacity-0 animate-fade-in">
            <div className="badge bg-white text-xs font-semibold text-primary shadow-soft">
              20+ jaar ervaring in elektrotechniek
            </div>
            <div className="space-y-4">
              <h1 className="font-heading text-5xl font-extrabold text-primary md:text-6xl">
                Professionele Elektricien voor Woningen &amp; Bedrijven
              </h1>
              <p className="max-w-xl text-slate-600">
                Meer dan 20 jaar ervaring in veilige en betrouwbare
                elektrotechnische installaties. Van groepenkasten en
                storingsdienst tot complete nieuwbouwprojecten.
              </p>
            </div>

            <ul className="grid gap-3 text-slate-600 sm:grid-cols-2">
              {[
                "20+ jaar ervaring",
                "200+ tevreden klanten",
                "150+ projecten afgerond",
                "Snelle service & transparante prijzen"
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 text-success">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <ul className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-600">
              <li className="flex items-center gap-1.5">
                <span className="text-success">✔</span> Gecertificeerd vakwerk
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-success">✔</span> 100% klanttevredenheid
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-success">✔</span> Veilig volgens NEN-normen
              </li>
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-bold text-white shadow-soft transition-all duration-300 hover:bg-accent/90 hover:text-white"
              >
                Vraag offerte aan
              </Link>
              <a
                href="tel:+31658719011"
                className="btn-secondary rounded-full text-base"
              >
                Bel direct +31 6 58 71 90 11
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] min-h-[280px] overflow-hidden rounded-2xl bg-slate-900 shadow-soft md:aspect-square md:min-h-0">
            {heroImageSrc && (
              <Image
                src={heroImageSrc}
                alt="Elektricien aan het werk op een project"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            )}
            <div className="pointer-events-none absolute inset-0 bg-black/50" />
          </div>
        </div>
      </section>

      <section className="section-padding opacity-0 animate-fade-in animate-fade-in-delay-1">
        <div className="container-width space-y-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Diensten
              </p>
              <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                Dit kunnen wij voor u betekenen
              </h2>
            </div>
            <Link
              href="/diensten"
              className="text-accent font-semibold transition-colors duration-300 hover:text-accent/80"
            >
              Bekijk alle diensten
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {servicePreview.map((service) => (
              <article
                key={service.title}
                className="card p-6 transition-shadow duration-300 hover:shadow-lg"
              >
                <h3 className="font-heading text-xl font-bold text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 text-slate-600">
                  {service.description}
                </p>
                <Link
                  href={service.href as any}
                  className="mt-4 inline-flex font-semibold text-accent transition-colors duration-300 hover:text-accent/80"
                >
                  Meer over deze dienst
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />

      <section className="section-padding opacity-0 animate-fade-in animate-fade-in-delay-2">
        <div className="container-width space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Projecten
              </p>
              <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                Een indruk van ons werk
              </h2>
              <p className="mt-2 max-w-xl text-slate-600">
                Van bedrijfshallen en kantoren tot woningen en tuinverlichting:
                De Elektricien verzorgt veilige en nette installaties met oog
                voor detail.
              </p>
            </div>
            <Link
              href="/galerij"
              className="font-semibold text-accent transition-colors duration-300 hover:text-accent/80"
            >
              Bekijk de volledige galerij
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projectImages.map((image) => (
              <div
                key={image.src}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 shadow-soft"
              >
                <Image
                  src={image.src}
                  alt={`Project ${image.filename} uitgevoerd door De Elektricien`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

