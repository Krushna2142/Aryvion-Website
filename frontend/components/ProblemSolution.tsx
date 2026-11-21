"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "./ui/SectionLabel";

const problems = [
  {
    title: "Chatbots don't run businesses.",
    description:
      "Generative AI answers questions. It doesn't operate systems, make decisions, or own outcomes.",
  },
  {
    title: "Agents without coordination are chaos.",
    description:
      "A dozen disconnected LLM calls aren't intelligence — they're fragile scripts with extra steps.",
  },
  {
    title: "Enterprises need leverage, not demos.",
    description:
      "The gap between a working prototype and a production AI system is where most companies stall.",
  },
];

const solutions = [
  {
    title: "Systems that act, not just respond.",
    description:
      "Aryvion agents execute workflows end-to-end — calling tools, writing to databases, triggering actions.",
  },
  {
    title: "Orchestrated multi-agent meshes.",
    description:
      "Specialized agents collaborate through shared memory, defined roles, and deterministic handoffs.",
  },
  {
    title: "Production-grade from day one.",
    description:
      "Observability, guardrails, audit trails, and SLAs — engineered for regulated enterprise workloads.",
  },
];

export function ProblemSolution() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineProgress = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-20">
          <SectionLabel number="02" label="The Shift" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="mt-6 text-4xl md:text-6xl font-semibold tracking-tightest leading-[1.05]"
          >
            From{" "}
            <span className="text-white/40 line-through decoration-white/30">
              AI that talks
            </span>
            <br />
            to <span className="gradient-text">AI that operates.</span>
          </motion.h2>
        </div>

        {/* Two-column timeline */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2">
            <motion.div
              style={{ height: lineProgress }}
              className="w-full bg-gradient-to-b from-cyan via-violet to-transparent"
            />
          </div>

          {/* Problems */}
          <div className="space-y-10">
            <div className="hidden lg:flex items-center gap-3 mb-8">
              <span className="font-mono text-[11px] tracking-[0.3em] text-white/40">
                THE OLD WORLD
              </span>
              <span className="h-px flex-1 bg-white/10" />
            </div>
            {problems.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-8 lg:pl-0 lg:pr-12"
              >
                {/* Dot */}
                <div className="hidden lg:block absolute top-2 -right-[1px] h-3 w-3 rounded-full bg-ink-950 border border-white/30 -translate-x-1/2" />
                <div className="font-mono text-xs text-white/30 mb-3">
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-white/90 mb-3">
                  {p.title}
                </h3>
                <p className="text-white/55 leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-10">
            <div className="hidden lg:flex items-center gap-3 mb-8">
              <span className="font-mono text-[11px] tracking-[0.3em] text-cyan/80">
                THE ARYVION WAY
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-cyan/40 to-transparent" />
            </div>
            {solutions.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-8 lg:pl-12"
              >
                {/* Dot */}
                <div className="hidden lg:block absolute top-2 -left-[1px] h-3 w-3 rounded-full bg-cyan glow-cyan -translate-x-1/2" />
                <div className="font-mono text-xs text-cyan/70 mb-3">
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-semibold tracking-tight mb-3">
                  {s.title}
                </h3>
                <p className="text-white/65 leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}