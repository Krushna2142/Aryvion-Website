import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  body,
  center,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={cn("mb-12 md:mb-16 max-w-3xl", center && "mx-auto text-center")}>
      <p className="text-sm font-medium text-cyan">{eyebrow}</p>
      <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tightest leading-[1.08]">
        {title}
      </h2>
      {body && (
        <p className="mt-5 text-base md:text-lg text-white/65 leading-relaxed">{body}</p>
      )}
    </Reveal>
  );
}
