"use client";

import { motion } from "framer-motion";

export function WhatIsAryvion() {
  return (
    <section id="what-is-aryvion" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-cyan/5 to-ink-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-cyan/10 via-violet/10 to-transparent blur-3xl opacity-40" />
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass hairline mb-8"
          >
            <span className="h-2 w-2 rounded-full bg-cyan animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-white/70">
              THE MEANING
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tightest leading-[1.05] mb-8"
          >
            <span className="text-white">What is </span>
            <span className="gradient-text">Aryvion?</span>
          </motion.h2>

          {/* Etymology section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel rounded-3xl p-8 md:p-12 mb-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Ary */}
              <div className="text-center md:text-left">
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-3">
                  Ary
                </div>
                <div className="text-sm text-white/50 font-mono mb-4">Sanskrit Origin</div>
                <p className="text-white/80 leading-relaxed text-lg">
                  "Noble" · "Exalted" · "One who strives for excellence"<br />
                  <span className="text-white/40 text-base">Representing noble intelligence and elevated thinking</span>
                </p>
              </div>

              {/* Vion */}
              <div className="text-center md:text-left">
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-3">
                  Vion
                </div>
                <div className="text-sm text-white/50 font-mono mb-4">Modern Fusion</div>
                <p className="text-white/80 leading-relaxed text-lg">
                  "Vision" · "Ion" (energy) · "Connection"<br />
                  <span className="text-white/40 text-base">Energetic vision that connects and powers systems</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Definition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-10"
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed font-light">
              <span className="text-white/40">Aryvion = </span>
              <span className="gradient-text font-medium">Noble Intelligence</span>
              <span className="text-white/40"> + </span>
              <span className="gradient-text font-medium">Energetic Vision</span>
            </p>
          </motion.div>

          {/* Mission statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card rounded-2xl p-6 md:p-8"
          >
            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
              <span className="text-white font-semibold">Aryvion</span> embodies the fusion of 
              <span className="text-cyan"> noble purpose</span> and 
              <span className="text-violet"> transformative energy</span> — 
              building AI systems that don't just compute, but elevate human potential 
              through intelligent automation that acts with precision, wisdom, and purpose.
            </p>
          </motion.div>

          {/* Core principles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {[
              {
                icon: "✦",
                title: "Noble Intelligence",
                desc: "AI that serves humanity's highest potential",
              },
              {
                icon: "◈",
                title: "Energetic Action",
                desc: "Systems that execute, not just respond",
              },
              {
                icon: "◉",
                title: "Visionary Connection",
                desc: "Bridging human intent with machine precision",
              },
            ].map((principle, i) => (
              <div
                key={i}
                className="glass-card-hover rounded-xl p-6 text-center group"
              >
                <div className="text-3xl mb-3 text-cyan group-hover:scale-110 transition-transform duration-300">
                  {principle.icon}
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">
                  {principle.title}
                </h3>
                <p className="text-xs text-white/50 leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}