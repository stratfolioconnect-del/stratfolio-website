"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { services } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";

type SubmissionStatus = { kind: "success" | "error"; message: string } | null;

export function EnquiryForm({ deliveryConfigured }: { deliveryConfigured: boolean }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmissionStatus>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function clearFieldError(name: string) {
    setFieldErrors((current) => {
      if (!(name in current)) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  function fieldError(name: string) {
    return fieldErrors[name] ? <span className="field-error" id={`${name}-error`}>{fieldErrors[name]}</span> : null;
  }

  function fieldA11y(name: string) {
    return {
      "aria-invalid": fieldErrors[name] ? true : undefined,
      "aria-describedby": fieldErrors[name] ? `${name}-error` : undefined,
    };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;
    const form = event.currentTarget;
    const invalidFields: Record<string, string> = {};
    const controls = form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
      "input[required], select[required], textarea[required], input[type='email'], input[type='url'], [minlength], [maxlength]",
    );
    for (const control of controls) {
      if (!control.checkValidity()) invalidFields[control.name] = control.validationMessage;
    }
    setFieldErrors(invalidFields);
    if (Object.keys(invalidFields).length > 0) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(invalidFields)[0]}"]`)?.focus();
      return;
    }

    setStatus(null);
    setIsSubmitting(true);

    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      website: formData.get("website"),
      service: formData.get("service"),
      objective: formData.get("objective"),
      budget: formData.get("budget"),
      timeframe: formData.get("timeframe"),
      privacyConsent: formData.get("privacyConsent") === "on",
      websiteConfirm: formData.get("websiteConfirm"),
    };

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result: unknown = await response.json();

      if (!response.ok || typeof result !== "object" || result === null || !("ok" in result) || result.ok !== true) {
        const message = typeof result === "object" && result !== null && "message" in result && typeof result.message === "string"
          ? result.message
          : "The enquiry could not be submitted. Please review the details and try again.";
        setStatus({ kind: "error", message });
        return;
      }

      const successMessage = "message" in result && typeof result.message === "string"
        ? result.message
        : "Your enquiry was sent successfully.";
      form.reset();
      setFieldErrors({});
      setStatus({ kind: "success", message: successMessage });
    } catch {
      setStatus({ kind: "error", message: "We could not reach the enquiry service. No confirmation was received; please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate aria-busy={isSubmitting}>
      {Object.keys(fieldErrors).length > 0 && <p className="form-field-summary" role="alert">Please correct the highlighted fields before submitting.</p>}
      <div className="form-row">
        <label>Your name <span aria-hidden="true">*</span><input name="name" autoComplete="name" required minLength={2} maxLength={120} placeholder="Full name" {...fieldA11y("name")} onChange={() => clearFieldError("name")} />{fieldError("name")}</label>
        <label>Business email <span aria-hidden="true">*</span><input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" {...fieldA11y("email")} onChange={() => clearFieldError("email")} />{fieldError("email")}</label>
      </div>
      <div className="form-row">
        <label>Company <span aria-hidden="true">*</span><input name="company" autoComplete="organization" required minLength={2} maxLength={160} placeholder="Your organisation" {...fieldA11y("company")} onChange={() => clearFieldError("company")} />{fieldError("company")}</label>
        <label>Website <span className="optional-label">(optional)</span><input name="website" type="url" autoComplete="url" maxLength={2048} placeholder="https://yourcompany.com" {...fieldA11y("website")} onChange={() => clearFieldError("website")} />{fieldError("website")}</label>
      </div>
      <div className="form-row">
        <label>Service of interest <span aria-hidden="true">*</span><select name="service" required defaultValue="" {...fieldA11y("service")} onChange={() => clearFieldError("service")}><option value="" disabled>Select a service area</option>{services.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}<option value="Not sure yet">Not sure yet</option></select>{fieldError("service")}</label>
        <label>Indicative budget range <span className="optional-label">(optional; currency to be agreed)</span><select name="budget" defaultValue=""><option value="">Prefer not to say</option><option>Prefer to discuss</option><option>Below 2,500</option><option>2,500–5,000</option><option>5,000–10,000</option><option>10,000+</option></select></label>
      </div>
      <label>Project objective <span aria-hidden="true">*</span><textarea name="objective" rows={5} required minLength={20} maxLength={4000} placeholder="What are you trying to understand, evaluate, or improve?" {...fieldA11y("objective")} onChange={() => clearFieldError("objective")} />{fieldError("objective")}</label>
      <label>Preferred timeframe <span className="optional-label">(optional)</span><select name="timeframe" defaultValue=""><option value="">Select a preferred timeframe</option><option>As soon as practical</option><option>Within 2–4 weeks</option><option>Within 1–3 months</option><option>Flexible / not decided</option><option>Prefer to discuss</option></select></label>
      <label className="consent-label"><input name="privacyConsent" type="checkbox" required {...fieldA11y("privacyConsent")} onChange={() => clearFieldError("privacyConsent")} /> <span>I have read the <Link href="/privacy">privacy information</Link> and agree that my enquiry may be sent to STRATFOLIO INTELLIGENCE for the purpose of responding. <span aria-hidden="true">*</span>{fieldError("privacyConsent")}</span></label>
      <div className="form-honeypot" aria-hidden="true"><label>Leave this field empty<input name="websiteConfirm" tabIndex={-1} autoComplete="off" /></label></div>
      <button className="button button-primary submit-button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending enquiry…" : "Submit Project Enquiry"} <span aria-hidden="true">{isSubmitting ? "…" : "↗"}</span>
      </button>
      <p className="form-disclaimer">{deliveryConfigured ? "Submitting this form sends your enquiry to the configured recipient through the configured email provider. The application does not store submissions." : <>Email delivery is not configured yet. This form will not send or store your enquiry until the server-side provider credentials and verified sender are configured. For now, you can contact us directly at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</>}</p>
      {status && <p className={`form-status form-status-${status.kind}`} role={status.kind === "error" ? "alert" : "status"} aria-live={status.kind === "error" ? "assertive" : "polite"}>{status.message}</p>}
    </form>
  );
}
