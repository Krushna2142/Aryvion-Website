"use client";

import { motion } from "framer-motion";

export function Founder() {
  return (
    <section id="founder" className="relative py-20 md:py-24 overflow-hidden">
      {/* Minimal background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-violet/10 blur-3xl opacity-30 pointer-events-none" />
      
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="font-mono text-xs tracking-widest text-cyan/80">
            05
          </span>
          <span className="h-px w-8 bg-gradient-to-r from-cyan/60 to-transparent" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
            Founder's Note
          </span>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <p className="relative text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight leading-tight text-white/90">
            We are not building software.{" "}
            <span className="text-white/50">We are building</span>{" "}
            <span className="gradient-text">leverage</span>{" "}
            <span className="text-white/50">
              for people who were never given leverage.
            </span>
          </p>

          <footer className="mt-6 sm:mt-8 flex items-center gap-4">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden hairline-strong shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan via-violet to-ink-900" />
              <div className="absolute inset-[2px] rounded-full bg-ink-900 flex items-center justify-center">
                <span className="text-base sm:text-lg font-semibold gradient-text">
                  A
                </span>
              </div>
            </div>
            <div>
              <div className="font-semibold tracking-tight text-sm sm:text-base">
                The Founder
              </div>
              <div className="text-xs sm:text-sm text-white/50 font-mono">
                Aryvion · Building since 2024
              </div>
            </div>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}