"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./ui/SectionLabel";

const reasons = [
  {
    title: "Built for production",
    description:
      "Every system ships with observability, guardrails, and audit logs. Not prototypes — production infrastructure.",
    metric: "99.98%",
    metricLabel: "Uptime SLA",
  },
  {
    title: "Multi-agent by design",
    description:
      "Specialized agents collaborate through shared memory and deterministic orchestration — not chained prompts.",
    metric: "180+",
    metricLabel: "Agents deployed",
  },
  {
    title: "Domain-native intelligence",
    description:
      "We don't wrap LLMs. We build domain-specific reasoning layers tuned to recruitment, agriculture, and operations.",
    metric: "42ms",
    metricLabel: "Avg. latency",
  },
  {
    title: "Enterprise-grade trust",
    description:
      "SOC 2 Type II, ISO 27001, GDPR-ready. Private deployments, data residency, and zero-retention options.",
    metric: "SOC 2",
    metricLabel: "Type II certified",
  },
  {
    title: "Leverage, not labor",
    description:
      "Our systems amplify the people who use them. Every workflow we automate frees teams to build what matters.",
    metric: "14×",
    metricLabel: "Avg. productivity lift",
  },
  {
    title: "A team that ships",
    description:
      "Founders, researchers, and operators who've built at scale. We ship weekly, not quarterly.",
    metric: "Weekly",
    metricLabel: "Release cadence",
  },
];

export function WhyAryvion() {
  return (
    <section id="why" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <SectionLabel number="04" label="Why Aryvion" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="mt-6 text-4xl md:text-6xl font-semibold tracking-tightest leading-[1.05]"
            >
              The difference is{" "}
              <span className="gradient-text">in the engineering.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:max-w-md text-white/60 leading-relaxed"
          >
            Six principles that separate an AI system from an AI toy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative rounded-2xl glass hairline p-7 hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br from-cyan/10 to-violet/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="font-mono text-xs text-white/30">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-semibold tracking-tight gradient-text">
                      {r.metric}
                    </div>
                    <div className="font-mono text-[10px] tracking-widest text-white/40 mt-0.5">
                      {r.metricLabel.toUpperCase()}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-cyan transition-colors">
                  {r.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {r.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}