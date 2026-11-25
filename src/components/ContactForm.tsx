"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { contactContent, siteConfig } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

const formSchema = z.object({
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

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const parsed = formSchema.safeParse({
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
      website: String(formData.get("website") || ""),
    });

    if (!parsed.success) {
      setStatus("error");
      setErrorMessage(
        parsed.error.issues[0]?.message || "Please check your inputs."
      );
      return;
    }

    const { name, email, message, website } = parsed.data;

    // Honeypot triggered: pretend success so bots do not retry
    if (website.length > 0) {
      setStatus("success");
      form.reset();
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: name,
            from_email: email,
            reply_to: email,
            to_email: siteConfig.email,
            message,
          },
          { publicKey }
        );
        setStatus("success");
        form.reset();
      } catch {
        setStatus("error");
        setErrorMessage(
          `Could not send message via EmailJS. Please email ${siteConfig.email} directly.`
        );
      }
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(
          data.error || "Could not send message. Please email me directly."
        );
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or email me directly.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot field hidden from assistive tech and visual users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="block font-mono text-xs tracking-wider text-ink-muted uppercase"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={100}
            placeholder="Your name"
            className="mt-2 w-full border border-line bg-bg px-3.5 py-2.5 text-base text-ink placeholder:text-ink-muted focus:border-ink focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block font-mono text-xs tracking-wider text-ink-muted uppercase"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="mt-2 w-full border border-line bg-bg px-3.5 py-2.5 text-base text-ink placeholder:text-ink-muted focus:border-ink focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block font-mono text-xs tracking-wider text-ink-muted uppercase"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={5}
          placeholder="Role, team, or project details..."
          className="mt-2 w-full border border-line bg-bg px-3.5 py-2.5 text-base text-ink placeholder:text-ink-muted focus:border-ink focus:outline-none"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center border border-ink bg-ink px-5 py-2.5 font-mono text-xs tracking-wide text-bg uppercase transition-colors hover:border-accent hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting"
            ? contactContent.submittingLabel
            : contactContent.submitLabel}
        </button>

        <div aria-live="polite" className="min-h-5">
          {status === "success" && (
            <p role="status" className="font-mono text-xs text-accent">
              {contactContent.successMessage}
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="font-mono text-xs text-accent">
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
