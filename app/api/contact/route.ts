/**
 * Contact form API: POST /api/contact
 *
 * .env.local must contain:
 *   RESEND_API_KEY=re_xxxx  (from https://resend.com)
 * Optional: CONTACT_FROM="De Elektricien <noreply@yourdomain.com>" (verified domain in Resend)
 */
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  naam: z.string().min(2, "Naam moet minimaal 2 tekens zijn."),
  telefoon: z.string().min(6, "Telefoon moet minimaal 6 tekens zijn."),
  email: z.string().email("Vul een geldig e-mailadres in."),
  bericht: z.string().min(10, "Bericht moet minimaal 10 tekens zijn."),
  honeypot: z.string().optional(),
});

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5;

const rateLimitMap = new Map<
  string,
  { count: number; resetAt: number }
>();

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp;
  return "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry) return false;
  if (now >= entry.resetAt) {
    rateLimitMap.delete(ip);
    return false;
  }
  return entry.count >= RATE_LIMIT_MAX;
}

function recordRateLimit(ip: string): void {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry) {
    rateLimitMap.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return;
  }
  if (now >= entry.resetAt) {
    rateLimitMap.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return;
  }
  entry.count += 1;
}

const ADMIN_EMAIL = "algemeen@de-elektricien.nl";
const PHONE = "+31 6 58 71 90 11";

function buildAdminHtml(data: {
  naam: string;
  telefoon: string;
  email: string;
  bericht: string;
}): string {
  const replyUrl = `mailto:${data.email}?subject=Re: Offerteaanvraag - ${encodeURIComponent(data.naam)}`;
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;font-family:Inter,sans-serif;background:#f7f8fa;">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 18px 45px rgba(15,23,42,0.08);">
    <div style="background:#0F172A;color:#fff;padding:24px 24px 20px;text-align:center;">
      <h1 style="margin:0;font-size:22px;font-weight:700;">De Elektricien</h1>
      <p style="margin:8px 0 0;font-size:14px;opacity:0.9;">Offerteaanvraag via website</p>
    </div>
    <div style="padding:24px;">
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:600;color:#0F172A;">Naam</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#475569;">${escapeHtml(data.naam)}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:600;color:#0F172A;">Telefoon</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#475569;">${escapeHtml(data.telefoon)}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:600;color:#0F172A;">E-mail</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#475569;">${escapeHtml(data.email)}</td></tr>
        <tr><td style="padding:10px 0;font-weight:600;color:#0F172A;vertical-align:top;">Bericht</td><td style="padding:10px 0;color:#475569;white-space:pre-wrap;">${escapeHtml(data.bericht)}</td></tr>
      </table>
      <p style="margin:24px 0 0;text-align:center;">
        <a href="${replyUrl}" style="display:inline-block;background:#06B6D4;color:#fff;text-decoration:none;padding:12px 24px;border-radius:9999px;font-weight:600;font-size:14px;">Antwoord per e-mail</a>
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

function buildConfirmationHtml(naam: string): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;font-family:Inter,sans-serif;background:#f7f8fa;">
  <div style="max-width:560px;margin:0 auto;background:#fff;padding:32px;border-radius:16px;box-shadow:0 18px 45px rgba(15,23,42,0.08);">
    <div style="background:#0F172A;color:#fff;padding:20px;border-radius:12px;text-align:center;margin-bottom:24px;">
      <h1 style="margin:0;font-size:20px;font-weight:700;">De Elektricien</h1>
      <p style="margin:4px 0 0;font-size:13px;opacity:0.9;">Sterk in elektra werk</p>
    </div>
    <p style="margin:0 0 16px;color:#334155;line-height:1.6;">Beste ${escapeHtml(naam)},</p>
    <p style="margin:0 0 16px;color:#334155;line-height:1.6;">Bedankt voor uw aanvraag. Wij hebben uw bericht in goede orde ontvangen.</p>
    <p style="margin:0 0 16px;color:#334155;line-height:1.6;">Wij nemen binnen 24 uur contact met u op om de mogelijkheden te bespreken.</p>
    <p style="margin:24px 0 0;color:#64748b;font-size:14px;">Heeft u direct een vraag? Bel ons: <a href="tel:+31658719011" style="color:#06B6D4;font-weight:600;">${PHONE}</a></p>
    <p style="margin:24px 0 0;color:#94a3b8;font-size:12px;">De Elektricien · www.de-elektricien.nl</p>
  </div>
</body>
</html>
  `.trim();
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { ok: false, error: "Te veel aanvragen. Probeer het over 10 minuten opnieuw." },
        { status: 429 }
      );
    }

    const body = await request.json();

    const parsed = contactSchema.safeParse({
      naam: body?.naam ?? "",
      telefoon: body?.telefoon ?? "",
      email: body?.email ?? "",
      bericht: body?.bericht ?? "",
      honeypot: body?.honeypot ?? "",
    });

    if (!parsed.success) {
      const first = parsed.error.flatten().fieldErrors;
      const message =
        (first.naam?.[0]) ??
        (first.telefoon?.[0]) ??
        (first.email?.[0]) ??
        (first.bericht?.[0]) ??
        "Ongeldige invoer.";
      return NextResponse.json(
        { ok: false, error: message },
        { status: 400 }
      );
    }

    const { naam, telefoon, email, bericht, honeypot } = parsed.data;

    if (honeypot?.trim()) {
      return NextResponse.json({ ok: true });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "E-mailservice is nog niet geconfigureerd." },
        { status: 500 }
      );
    }

    const fromAddress =
      process.env.CONTACT_FROM ?? "De Elektricien <onboarding@resend.dev>";

    recordRateLimit(ip);
    const resend = new Resend(apiKey);

    const subject = `Offerteaanvraag via website - ${naam}`;

    await resend.emails.send({
      from: fromAddress,
      to: ADMIN_EMAIL,
      replyTo: email,
      subject,
      html: buildAdminHtml({ naam, telefoon, email, bericht }),
    });

    await resend.emails.send({
      from: fromAddress,
      to: email,
      subject: "Uw aanvraag bij De Elektricien",
      html: buildConfirmationHtml(naam),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Er is iets misgegaan bij het versturen van uw bericht." },
      { status: 500 }
    );
  }
}
