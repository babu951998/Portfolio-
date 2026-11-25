import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";
import { z } from "zod";
import { siteConfig } from "@/data/site";
import { checkRateLimit } from "@/lib/rate-limit";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name is too long."),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(2000, "Message must be under 2000 characters."),
  website: z.string().optional().default(""),
});

export async function POST(request: NextRequest) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";

    const rate = checkRateLimit(ip);
    if (!rate.allowed) {
      return NextResponse.json(
        {
          error: "Too many messages sent recently. Please try again later.",
        },
        {
          status: 429,
          headers: { "Retry-After": String(rate.retryAfterSeconds) },
        }
      );
    }

    const body: unknown = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const firstError =
        parsed.error.issues[0]?.message || "Invalid form submission.";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const { name, email, message, website } = parsed.data;

    // Honeypot triggered: pretend success so bots do not retry
    if (website.length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const subject = `Portfolio inquiry from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpUser && smtpPass) {
      const port = Number(process.env.SMTP_PORT || "465");
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port,
        secure: port === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"${name} via Portfolio" <${smtpUser}>`,
        to: siteConfig.email,
        replyTo: email,
        subject,
        text,
      });

      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const resend = new Resend(resendKey);
      const { error } = await resend.emails.send({
        from: siteConfig.resendFromEmail,
        to: siteConfig.email,
        replyTo: email,
        subject,
        text,
      });

      if (error) {
        return NextResponse.json(
          {
            error: "Unable to deliver email right now. Please email directly.",
          },
          { status: 502 }
        );
      }

      return NextResponse.json({ ok: true }, { status: 200 });
    }

    return NextResponse.json(
      {
        error: `Contact form is not configured yet. Please email ${siteConfig.email} directly.`,
      },
      { status: 503 }
    );
  } catch {
    return NextResponse.json(
      { error: "Unexpected error processing your request." },
      { status: 500 }
    );
  }
}
