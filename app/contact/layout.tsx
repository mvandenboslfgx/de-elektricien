import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Offerte aanvragen bij De Elektricien",
  description:
    "Vraag een vrijblijvende offerte aan. Neem contact op voor elektrotechnische werkzaamheden: groepenkast, storingen, nieuwbouw, verlichting. Snel antwoord.",
  keywords: [
    "elektricien",
    "groepenkast vervangen",
    "storing oplossen",
    "elektrotechniek Nederland"
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | De Elektricien",
    description: "Vraag een offerte aan. Bel +31 6 58 71 90 11 of stuur een bericht.",
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
