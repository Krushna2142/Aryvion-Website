import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";

const pillars = [
  {
    title: "Mission",
    body: "Give every team, from a student with an idea to a growing company, access to engineering that was once reserved for large organisations.",
  },
  {
    title: "Vision",
    body: "A world where intelligent software is part of everyday operations, not a separate experiment.",
  },
  {
    title: "Approach",
    body: "We start from the problem, prototype quickly, and ship production-grade systems with clean code, documentation and handover.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeader
          eyebrow="About Aryvion"
          title="A technology company focused on applied AI."
          body="Aryvion Technologies builds AI products and custom software. We work with startups and businesses on real systems, and we mentor students through their final-year projects."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl glass-card p-6 md:p-8">
                <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-white/65 leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
