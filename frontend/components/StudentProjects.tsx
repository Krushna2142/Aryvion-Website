import Link from "next/link";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";

const steps = [
  { title: "Guidance", body: "Pick a topic, define scope and choose the right architecture with a mentor." },
  { title: "Development", body: "Build the project in sprints with code reviews and regular check-ins." },
  { title: "Implementation", body: "Integrate models, databases and APIs, and test against real inputs." },
  { title: "Deployment", body: "Go live on the cloud and prepare your report, demo and viva." },
];

export function StudentProjects() {
  return (
    <section id="students" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="rounded-3xl glass-strong hairline-strong p-6 sm:p-10 lg:p-14 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-violet/20 blur-3xl pointer-events-none" aria-hidden />
          <div className="relative">
            <SectionHeader
              eyebrow="Student project development"
              title="Your final-year project, built the way professionals build."
              body="We help engineering students plan, develop and deploy projects in AI, web, mobile and cloud, and understand every part of what they present."
            />
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08}>
                  <li className="h-full list-none rounded-2xl bg-white/[0.03] hairline p-5">
                    <span className="text-sm text-cyan">Step {i + 1}</span>
                    <h3 className="mt-2 text-lg font-semibold tracking-tight">{s.title}</h3>
                    <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.body}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Link
              href="/contact?type=student"
              className="mt-10 inline-flex h-12 items-center justify-center rounded-xl px-8 text-sm font-medium btn-primary"
            >
              Build your project with us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
