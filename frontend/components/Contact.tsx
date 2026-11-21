"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CinematicBg } from "./CinematicBg";
import { CONTACT_EMAIL } from "@/lib/site";
const EMAIL = "krushnapokharkar4@gmail.com";
const SUBJECT = "Project enquiry - Aryvion";

export function ContactPage() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked → user copies manually */
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <CinematicBg />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tightest leading-[1.08]">
            Tell us what you want to <span className="gradient-text">build.</span>
          </h1>
          <p className="mt-5 text-white/65">Email us. We reply within one working day.</p>
        </motion.div>

        <div className="rounded-2xl glass-strong hairline-strong p-8 md:p-12 text-center">
          <p className="text-sm text-white/60">For enquiries, write to</p>
          <a
            href={`mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}`}
            className="mt-3 inline-block break-all text-xl font-semibold tracking-tight text-white hover:text-cyan sm:text-2xl md:text-3xl"
          >
            {EMAIL}
          </a>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}`}
              className="inline-flex h-12 w-full items-center justify-center rounded-xl px-8 text-sm font-medium btn-primary sm:w-auto"
            >
              Send email
            </a>
            <button
              type="button"
              onClick={copy}
              aria-live="polite"
              className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 text-sm font-medium text-white/80 transition-all hover:border-white/25 hover:text-white sm:w-auto"
            >
              {copied ? "Copied" : "Copy address"}
            </button>
          </div>

          <p className="mx-auto mt-8 max-w-md text-xs text-white/45">
            Include: name, what you need (student project, business, AI, web/mobile app), short project details.
          </p>
        </div>
      </div>
    </section>
  );
}