import { SectionHeader } from "./ui/SectionHeader";
import { SpotlightCard } from "./ui/SpotlightCard";
import { Reveal } from "./ui/Reveal";

// NOTE: verify the `stack` arrays below match what you actually use.
const products = [
  {
    name: "HireX",
    tagline: "Recruitment intelligence",
    body: "AI that sources, screens and ranks candidates, with voice-based interviews and skill matching.",
    stack: ["Python", "LLMs", "Speech AI", "PostgreSQL"],
    status: "Live",
  },
  {
    name: "Aryvion AI",
    tagline: "Multi-agent platform",
    body: "A runtime for deploying and monitoring teams of specialised AI agents on business workflows.",
    stack: ["Python", "LangChain", "Vector DB", "FastAPI"],
    status: "Live",
  },
  {
    name: "Farm-to-Globe",
    tagline: "Agriculture intelligence",
    body: "Crop, yield and supply-chain insights that connect farm data to the market.",
    stack: ["Python", "Remote sensing", "ML", "Next.js"],
    status: "Beta",
  },
];

export function Products() {
  return (
    <section id="products" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeader
          eyebrow="Products & innovation"
          title="Systems we build and run ourselves."
          body="Our own products keep our engineering sharp, and they are the foundation for client work."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <SpotlightCard className="h-full p-6 md:p-8">
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
                      <p className="text-sm text-white/60">{p.tagline}</p>
                    </div>
                    <span className="rounded-md border border-cyan/30 bg-cyan/10 px-2 py-0.5 text-xs text-cyan">
                      {p.status}
                    </span>
                  </div>
                  <p className="mt-5 flex-1 text-white/70 leading-relaxed">{p.body}</p>
                  <ul className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                    {p.stack.map((t) => (
                      <li key={t} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-white/70">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
