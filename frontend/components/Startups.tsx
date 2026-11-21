import Link from "next/link";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";

const items = [
  { title: "Digital transformation", body: "Replace spreadsheets and manual steps with connected systems." },
  { title: "Custom software", body: "Products and internal tools designed around your process." },
  { title: "AI integration", body: "Add search, summarisation, prediction or assistants to what you already run." },
  { title: "Business automation", body: "Automate approvals, reporting and customer communication." },
  { title: "Scalable technology", body: "Architecture that handles growth without a rewrite." },
];

export function Startups() {
  return (
    <section id="startups" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHeader
            eyebrow="Startups & businesses"
            title="Technology that grows with the company."
            body="Whether you are validating an MVP or modernising operations, we work as your engineering team."
          />
          <Link
            href="/contact?type=business"
            className="inline-flex h-12 items-center justify-center rounded-xl px-8 text-sm font-medium btn-secondary"
          >
            Talk to our team
          </Link>
        </div>
        <ul className="lg:col-span-3 grid gap-4 sm:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <li className="h-full list-none rounded-2xl glass-card p-6">
                <h3 className="font-semibold tracking-tight">{it.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{it.body}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
