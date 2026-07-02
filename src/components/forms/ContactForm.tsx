"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/validation/contact-schema";
import { HoneypotField } from "@/components/forms/HoneypotField";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  // Lazy initializer — the sanctioned way to run a one-off impure read (Date.now) exactly once per mount.
  const [mountedAt, setMountedAt] = useState(() => Date.now());
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
      privacyConsent: false as unknown as true,
      honeypot: "",
      formRenderedAt: mountedAt,
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      // Inside a submit handler, not render — resets the anti-spam timestamp for a potential second message.
      // eslint-disable-next-line react-hooks/purity
      const nextMountedAt = Date.now();
      setMountedAt(nextMountedAt);
      reset({ ...values, fullName: "", email: "", phone: "", message: "", privacyConsent: false as unknown as true, formRenderedAt: nextMountedAt });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-sm bg-eucalyptus/15 p-8">
        <CheckCircle2 size={28} className="text-eucalyptus-text" aria-hidden="true" />
        <div>
          <p className="font-display text-fluid-lg text-charcoal">Message received</p>
          <p className="mt-2 max-w-sm text-fluid-sm text-charcoal/70">
            Thank you — we typically respond within one business day. For urgent enquiries, call us directly.
          </p>
        </div>
        <Button variant="outline" onClick={() => setStatus("idle")} type="button">
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      <HoneypotField register={register("honeypot")} />
      <input type="hidden" {...register("formRenderedAt", { valueAsNumber: true })} />

      <Field label="Full name" htmlFor="fullName" error={errors.fullName?.message}>
        <input
          id="fullName"
          type="text"
          autoComplete="name"
          className={inputClass(Boolean(errors.fullName))}
          {...register("fullName")}
        />
      </Field>

      <Field label="Email" htmlFor="email" error={errors.email?.message}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={inputClass(Boolean(errors.email))}
          {...register("email")}
        />
      </Field>

      <Field label="Phone (optional)" htmlFor="phone" error={errors.phone?.message}>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          className={inputClass(Boolean(errors.phone))}
          {...register("phone")}
        />
      </Field>

      <Field label="Message" htmlFor="message" error={errors.message?.message}>
        <textarea
          id="message"
          rows={5}
          className={inputClass(Boolean(errors.message))}
          {...register("message")}
        />
      </Field>

      <div className="flex items-start gap-3">
        <input
          id="privacyConsent"
          type="checkbox"
          className="mt-1 h-4 w-4 accent-terracotta"
          {...register("privacyConsent")}
        />
        <label htmlFor="privacyConsent" className="text-fluid-sm text-charcoal/70">
          I consent to Hills &amp; Harbour storing my details to respond to this enquiry, in line with the privacy
          notice.
        </label>
      </div>
      {errors.privacyConsent && <p className="text-fluid-xs text-terracotta-text">{errors.privacyConsent.message}</p>}

      <Button type="submit" size="lg" disabled={status === "submitting"} className="self-start">
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <Loader2 size={16} className="animate-spin" /> Sending
          </span>
        ) : (
          "Send message"
        )}
      </Button>

      {status === "error" && (
        <p role="alert" className="text-fluid-sm text-terracotta-text">
          Something went wrong sending your message — please try again, or email us directly.
        </p>
      )}
    </form>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-sm border bg-cream px-4 py-3 text-fluid-sm text-charcoal outline-none transition-colors focus:border-terracotta",
    hasError ? "border-terracotta" : "border-charcoal/20",
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-fluid-xs uppercase tracking-widest2 text-charcoal/55">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-fluid-xs text-terracotta-text">
          {error}
        </p>
      )}
    </div>
  );
}
