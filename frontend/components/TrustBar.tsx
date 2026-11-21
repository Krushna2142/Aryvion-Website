"use client";

import { motion } from "framer-motion";

const companies = [
  "NORTHWIND",
  "ACME CORP",
  "VERTEX",
  "HELIOS",
  "QUANTUM",
  "OBSIDIAN",
  "MERIDIAN",
  "ATLAS",
];

export function TrustBar() {
  return (
    <section className="relative py-16 border-y border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-mono text-[11px] tracking-[0.3em] text-white/40 mb-10"
        >
          TRUSTED BY ENGINEERING TEAMS AT
        </motion.p>

        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex marquee-track gap-16 whitespace-nowrap">
            {[...companies, ...companies].map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-white/40 hover:text-white/80 transition-colors"
              >
                <div className="h-6 w-6 rounded-md bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-sm bg-white/60" />
                </div>
                <span className="text-sm font-semibold tracking-[0.15em]">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}