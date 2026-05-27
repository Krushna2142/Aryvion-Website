"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlowCard({ children, className = "", hover = true }: GlowCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      className={`glass glass-hover p-6 ${className} ${
        hover ? "hover:shadow-glow-cyan" : ""
      } transition-shadow`}
    >
      {children}
    </motion.div>
  );
}