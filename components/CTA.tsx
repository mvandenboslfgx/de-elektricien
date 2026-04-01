import Link from "next/link";
import type { ReactNode } from "react";
import { PHONE_DISPLAY, TEL_HREF } from "@/lib/company";

type CTAProps = {
  title?: string;
  description?: ReactNode;
  buttonLabel?: string;
  href?: string;
};

export default function CTA({
  title = "Offerte op maat voor uw installatie?",
  description = (
    <>
      Vraag een vrijblijvende offerte aan. Wij werken met vaste prijs per
      opdracht — gericht op een veilig en deugdelijk eindresultaat.
    </>
  ),
  buttonLabel = "Offerte aanvragen",
  href = "/contact"
}: CTAProps) {
  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="card flex flex-col items-start justify-between gap-6 bg-primary px-6 py-8 text-white shadow-soft transition-shadow duration-300 hover:shadow-xl sm:px-10 sm:py-10 md:flex-row md:items-center">
          <div className="max-w-xl space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Zelfstandig installatiebedrijf
            </p>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              {title}
            </h2>
            <p className="text-slate-200">{description}</p>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <Link
              href={href as any}
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-bold text-white shadow-soft transition-all duration-300 hover:bg-accent/90 hover:text-white"
            >
              {buttonLabel}
            </Link>
            <p className="text-sm text-slate-300">
              Liever direct contact?{" "}
              <a href={TEL_HREF} className="font-semibold text-accent">
                Bel {PHONE_DISPLAY}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
