"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CinematicBg } from "./CinematicBg";

const types = [
  { id: "student", label: "Student project" },
  { id: "business", label: "Startup or business" },
  { id: "ai", label: "AI & automation" },
  { id: "web", label: "Web or mobile app" },
  { id: "other", label: "Something else" },
];

type Form = { name: string; email: string; phone: string; type: string; message: string; website: string };
const empty: Form = { name: "", email: "", phone: "", type: "", message: "", website: "" };
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(f: Form) {
  const e: Partial<Record<keyof Form, string>> = {};
  if (f.name.trim().length < 2) e.name = "Enter your name.";
  if (!EMAIL.test(f.email.trim())) e.email = "Enter a valid email address.";
  if (!f.type) e.type = "Choose what you need help with.";
  if (f.message.trim().length < 10) e.message = "Describe your project in at least 10 characters.";
  return e;
}

export function ContactPage() {
  const [form, setForm] = useState<Form>(empty);
  const [errors, setErrors] = useState<ReturnType<typeof validate>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  // Preselect the type from links like /contact?type=student
  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("type");
    if (t && types.some((x) => x.id === t)) setForm((p) => ({ ...p, type: t }));
  }, []);

  const update = (k: keyof Form, v: string) => {
    setForm((p) => ({ ...p, [k]: v }));
    setErrors((p) => ({ ...p, [k]: undefined }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("loading");
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      setForm(empty);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  const field =
    "input-glow w-full rounded-xl bg-white/5 hairline px-4 text-sm text-white placeholder-white/40 transition-all";
  const label = "mb-2 block text-sm text-white/70";
  const err = (k: keyof Form) =>
    errors[k] ? (
      <p id={`${k}-error`} role="alert" className="mt-1.5 text-xs text-red-400">{errors[k]}</p>
    ) : null;

  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <CinematicBg />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tightest leading-[1.08]">
            Tell us what you want to <span className="gradient-text">build.</span>
          </h1>
          <p className="mt-5 text-white/65">We reply within one working day.</p>
        </motion.div>

        {status === "success" ? (
          <div role="status" className="rounded-2xl glass-strong hairline-strong p-8 md:p-12 text-center">
            <h2 className="text-2xl font-semibold tracking-tight">Message sent</h2>
            <p className="mx-auto mt-3 max-w-md text-white/65">
              Thanks for reaching out. We will contact you at the email you provided.
            </p>
            <Link href="/" className="mt-6 inline-flex h-11 items-center rounded-xl px-6 text-sm font-medium btn-primary">
              Back to home
            </Link>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="rounded-2xl glass-strong hairline-strong p-6 md:p-10">
            {/* Honeypot: hidden from people, bots fill it */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden
              value={form.website} onChange={(e) => update("website", e.target.value)}
              className="absolute left-[-9999px] h-0 w-0 opacity-0" />

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className={label}>Full name</label>
                <input id="name" autoComplete="name" value={form.name} onChange={(e) => update("name", e.target.value)}
                  aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined}
                  className={`${field} h-11`} />
                {err("name")}
              </div>
              <div>
                <label htmlFor="email" className={label}>Email</label>
                <input id="email" type="email" autoComplete="email" value={form.email} onChange={(e) => update("email", e.target.value)}
                  aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined}
                  className={`${field} h-11`} />
                {err("email")}
              </div>
              <div className="md:col-span-2">
                <label htmlFor="phone" className={label}>Phone or WhatsApp (optional)</label>
                <input id="phone" type="tel" autoComplete="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)}
                  className={`${field} h-11`} />
              </div>

              <fieldset className="md:col-span-2">
                <legend className={label}>I need help with</legend>
                <div className="flex flex-wrap gap-2">
                  {types.map((t) => (
                    <button key={t.id} type="button" aria-pressed={form.type === t.id}
                      onClick={() => update("type", t.id)}
                      className={`rounded-lg border px-4 py-2 text-sm transition-all ${
                        form.type === t.id
                          ? "border-cyan/50 bg-cyan/15 text-cyan"
                          : "border-white/10 bg-white/5 text-white/75 hover:border-white/25"
                      }`}>
                      {t.label}
                    </button>
                  ))}
                </div>
                {err("type")}
              </fieldset>

              <div className="md:col-span-2">
                <label htmlFor="message" className={label}>Project details</label>
                <textarea id="message" rows={5} value={form.message} onChange={(e) => update("message", e.target.value)}
                  aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined}
                  className={`${field} resize-none py-3`} />
                {err("message")}
              </div>
            </div>

            {status === "error" && (
              <p role="alert" className="mt-6 rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                {serverError} Please try again.
              </p>
            )}

            <button type="submit" disabled={status === "loading"}
              className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-xl px-8 text-sm font-medium btn-primary disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
              {status === "loading" ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
