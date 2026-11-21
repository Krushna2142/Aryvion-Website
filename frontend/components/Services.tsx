import { SectionHeader } from "./ui/SectionHeader";
import { SpotlightCard } from "./ui/SpotlightCard";
import { Reveal } from "./ui/Reveal";

const services = [
  { title: "AI & Machine Learning", body: "Models, pipelines and LLM features that solve a measurable problem.", d: "M12 3v3m0 12v3M3 12h3m12 0h3M7 7l2 2m6 6l2 2M17 7l-2 2M9 15l-2 2M12 9a3 3 0 100 6 3 3 0 000-6z" },
  { title: "Custom Software Development", body: "Tailored platforms and internal tools built around how you work.", d: "M8 8l-4 4 4 4m8-8l4 4-4 4M14 5l-4 14" },
  { title: "Web & Mobile Applications", body: "Fast, accessible web apps and cross-platform mobile apps.", d: "M7 3h10a1 1 0 011 1v16a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1zm5 15h.01" },
  { title: "AI Automation & Agents", body: "Agents that handle repetitive work across your tools and data.", d: "M5 8h14v10H5zM12 4v4M9 13h.01M15 13h.01M3 12v2m18-2v2" },
  { title: "Business Intelligence", body: "Dashboards and data models that turn raw data into decisions.", d: "M4 20V10m6 10V4m6 16v-7m4 7H2" },
  { title: "UI/UX Design", body: "Research-led interfaces, design systems and clickable prototypes.", d: "M4 20l4-1 11-11-3-3L5 16l-1 4zM14 6l3 3" },
  { title: "Cloud & Backend Solutions", body: "APIs, databases and deployments that scale and stay secure.", d: "M7 18a4 4 0 010-8 5 5 0 019.6-1A4.5 4.5 0 0117 18H7z" },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeader
          eyebrow="Services"
          title="Everything from the first prototype to production."
          body="One team across strategy, design, engineering and deployment."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.07}>
              <SpotlightCard className="h-full p-6 md:p-7">
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl glass-strong text-cyan">
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
                      <path d={s.d} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-sm md:text-base text-white/65 leading-relaxed">{s.body}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
