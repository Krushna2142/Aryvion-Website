import { Users, Cpu, Sprout, Bot } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import GlowCard from "../ui/GlowCard";

const products = [
    {
        icon: Users,
        name: "HireX by Aryvion",
        badge: "MVP Development",
        badgeColor: "bg-green-500/10 text-green-300 border-green-500/20",
        desc: "AI hiring, ATS, campus placement, interview workflows, candidate tracking, recruiter dashboards, and privacy‑first mock interviews.",
    },
    {
        icon: Cpu,
        name: "Aryvion AI",
        badge: "Research & Architecture",
        badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/20",
        desc: "Recursive multi‑agent intelligence ecosystem for domain‑specific reasoning, AI orchestration, decision intelligence, and verified workflows.",
    },
    {
        icon: Sprout,
        name: "Farm‑To‑Globe by Aryvion",
        badge: "Concept & Pilot Planning",
        badgeColor: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
        desc: "AI agriculture and farm intelligence platform for crop guidance, farm data, sensor insights, food processing digitalization, and farmer data privacy.",
    },
    {
        icon: Bot,
        name: "Aryvion Robotics & Automation",
        badge: "Future Division",
        badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/20",
        desc: "Future‑focused division for robotics, IoT, embedded systems, industrial automation, and smart machines.",
    },
];

export default function ProductsSection() {
    return (

        <section id="products" className="pt-16 pb-20 bg-brand-darker/50">
            <div className="max-w-7xl mx-auto px-4">
                <SectionHeader
                    title="Our Products"
                    subtitle="Purpose‑built AI products that solve specific industry problems with a focus on privacy and scalability."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {products.map((prod) => (
                        <GlowCard key={prod.name} className="!p-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center shrink-0">
                                    <prod.icon className="w-6 h-6 text-brand-cyan" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center flex-wrap gap-2 mb-2">
                                        <h3 className="text-xl font-semibold text-white">{prod.name}</h3>
                                        <span className={`text-xs px-2 py-0.5 rounded-full border ${prod.badgeColor}`}>
                                            {prod.badge}
                                        </span>
                                    </div>
                                    <p className="text-gray-400">{prod.desc}</p>
                                </div>
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    );
}