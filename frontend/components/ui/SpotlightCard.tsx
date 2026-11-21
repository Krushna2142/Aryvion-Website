"use client";
import { cn } from "@/lib/utils";

// Card with a cursor-following glow. Pure CSS vars, no re-renders.
export function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div
      onMouseMove={onMove}
      className={cn("spotlight-card relative overflow-hidden rounded-2xl glass-card-hover", className)}
    >
      {children}
    </div>
  );
}
