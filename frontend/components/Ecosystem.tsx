"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  accent: "cyan" | "violet" | "emerald" | "amber";
  status: string;
}

const products: Product[] = [
  {
    id: "hirex",
    number: "01",
    name: "HireX",
    tagline: "Recruitment Intelligence",
    description:
      "End-to-end AI recruitment that sources, screens, interviews, and ranks candidates with human-level judgment — at machine speed.",
    features: [
      "Autonomous candidate sourcing",
      "Voice-first AI interviews",
      "Skill-graph matching",
      "Bias mitigation layer",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="9" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M3 20c0-3.3 2.7-6 6-6 1.3 0 2.5.4 3.5 1.1M14 20c0-2.2 1.3-4 3-4s3 1.8 3 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    accent: "cyan",
    status: "GA",
  },
  {
    id: "aryvion-ai",
    number: "02",
    name: "Aryvion AI",
    tagline: "Multi-Agent Orchestration",
    description:
      "A runtime for deploying, coordinating, and observing swarms of specialized AI agents that collaborate to solve complex enterprise workflows.",
    features: [
      "Agent mesh topology",
      "Shared memory & context",
      "Tool-use orchestration",
      "Real-time observability",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="5" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="19" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="5" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="19" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M7 7l3 3M17 7l-3 3M7 17l3-3M17 17l-3-3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    accent: "violet",
    status: "GA",
  },
  {
    id: "farm-to-globe",
    number: "03",
    name: "Farm-to-Globe",
    tagline: "Agriculture Intelligence",
    description:
      "Satellite, IoT, and market-signal fusion that turns every acre into a data-rich decision engine — from seed to global supply chain.",
    features: [
      "Satellite crop analysis",
      "Yield prediction models",
      "Supply chain routing",
      "Climate risk scoring",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M12 2C8 6 6 10 6 14a6 6 0 0012 0c0-4-2-8-6-12z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M12 8v10M9 12h6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    accent: "emerald",
    status: "BETA",
  },
  {
    id: "enterprise",
    number: "04",
    name: "Enterprise Services",
    tagline: "Custom AI Automation",
    description:
      "Bespoke AI systems engineered into your operations — from document intelligence to autonomous back-office workflows.",
    features: [
      "Process mining & automation",
      "Private LLM deployment",
      "Domain-specific fine-tuning",
      "SOC 2 & ISO 27001",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 9h18M8 14h3M8 17h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: "amber",
    status: "GA",
  },
];

const accentColors = {
  cyan: {
    border: "group-hover:border-cyan/40",
    glow: "from-cyan/30 to-transparent",
    text: "text-cyan",
    bg: "bg-cyan",
    chip: "bg-cyan/10 text-cyan border-cyan/20",
  },
  violet: {
    border: "group-hover:border-violet/40",
    glow: "from-violet/30 to-transparent",
    text: "text-violet",
    bg: "bg-violet",
    chip: "bg-violet/10 text-violet border-violet/20",
  },
  emerald: {
    border: "group-hover:border-emerald-400/40",
    glow: "from-emerald-400/30 to-transparent",
    text: "text-emerald-400",
    bg: "bg-emerald-400",
    chip: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
  },
  amber: {
    border: "group-hover:border-amber-400/40",
    glow: "from-amber-400/30 to-transparent",
    text: "text-amber-400",
    bg: "bg-amber-400",
    chip: "bg-amber-400/10 text-amber-400 border-amber-400/20",
  },
};

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-cyan/10 via-violet/10 to-transparent blur-3xl opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="font-mono text-xs tracking-widest text-cyan/80">
              01
            </span>
            <span className="h-px w-8 bg-gradient-to-r from-cyan/60 to-transparent" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
              The Ecosystem
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="mt-6 text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tightest leading-[1.05]"
          >
            One platform.{" "}
            <span className="text-white/40">Four intelligent systems.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-base md:text-lg text-white/60 leading-relaxed max-w-2xl"
          >
            Each product is a specialized AI system — together, they form an
            operating layer for the intelligent enterprise.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {products.map((product, i) => {
            const colors = accentColors[product.accent];
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={cn(
                  "group relative rounded-2xl glass-card-hover p-6 md:p-8 overflow-hidden cursor-pointer",
                  colors.border
                )}
              >
                <div
                  className={cn(
                    "absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none",
                    colors.glow
                  )}
                />

                <div className="relative flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "h-12 w-12 rounded-xl glass-strong flex items-center justify-center shrink-0",
                        colors.text
                      )}
                    >
                      {product.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg md:text-xl font-semibold tracking-tight">
                          {product.name}
                        </h3>
                        <span
                          className={cn(
                            "px-1.5 py-0.5 rounded text-[9px] font-mono tracking-widest border shrink-0",
                            colors.chip
                          )}
                        >
                          {product.status}
                        </span>
                      </div>
                      <p className="text-sm text-white/50 mt-0.5">
                        {product.tagline}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-white/30 shrink-0 ml-2">
                    {product.number}
                  </span>
                </div>

                <p className="relative text-white/70 leading-relaxed mb-6 text-sm md:text-base">
                  {product.description}
                </p>

                <ul className="relative grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {product.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-xs md:text-sm text-white/60"
                    >
                      <span
                        className={cn(
                          "h-1 w-1 rounded-full shrink-0",
                          colors.bg
                        )}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="relative flex items-center justify-between pt-5 border-t border-white/5">
                  <span className="font-mono text-[10px] md:text-xs text-white/40 tracking-widest">
                    LEARN MORE
                  </span>
                  <div className={cn(colors.text, "transition-transform duration-300 group-hover:translate-x-1")}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14M13 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}