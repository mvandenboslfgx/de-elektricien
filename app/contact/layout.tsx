import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Offerte aanvragen bij De Elektricien",
  description:
    "Vraag een offerte op maat aan voor elektrotechnische werkzaamheden. Bel 06-16538949 of gebruik het formulier. Vaste prijs per opdracht waar mogelijk.",
  keywords: [
    "elektricien",
    "groepenkast vervangen",
    "storing oplossen",
    "elektrotechniek Nederland"
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | De Elektricien",
    description:
      "Offerte aanvragen. Bel 06-16538949, WhatsApp of stuur een bericht via het formulier.",
    url: "https://www.de-elektricien.nl/contact"
  }
};

export default function ContactLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
