"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Glow } from "@/components/ui/Glow";

export function Demo() {
  return (
    <section id="demo" className="relative py-32 overflow-hidden">
      <Glow color="cyan" size="xl" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel number="05" label="Live Preview" className="justify-center" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="mt-6 text-4xl md:text-6xl font-semibold tracking-tightest leading-[1.05]"
          >
            The command center for
            <br />
            <span className="gradient-text">intelligent operations.</span>
          </motion.h2>
        </div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Glow behind */}
          <div className="absolute -inset-10 bg-gradient-to-br from-cyan/20 via-violet/10 to-transparent blur-3xl opacity-60" />

          <div className="relative rounded-3xl glass-strong hairline-strong overflow-hidden shadow-2xl shadow-cyan/5">
            {/* Window chrome */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/5 bg-ink-900/50">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-white/10" />
                <div className="h-3 w-3 rounded-full bg-white/10" />
                <div className="h-3 w-3 rounded-full bg-white/10" />
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 font-mono text-[11px] text-white/50">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2l8 4v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-4z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                app.aryvion.ai/orchestration
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-400/10 border border-emerald-400/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[10px] tracking-widest text-emerald-400">
                    LIVE
                  </span>
                </span>
              </div>
            </div>

            {/* Dashboard body */}
            <div className="grid grid-cols-12 gap-0 min-h-[560px]">
              {/* Sidebar */}
              <aside className="col-span-12 md:col-span-2 border-r border-white/5 p-4 bg-ink-900/30">
                <div className="flex items-center gap-2 mb-6 px-2">
                  <div className="h-6 w-6 rounded-md bg-gradient-to-br from-cyan to-violet" />
                  <span className="text-sm font-semibold">Aryvion</span>
                </div>
                <nav className="space-y-1">
                  {[
                    { label: "Overview", active: true },
                    { label: "Agents" },
                    { label: "Workflows" },
                    { label: "Memory" },
                    { label: "Logs" },
                    { label: "Settings" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`px-3 py-2 rounded-lg text-xs transition-colors ${
                        item.active
                          ? "bg-white/5 text-white"
                          : "text-white/50 hover:text-white/80"
                      }`}
                    >
                      {item.label}
                    </div>
                  ))}
                </nav>
              </aside>

              {/* Main */}
              <main className="col-span-12 md:col-span-10 p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="font-mono text-[10px] tracking-widest text-white/40 mb-1">
                      ORCHESTRATION · LIVE
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      Q4 Recruitment Pipeline
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-white/5 hairline font-mono text-xs text-white/70">
                      12 agents active
                    </span>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {[
                    { label: "Candidates sourced", value: "2,847", change: "+12%" },
                    { label: "Interviews completed", value: "412", change: "+8%" },
                    { label: "Offers extended", value: "38", change: "+24%" },
                    { label: "Avg. time-to-hire", value: "9.2d", change: "-31%" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-white/[0.02] hairline p-4"
                    >
                      <div className="font-mono text-[10px] tracking-widest text-white/40 mb-2">
                        {s.label.toUpperCase()}
                      </div>
                      <div className="text-2xl font-semibold tracking-tight">
                        {s.value}
                      </div>
                      <div className="mt-1 text-xs text-emerald-400 font-mono">
                        {s.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart + agents */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {/* Chart */}
                  <div className="lg:col-span-2 rounded-xl bg-white/[0.02] hairline p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm font-medium">
                        Agent throughput · 24h
                      </div>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-cyan" />
                          Sourcing
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-violet" />
                          Screening
                        </span>
                      </div>
                    </div>
                    <div className="relative h-40">
                      <svg
                        viewBox="0 0 400 160"
                        className="w-full h-full"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
                          </linearGradient>
                          <linearGradient id="g2" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {/* Grid lines */}
                        {[0, 40, 80, 120, 160].map((y) => (
                          <line
                            key={y}
                            x1="0"
                            y1={y}
                            x2="400"
                            y2={y}
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                          />
                        ))}
                        {/* Area 1 */}
                        <path
                          d="M0,120 C50,100 80,60 120,70 C160,80 200,40 240,50 C280,60 320,30 360,40 L400,35 L400,160 L0,160 Z"
                          fill="url(#g1)"
                        />
                        <path
                          d="M0,120 C50,100 80,60 120,70 C160,80 200,40 240,50 C280,60 320,30 360,40 L400,35"
                          stroke="#22D3EE"
                          strokeWidth="2"
                          fill="none"
                        />
                        {/* Area 2 */}
                        <path
                          d="M0,140 C50,130 100,110 150,115 C200,120 250,90 300,100 C350,110 380,80 400,85 L400,160 L0,160 Z"
                          fill="url(#g2)"
                        />
                        <path
                          d="M0,140 C50,130 100,110 150,115 C200,120 250,90 300,100 C350,110 380,80 400,85"
                          stroke="#8B5CF6"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Active agents */}
                  <div className="rounded-xl bg-white/[0.02] hairline p-5">
                    <div className="text-sm font-medium mb-4">
                      Active agents
                    </div>
                    <div className="space-y-3">
                      {[
                        { name: "sourcer-01", status: "processing", load: 72 },
                        { name: "screener-03", status: "idle", load: 12 },
                        { name: "interviewer-07", status: "live", load: 94 },
                        { name: "ranker-02", status: "processing", load: 58 },
                      ].map((a, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <span
                            className={`h-2 w-2 rounded-full ${
                              a.status === "live"
                                ? "bg-cyan animate-pulse"
                                : a.status === "processing"
                                ? "bg-violet"
                                : "bg-white/30"
                            }`}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="font-mono text-xs truncate">
                              {a.name}
                            </div>
                            <div className="mt-1 h-1 rounded-full bg-white/5 overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-cyan to-violet"
                                style={{ width: `${a.load}%` }}
                              />
                            </div>
                          </div>
                          <span className="font-mono text-[10px] text-white/40">
                            {a.load}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Log stream */}
                <div className="mt-4 rounded-xl bg-ink-950/60 hairline p-4 font-mono text-xs">
                  <div className="flex items-center gap-2 mb-3 text-white/40">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                    <span className="tracking-widest">LIVE STREAM</span>
                  </div>
                  <div className="space-y-1.5 text-white/70">
                    <div>
                      <span className="text-white/30">14:23:01</span>{" "}
                      <span className="text-cyan">[sourcer-01]</span> ingested
                      47 profiles from linkedin::eng::berlin
                    </div>
                    <div>
                      <span className="text-white/30">14:23:04</span>{" "}
                      <span className="text-violet">[screener-03]</span>{" "}
                      ranked 12 candidates · confidence 0.94
                    </div>
                    <div>
                      <span className="text-white/30">14:23:07</span>{" "}
                      <span className="text-cyan">[interviewer-07]</span>{" "}
                      completed voice interview · duration 22m
                    </div>
                    <div>
                      <span className="text-white/30">14:23:09</span>{" "}
                      <span className="text-violet">[ranker-02]</span> updated
                      pipeline · 3 moved to final round
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}