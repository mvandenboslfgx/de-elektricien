"use client";

import { useState, type FormEvent } from "react";

type FormState = {
  naam: string;
  telefoon: string;
  email: string;
  bericht: string;
  honeypot: string;
};

type FormErrors = Partial<Pick<FormState, "naam" | "telefoon" | "email" | "bericht">>;

const initialState: FormState = {
  naam: "",
  telefoon: "",
  email: "",
  bericht: "",
  honeypot: "",
};

const MIN_NAAM = 2;
const MIN_TELEFOON = 6;
const MIN_BERICHT = 10;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    const naamTrim = form.naam.trim();
    if (naamTrim.length < MIN_NAAM) {
      newErrors.naam = "Naam moet minimaal 2 tekens zijn.";
    }
    const telefoonTrim = form.telefoon.trim();
    if (telefoonTrim.length < MIN_TELEFOON) {
      newErrors.telefoon = "Telefoon moet minimaal 6 tekens zijn.";
    }
    if (!form.email.trim()) {
      newErrors.email = "Vul uw e-mailadres in.";
    } else if (!EMAIL_REGEX.test(form.email)) {
      newErrors.email = "Vul een geldig e-mailadres in.";
    }
    const berichtTrim = form.bericht.trim();
    if (berichtTrim.length < MIN_BERICHT) {
      newErrors.bericht = "Bericht moet minimaal 10 tekens zijn.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          naam: form.naam.trim(),
          telefoon: form.telefoon.trim(),
          email: form.email.trim(),
          bericht: form.bericht.trim(),
          honeypot: form.honeypot,
        }),
      });

      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.error ?? "Onbekende fout");
      }

      setSubmitted(true);
      setForm(initialState);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Er is iets misgegaan bij het versturen. Probeer het later opnieuw of neem telefonisch contact op."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    field: keyof FormState,
    value: string
  ): void => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (field !== "honeypot" && errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section className="section-padding">
      <div className="container-width grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Contact
            </p>
            <h1 className="font-heading text-3xl font-bold text-primary md:text-4xl">
              Vraag een offerte aan
            </h1>
            <p className="max-w-xl text-slate-600">
              Laat hieronder uw gegevens en een korte beschrijving van uw vraag
              of project achter. Wij werken door heel Nederland en nemen zo snel
              mogelijk contact met u op om de mogelijkheden te bespreken.
            </p>
          </div>

          {submitted && !submitError && (
            <div className="success-message-in rounded-2xl border border-green-200 bg-green-50 px-4 py-4 text-slate-800 shadow-soft">
              <p className="flex items-center gap-2 font-semibold text-green-800">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-200 text-green-700">
                  ✓
                </span>
                Bedankt voor uw bericht
              </p>
              <p className="mt-2 text-sm text-green-800/90">
                We hebben uw aanvraag ontvangen en nemen zo spoedig mogelijk contact met u op.
              </p>
            </div>
          )}

          {submitError && (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 shadow-soft">
              {submitError}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="card relative space-y-5 p-6 sm:p-8"
            noValidate
          >
            {/* Honeypot: hidden from users, bots may fill it */}
            <div className="absolute -left-[9999px] top-0 opacity-0" aria-hidden="true">
              <label htmlFor="website_url">Website</label>
              <input
                id="website_url"
                type="text"
                name="website_url"
                tabIndex={-1}
                autoComplete="off"
                value={form.honeypot}
                onChange={(e) => handleChange("honeypot", e.target.value)}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="relative">
                <input
                  id="naam"
                  type="text"
                  value={form.naam}
                  onChange={(e) => handleChange("naam", e.target.value)}
                  className="peer w-full rounded-xl border border-slate-200 bg-white px-3 pt-5 pb-2 text-slate-900 outline-none ring-offset-2 transition-colors duration-300 focus:border-accent focus:ring-2 focus:ring-accent/40"
                  placeholder=" "
                  autoComplete="name"
                />
                <label
                  htmlFor="naam"
                  className={`pointer-events-none absolute left-3 text-slate-500 transition-all duration-300 peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent ${
                    form.naam ? "top-2 text-xs" : "top-4"
                  }`}
                >
                  Naam
                </label>
                {errors.naam && (
                  <p className="mt-1 text-xs text-red-500">{errors.naam}</p>
                )}
              </div>

              <div className="relative">
                <input
                  id="telefoon"
                  type="tel"
                  value={form.telefoon}
                  onChange={(e) => handleChange("telefoon", e.target.value)}
                  className="peer w-full rounded-xl border border-slate-200 bg-white px-3 pt-5 pb-2 text-slate-900 outline-none ring-offset-2 transition-colors duration-300 focus:border-accent focus:ring-2 focus:ring-accent/40"
                  placeholder=" "
                  autoComplete="tel"
                />
                <label
                  htmlFor="telefoon"
                  className={`pointer-events-none absolute left-3 text-slate-500 transition-all duration-300 peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent ${
                    form.telefoon ? "top-2 text-xs" : "top-4"
                  }`}
                >
                  Telefoon
                </label>
                {errors.telefoon && (
                  <p className="mt-1 text-xs text-red-500">{errors.telefoon}</p>
                )}
              </div>
            </div>

            <div className="relative">
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="peer w-full rounded-xl border border-slate-200 bg-white px-3 pt-5 pb-2 text-slate-900 outline-none ring-offset-2 transition-colors duration-300 focus:border-accent focus:ring-2 focus:ring-accent/40"
                placeholder=" "
                autoComplete="email"
              />
              <label
                htmlFor="email"
                className={`pointer-events-none absolute left-3 text-slate-500 transition-all duration-300 peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent ${
                  form.email ? "top-2 text-xs" : "top-4"
                }`}
              >
                E-mail
              </label>
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="relative">
              <textarea
                id="bericht"
                value={form.bericht}
                onChange={(e) => handleChange("bericht", e.target.value)}
                rows={5}
                className="peer w-full resize-y rounded-xl border border-slate-200 bg-white px-3 py-4 pt-6 text-slate-900 outline-none ring-offset-2 transition-colors duration-300 focus:border-accent focus:ring-2 focus:ring-accent/40"
                placeholder=" "
              />
              <label
                htmlFor="bericht"
                className={`pointer-events-none absolute left-3 text-slate-500 transition-all duration-300 peer-focus:top-3 peer-focus:text-xs peer-focus:text-accent ${
                  form.bericht ? "top-3 text-xs" : "top-5"
                }`}
              >
                Bericht
              </label>
              {errors.bericht && (
                <p className="mt-1 text-xs text-red-500">{errors.bericht}</p>
              )}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary inline-flex rounded-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Versturen..." : "Verstuur bericht"}
              </button>
              <p className="text-xs text-slate-500">
                Door dit formulier te versturen geeft u toestemming om
                contact met u op te nemen over uw aanvraag.
              </p>
            </div>
          </form>
        </div>

        <aside className="space-y-4">
          <div className="card space-y-3 p-6">
            <h2 className="font-heading text-lg font-semibold text-primary">
              Contactgegevens
            </h2>
            <p className="text-sm text-slate-700">
              Liever direct iemand spreken? Bel dan gerust, vaak kunnen we al
              telefonisch goed inschatten wat er nodig is.
            </p>
            <p className="text-sm">
              <span className="text-slate-500">Telefoon:</span>{" "}
              <a
                href="tel:+31658719011"
                className="font-semibold text-accent"
              >
                +31 6 58 71 90 11
              </a>
            </p>
            <p className="text-sm">
              <span className="text-slate-500">E-mail:</span>{" "}
              <a
                href="mailto:algemeen@de-elektricien.nl"
                className="font-medium text-primary"
              >
                algemeen@de-elektricien.nl
              </a>
            </p>
          </div>

          <div className="card h-56 overflow-hidden bg-slate-100 sm:h-64">
            <iframe
              title="Werkgebied De Elektricien - Nederland"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1972941.922461306!2d3.055971288858588!3d52.210758452374876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5f769fae5e58f%3A0x56a55d3e8c1a9!2sNederland!5e0!3m2!1snl!2snl!4v1708867200000!5m2!1snl!2snl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
