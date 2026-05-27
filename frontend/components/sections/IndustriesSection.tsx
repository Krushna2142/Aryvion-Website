import { Building2, GraduationCap, Sprout, Cog, ShoppingCart, BarChart3, Shield, Bot, Cpu } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import GlowCard from "../ui/GlowCard";

const industries = [
  { icon: Building2, name: "Hiring & Recruitment" },
  { icon: GraduationCap, name: "Education & Campus Placement" },
  { icon: Sprout, name: "Agriculture & Food Processing" },
  { icon: Cog, name: "Business Automation" },
  { icon: ShoppingCart, name: "Commerce" },
  { icon: BarChart3, name: "Data Analytics" },
  { icon: Shield, name: "Cybersecurity" },
  { icon: Bot, name: "Robotics & Industrial Automation" },
  { icon: Cpu, name: "AI‑Powered Software Systems" },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 px-4 max-w-7xl mx-auto">
      <SectionHeader
        title="Industries We Serve"
        subtitle="Our solutions are tailored for sectors where data privacy, automation, and intelligence make the biggest impact."
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {industries.map((ind) => (
          <div
            key={ind.name}
            className="glass p-5 flex flex-col items-center text-center hover:border-brand-cyan/30 transition-colors"
          >
            <ind.icon className="w-8 h-8 text-brand-cyan mb-3" />
            <span className="text-sm text-gray-300">{ind.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}