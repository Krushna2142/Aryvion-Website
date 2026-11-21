"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CinematicBg } from "./CinematicBg";
import { NeuralCanvas } from "./NeuralCanvas";

const stack = [
  "Python", "TypeScript", "Next.js", "React Native", "Node.js",
  "LangChain", "PyTorch", "PostgreSQL", "AWS", "Docker",
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-32 sm:pt-40 pb-16">
      <CinematicBg />
      <div className="absolute inset-0 opacity-70"><NeuralCanvas /></div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass hairline px-4 py-1.5 text-sm text-white/80"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
          AI and software engineering company
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-semibold tracking-tightest leading-[1.02]"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
        >
          Intelligent software,
          <br />
          <span className="gradient-text">built to run your business.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed"
        >
          Aryvion designs and ships AI systems, web and mobile apps, and cloud
          platforms for startups, enterprises and engineering students.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/#services"
            className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-xl px-8 text-sm font-medium btn-primary"
          >
            Explore solutions
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-xl px-8 text-sm font-medium btn-secondary"
          >
            Start a project
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-16"
        >
          <p className="text-sm text-white/55">Technologies we build with</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {stack.map((t) => (
              <li key={t} className="rounded-lg glass hairline px-3 py-1.5 text-xs text-white/75">
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
