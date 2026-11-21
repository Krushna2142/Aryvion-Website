import Link from "next/link";
import { Reveal } from "./ui/Reveal";

export function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan/10 to-violet/10 blur-3xl pointer-events-none" aria-hidden />
      <Reveal className="relative mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tightest leading-tight">
          Have a project in mind?
        </h2>
        <p className="mt-5 text-white/65 max-w-xl mx-auto">
          Tell us what you want to build. We will reply within one working day with next steps.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-xl px-8 text-sm font-medium btn-primary">
            Start a project
          </Link>
          <Link href="/#services" className="inline-flex h-12 items-center justify-center rounded-xl px-8 text-sm font-medium btn-secondary">
            Explore solutions
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
