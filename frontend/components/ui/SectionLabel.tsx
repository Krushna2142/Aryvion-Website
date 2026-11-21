"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  number: string;
  label: string;
  className?: string;
}

export function SectionLabel({ number, label, className }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={cn("flex items-center gap-3", className)}
    >
      <span className="font-mono text-xs tracking-widest text-cyan/80">
        {number}
      </span>
      <span className="h-px w-8 bg-gradient-to-r from-cyan/60 to-transparent" />
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
        {label}
      </span>
    </motion.div>
  );
}