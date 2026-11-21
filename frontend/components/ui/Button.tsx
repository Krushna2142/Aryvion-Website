"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  glow?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", glow = false, className, children, ...props }, ref) => {
    const base =
      "relative inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-all duration-300 overflow-hidden group";

    const sizes = {
      sm: "h-9 px-4 text-sm rounded-lg",
      md: "h-11 px-6 text-sm rounded-xl",
      lg: "h-14 px-8 text-base rounded-2xl",
    };

    const variants = {
      primary:
        "bg-white text-ink-950 hover:bg-white/90 hairline-strong",
      secondary:
        "bg-white/5 text-white hover:bg-white/10 hairline",
      ghost:
        "bg-transparent text-white/70 hover:text-white hover:bg-white/5",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -1 }}
        whileTap={{ y: 0, scale: 0.98 }}
        className={cn(base, sizes[size], variants[variant], className)}
        {...props}
      >
        {glow && variant === "primary" && (
          <span
            className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(34,211,238,0.4), transparent 70%)",
              filter: "blur(20px)",
            }}
          />
        )}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";