import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const REFERRAL_OPTIONS = [
  "Google search",
  "Referral from GP or clinician",
  "PACFA directory",
  "Word of mouth",
  "Instagram",
  "Other",
] as const;

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  referral_source: z.enum(REFERRAL_OPTIONS, {
    errorMap: () => ({ message: "Please choose an option" }),
  }),
  referral_other: z.string().trim().max(200).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(20, "Please write at least a short message (20 characters)")
    .max(2000, "Message is too long (max 2000 characters)"),
  website: z.string().max(0, "").optional().or(z.literal("")), // honeypot
});

type FormState = {
  name: string;
  email: string;
  phone: string;
  referral_source: string;
  referral_other: string;
  message: string;
  website: string; // honeypot
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  referral_source: "",
  referral_other: "",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormState;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    if (parsed.data.referral_source === "Other" && !parsed.data.referral_other?.trim()) {
      setErrors({ referral_other: "Please tell me a little more" });
      return;
    }

    setStatus("submitting");
    try {
      const { data, error } = await supabase.functions.invoke("submit-contact-form", {
        body: parsed.data,
      });
      if (error) throw error;
      if (data && (data as { error?: string }).error) {
        throw new Error((data as { error: string }).error);
      }
      setStatus("success");
      setForm(initialState);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong. Please try again or email directly.";
      setServerError(message);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-border bg-card p-6 md:p-8">
        <h3 className="font-serif text-2xl text-foreground mb-3">Thank you</h3>
        <p className="text-muted-foreground text-[15px] leading-[1.7]">
          Your message has come through. I'll reply within 24 hours. If you haven't heard back after
          that, please check your spam folder or feel free to call directly on 0405 933 722.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full bg-card border border-border px-4 py-3 text-[15px] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all";
  const labelClass =
    "block uppercase tracking-[0.18em] text-[10px] md:text-[11px] font-medium text-muted-foreground mb-2";
  const errorClass = "text-xs text-destructive mt-1";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="name" className={labelClass}>Name</label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          className={inputClass}
          required
        />
        {errors.name && <p className={errorClass}>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Email</label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className={inputClass}
          required
        />
        {errors.email && <p className={errorClass}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>Phone (optional)</label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          className={inputClass}
        />
        {errors.phone && <p className={errorClass}>{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="referral_source" className={labelClass}>
          Referral source
        </label>
        <select
          id="referral_source"
          value={form.referral_source}
          onChange={(e) => update("referral_source", e.target.value)}
          className={inputClass}
          required
        >
          <option value="">Please choose</option>
          {REFERRAL_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {errors.referral_source && <p className={errorClass}>{errors.referral_source}</p>}
      </div>

      {form.referral_source === "Other" && (
        <div>
          <label htmlFor="referral_other" className={labelClass}>
            Tell me a little more
          </label>
          <input
            id="referral_other"
            type="text"
            value={form.referral_other}
            onChange={(e) => update("referral_other", e.target.value)}
            className={inputClass}
          />
          {errors.referral_other && <p className={errorClass}>{errors.referral_other}</p>}
        </div>
      )}

      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea
          id="message"
          rows={6}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={`${inputClass} resize-y min-h-[140px]`}
          required
        />
        {errors.message && <p className={errorClass}>{errors.message}</p>}
      </div>

      {serverError && (
        <div className="border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {serverError}
        </div>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="border border-foreground text-foreground px-6 py-3 text-sm font-medium uppercase tracking-[0.15em] hover:bg-foreground hover:text-card transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>
        <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
          Your details are stored securely and used only to respond to your enquiry. Please avoid
          sharing sensitive clinical information in this form; we can discuss that safely once we're in
          contact.
        </p>
      </div>
    </form>
  );
}
