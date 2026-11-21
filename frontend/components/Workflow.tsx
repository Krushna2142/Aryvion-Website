"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./ui/SectionLabel";
import { Glow } from "./ui/Glow";

const steps = [
  {
    id: "input",
    label: "Data Input",
    description: "Structured & unstructured signals from any source.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M4 6h16M4 12h16M4 18h10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "agents",
    label: "AI Agents",
    description: "Specialized agents activate in parallel.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="5" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="19" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="5" cy="19" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="19" cy="19" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "reasoning",
    label: "Reasoning",
    description: "Chain-of-thought, tool-use, and verification.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M9 3a3 3 0 00-3 3v1a3 3 0 00-3 3v1a3 3 0 002 2.8V16a3 3 0 003 3h1v2h6v-2h1a3 3 0 003-3v-2.2a3 3 0 002-2.8v-1a3 3 0 00-3-3V6a3 3 0 00-3-3H9z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    id: "decision",
    label: "Decision",
    description: "Guardrails validate; humans approve when needed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M9 12l2 2 4-4M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "action",
    label: "Action",
    description: "Systems execute. Outcomes are logged and learned.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function Workflow() {
  return (
    <section id="workflow" className="relative py-32 overflow-hidden">
      <Glow color="violet" size="xl" className="top-0 right-0 opacity-30" />
      <Glow color="cyan" size="lg" className="bottom-0 left-0 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-20">
          <SectionLabel number="03" label="How It Works" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="mt-6 text-4xl md:text-6xl font-semibold tracking-tightest leading-[1.05]"
          >
            A workflow that thinks,
            <br />
            <span className="text-white/40">decides, and acts.</span>
          </motion.h2>
        </div>

        {/* Workflow visualization */}
        <div className="relative">
          {/* Animated connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-cyan to-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative"
              >
                <div className="group relative rounded-2xl glass hairline p-6 hover:border-cyan/30 transition-all duration-500 hover:-translate-y-1">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan/20 to-violet/20 border border-white/10 flex items-center justify-center text-cyan group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <span className="font-mono text-xs text-white/30">
                      STEP {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold tracking-tight mb-2">
                    {step.label}
                  </h3>
                  <p className="text-sm text-white/55 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Pulse indicator */}
                  <div className="mt-5 flex items-center gap-2">
                    <span className="relative flex h-1.5 w-1.5">
                      <span
                        className="absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75 animate-ping"
                        style={{ animationDelay: `${i * 0.3}s` }}
                      />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
                    </span>
                    <span className="font-mono text-[10px] tracking-widest text-white/40">
                      ACTIVE
                    </span>
                  </div>
                </div>

                {/* Arrow between cards (mobile) */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-2 text-white/20">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 5v14M5 12l7 7 7-7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}