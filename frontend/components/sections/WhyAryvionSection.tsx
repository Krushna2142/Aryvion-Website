import { Check } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import GlowCard from "../ui/GlowCard";

const reasons = [
  "We build systems, not just websites",
  "AI‑first thinking in every solution",
  "Secure and privacy‑aware architecture",
  "Transparent project tracking",
  "Scalable full‑stack development",
  "Real‑world problem solving",
  "Custom solutions for business workflows",
  "Long‑term partnership approach",
];

export default function WhyAryvionSection() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <SectionHeader
        title="Why Aryvion?"
        subtitle="We bring a product‑engineering mindset to every client engagement, delivering robust, future‑ready systems."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {reasons.map((item) => (
          <GlowCard key={item} className="!p-4 flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-brand-cyan/10 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-brand-cyan" />
            </div>
            <span className="text-sm text-gray-300">{item}</span>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}