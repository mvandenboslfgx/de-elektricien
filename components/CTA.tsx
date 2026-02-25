import Link from "next/link";
import type { ReactNode } from "react";

type CTAProps = {
  title?: string;
  description?: ReactNode;
  buttonLabel?: string;
  href?: string;
};

export default function CTA({
  title = "Heeft u een betrouwbare elektricien nodig?",
  description = (
    <>
      Neem vandaag nog contact op voor een vrijblijvende offerte of een
      kennismakingsgesprek. Wij denken graag met u mee.
    </>
  ),
  buttonLabel = "Vraag een offerte aan",
  href = "/contact"
}: CTAProps) {
  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="card flex flex-col items-start justify-between gap-6 bg-primary px-6 py-8 text-white shadow-soft transition-shadow duration-300 hover:shadow-xl sm:px-10 sm:py-10 md:flex-row md:items-center">
          <div className="max-w-xl space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Direct een vakman inschakelen
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
              Liever direct iemand spreken?{" "}
              <a href="tel:+31658719011" className="font-semibold text-accent">
                Bel +31 6 58 71 90 11
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

