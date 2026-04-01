import type { Metadata } from "next";
import GalleryWithLightbox from "@/components/GalleryWithLightbox";
import { getProjectImages } from "@/lib/projectImages";

export const metadata: Metadata = {
  title: "Projectgalerij | Elektrotechnische projecten",
  description:
    "Bekijk uitgevoerde elektrotechnische projecten: groepenkasten, verlichting, nieuwbouw en bedrijfsinstallaties. De Elektricien — veilig vakwerk.",
  keywords: [
    "elektricien",
    "groepenkast vervangen",
    "storing oplossen",
    "elektrotechniek Nederland"
  ],
  alternates: { canonical: "/galerij" },
  openGraph: {
    title: "Galerij | De Elektricien",
    description: "Voorbeelden van onze elektrotechnische projecten.",
    url: "https://www.de-elektricien.nl/galerij"
  }
};

export default function GalerijPage() {
  const images = getProjectImages();

  return (
    <section className="section-padding">
      <div className="container-width space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Galerij
          </p>
          <h1 className="font-heading text-3xl font-bold text-primary md:text-4xl">
            Een selectie van uitgevoerde projecten
          </h1>
          <p className="max-w-2xl text-slate-600">
            In deze galerij ziet u een greep uit de projecten die wij de
            afgelopen jaren hebben gerealiseerd. Van groepenkasten en
            bedrijfsinstallaties tot tuinverlichting en complete elektra in woningen.
            Klik op een afbeelding om te vergroten.
          </p>
        </div>

        {images.length === 0 ? (
          <p className="text-slate-600">
            Er zijn nog geen projectafbeeldingen gevonden. Plaats foto&apos;s in{" "}
            <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">
              public/images/projecten
            </code>{" "}
            en herlaad de pagina.
          </p>
        ) : (
          <GalleryWithLightbox images={images} />
        )}
      </div>
    </section>
  );
}

