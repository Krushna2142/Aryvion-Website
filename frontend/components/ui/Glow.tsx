import { cn } from "@/lib/utils";

interface GlowProps {
  className?: string;
  color?: "cyan" | "violet" | "mixed";
  size?: "sm" | "md" | "lg" | "xl";
}

const sizes = {
  sm: "h-40 w-40",
  md: "h-80 w-80",
  lg: "h-[500px] w-[500px]",
  xl: "h-[800px] w-[800px]",
};

const colors = {
  cyan: "bg-cyan/20",
  violet: "bg-violet/20",
  mixed: "bg-gradient-to-br from-cyan/20 via-violet/15 to-transparent",
};

export function Glow({ className, color = "cyan", size = "lg" }: GlowProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        sizes[size],
        colors[color],
        className
      )}
      aria-hidden="true"
    />
  );
}