"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Cpu, ShieldCheck, Workflow, BarChart3 } from "lucide-react";

const dashboardItems = [
  { icon: Cpu, label: "AI Intelligence" },
  { icon: ShieldCheck, label: "Secure Dashboards" },
  { icon: Workflow, label: "Workflow Automation" },
  { icon: BarChart3, label: "Data Intelligence" },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient pt-16">
      {/* Abstract background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">AI‑Powered Products</span>
            <br />
            <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
              & Intelligent Business Systems
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-xl">
            We help businesses build AI‑powered dashboards, automation workflows, SaaS platforms, and secure digital systems faster.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-brand-cyan to-brand-purple text-white rounded-full font-medium hover:shadow-glow-cyan transition-shadow"
            >
              Book a Discussion
            </Link>
            <Link
              href="#services"
              className="px-6 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition"
            >
              Explore Services
            </Link>
            <Link
              href="#products"
              className="px-6 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition"
            >
              View Products
            </Link>
          </div>
        </motion.div>

        {/* Right: Dashboard-style visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="hidden lg:block glass p-6 backdrop-blur-md"
        >
          <div className="grid grid-cols-2 gap-4">
            {dashboardItems.map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center text-center hover:border-brand-cyan/30 transition-colors"
              >
                <item.icon className="w-8 h-8 text-brand-cyan mb-3" />
                <span className="text-sm text-gray-200 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-white/10">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Aryvion Technologies</span>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}