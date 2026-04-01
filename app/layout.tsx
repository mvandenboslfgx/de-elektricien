import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PHONE_DISPLAY, PHONE_E164, TEL_HREF } from "@/lib/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "De Elektricien | Professionele Elektrotechniek",
    template: "%s | De Elektricien"
  },
  description:
    "Zelfstandig installatiebedrijf voor elektrotechniek: groepenkast, storingen, bekabeling en verlichting. Offerte op maat, vaste prijs per opdracht. Vraag een vrijblijvende offerte aan.",
  keywords: [
    "elektricien",
    "elektrotechniek",
    "groepenkast vervangen",
    "storing oplossen",
    "elektricien Nederland",
    "elektricien woning",
    "elektricien bedrijf"
  ],
  metadataBase: new URL("https://www.de-elektricien.nl"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://www.de-elektricien.nl",
    siteName: "De Elektricien",
    title: "De Elektricien | Professionele Elektrotechniek",
    description:
      "Elektrotechnische installaties voor woning en bedrijf. Offerte op maat en vaste prijs per opdracht.",
    images: [
      {
        url: "/images/projecten/logo-de-elektricien.png",
        width: 800,
        height: 800,
        alt: "Logo De Elektricien - Sterk in elektra werk"
      }
    ]
  }
};

function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "De Elektricien",
    url: "https://www.de-elektricien.nl",
    telephone: PHONE_E164,
    email: "algemeen@de-elektricien.nl",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Nederland"
    },
    image: "https://www.de-elektricien.nl/images/projecten/logo-de-elektricien.png",
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        opens: "08:00",
        closes: "18:00"
      }
    ],
    sameAs: [
      // TODO: Vervang door de echte social media profiel-URL's van De Elektricien.
      "https://www.facebook.com/de-elektricien",
      "https://www.instagram.com/de-elektricien",
      "https://nl.trustpilot.com/review/de-elektricien.nl"
    ],
    areaServed: {
      "@type": "Country",
      name: "Nederland"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function MobileCallToAction() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 block md:hidden">
      <a
        href={TEL_HREF}
        className="flex w-full items-center justify-center bg-accent py-4 text-base font-bold text-white shadow-[0_-4px_20px_rgba(6,182,212,0.4)] transition-colors duration-300 hover:bg-accent/90 hover:text-white"
      >
        Bel direct {PHONE_DISPLAY}
      </a>
    </div>
  );
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-body bg-background text-slate-900">
        <LocalBusinessJsonLd />
        <Header />
        <main className="pt-20 pb-24 md:pb-12">{children}</main>
        <Footer />
        <MobileCallToAction />
      </body>
    </html>
  );
}

