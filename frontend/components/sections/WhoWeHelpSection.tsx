import { Rocket, Building, GraduationCap, Users, Sprout, Cog } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const audiences = [
  { icon: Rocket, label: "Startups building MVPs" },
  { icon: Building, label: "Small businesses needing dashboards" },
  { icon: GraduationCap, label: "Colleges needing digital systems" },
  { icon: Users, label: "Recruiters needing hiring workflows" },
  { icon: Sprout, label: "Agri‑businesses needing digital tracking" },
  { icon: Cog, label: "Companies needing AI automation" },
];

export default function WhoWeHelpSection() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <SectionHeader
        title="Who We Help"
        subtitle="We work with businesses and teams ready to embrace AI‑first digital transformation."
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {audiences.map((item) => (
          <div
            key={item.label}
            className="glass p-5 flex flex-col items-center text-center hover:border-brand-cyan/30 transition-colors"
          >
            <item.icon className="w-7 h-7 text-brand-cyan mb-3" />
            <span className="text-sm text-gray-300">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}