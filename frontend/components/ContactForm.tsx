"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CinematicBg } from "./CinematicBg";
import { NeuralCanvas } from "./NeuralCanvas";

const interests = [
  "HireX — Recruitment AI",
  "Aryvion AI — Multi-Agent",
  "Farm-to-Globe — Agriculture",
  "Enterprise Automation",
  "Custom AI Solution",
  "Partnership",
];

const companySizes = ["1-10", "11-50", "51-200", "201-1000", "1000+"];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    size: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      // In production, you would send this to your backend
      console.log("Form submitted:", form);
    }, 1000);
  };

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <CinematicBg />
      <div className="absolute inset-0 opacity-40">
        <NeuralCanvas />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass hairline mb-6 md:mb-8"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            <span className="font-mono text-[10px] md:text-[11px] tracking-widest text-white/80">
              LET'S BUILD TOGETHER
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tightest leading-[1.05]"
          >
            Ready to deploy{" "}
            <span className="gradient-text">intelligent systems?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base md:text-lg text-white/60 leading-relaxed"
          >
            Tell us about your challenge. We'll respond within 24 hours with a
            tailored approach.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 space-y-5 md:space-y-6"
          >
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M22 6l-10 7L2 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
                label: "Email",
                value: "hello@aryvion.ai",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                    <path
                      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                ),
                label: "Headquarters",
                value: "San Francisco · Berlin · Bangalore",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M12 6v6l4 2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
                label: "Response time",
                value: "Within 24 hours",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 md:p-5 rounded-2xl glass hairline"
              >
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan/20 to-violet/20 border border-white/10 flex items-center justify-center text-cyan shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-widest text-white/40 mb-1">
                    {item.label.toUpperCase()}
                  </div>
                  <div className="text-sm md:text-base text-white/90">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-4 md:pt-6 border-t border-white/5">
              <div className="font-mono text-[10px] tracking-widest text-white/40 mb-3">
                SECURITY & COMPLIANCE
              </div>
              <div className="flex flex-wrap gap-2">
                {["SOC 2", "ISO 27001", "GDPR", "HIPAA"].map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1.5 rounded-lg glass hairline font-mono text-[10px] tracking-wider text-white/70"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl glass-strong hairline-strong p-8 md:p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.6, delay: 0.2 }}
                  className="h-16 w-16 mx-auto rounded-full bg-gradient-to-br from-cyan to-violet flex items-center justify-center mb-6"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M5 12l5 5L20 7"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
                  Message received.
                </h3>
                <p className="text-white/60 max-w-md mx-auto mb-6">
                  Thanks for reaching out. A member of our team will get back to
                  you within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="/"
                    className="inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium rounded-xl btn-primary"
                  >
                    Back to home
                  </a>
                  <a
                    href="/portal"
                    className="inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium rounded-xl btn-secondary"
                  >
                    Access customer portal
                  </a>
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl glass-strong hairline-strong p-6 md:p-8 lg:p-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <div>
                    <label className="block font-mono text-[10px] tracking-widest text-white/50 mb-2">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="input-glow w-full h-11 px-4 rounded-xl bg-white/5 hairline text-sm text-white placeholder-white/30 focus:outline-none transition-all"
                      placeholder="Jane Smith"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] tracking-widest text-white/50 mb-2">
                      WORK EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="input-glow w-full h-11 px-4 rounded-xl bg-white/5 hairline text-sm text-white placeholder-white/30 focus:outline-none transition-all"
                      placeholder="jane@company.com"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] tracking-widest text-white/50 mb-2">
                      COMPANY *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.company}
                      onChange={(e) => update("company", e.target.value)}
                      className="input-glow w-full h-11 px-4 rounded-xl bg-white/5 hairline text-sm text-white placeholder-white/30 focus:outline-none transition-all"
                      placeholder="Acme Corp"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] tracking-widest text-white/50 mb-2">
                      YOUR ROLE
                    </label>
                    <input
                      type="text"
                      value={form.role}
                      onChange={(e) => update("role", e.target.value)}
                      className="input-glow w-full h-11 px-4 rounded-xl bg-white/5 hairline text-sm text-white placeholder-white/30 focus:outline-none transition-all"
                      placeholder="CTO / Head of AI"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block font-mono text-[10px] tracking-widest text-white/50 mb-2">
                      COMPANY SIZE
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {companySizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => update("size", size)}
                          className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wide transition-all ${
                            form.size === size
                              ? "bg-cyan/20 text-cyan border border-cyan/40"
                              : "bg-white/5 text-white/60 border border-white/10 hover:border-white/20"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block font-mono text-[10px] tracking-widest text-white/50 mb-2">
                      WHAT ARE YOU INTERESTED IN? *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {interests.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => update("interest", item)}
                          className={`px-4 py-3 rounded-xl text-xs md:text-sm text-left transition-all ${
                            form.interest === item
                              ? "bg-cyan/20 text-cyan border border-cyan/40"
                              : "bg-white/5 text-white/70 border border-white/10 hover:border-white/20"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block font-mono text-[10px] tracking-widest text-white/50 mb-2">
                      TELL US ABOUT YOUR CHALLENGE
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      rows={4}
                      className="input-glow w-full px-4 py-3 rounded-xl bg-white/5 hairline text-sm text-white placeholder-white/30 focus:outline-none transition-all resize-none"
                      placeholder="What problem are you trying to solve with AI?"
                    />
                  </div>
                </div>

                <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="text-[11px] text-white/40 max-w-xs">
                    By submitting, you agree to our privacy policy. We'll never
                    share your data.
                  </p>
                  <button
                    type="submit"
                    className="group relative inline-flex items-center justify-center gap-2 h-12 px-8 text-sm font-medium tracking-tight rounded-xl btn-primary w-full sm:w-auto"
                  >
                    <span className="flex items-center gap-2">
                      Send message
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path
                          d="M5 12h14M13 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}