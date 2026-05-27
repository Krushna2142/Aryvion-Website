import { Check, Monitor, FileText, MessageSquare, Clock, Receipt, Users } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import GlowCard from "../ui/GlowCard";

const features = [
  { icon: Monitor, text: "Project progress tracking" },
  { icon: FileText, text: "Requirement tracking" },
  { icon: MessageSquare, text: "Ticketing system" },
  { icon: FileText, text: "File sharing" },
  { icon: Clock, text: "Timeline tracking" },
  { icon: Receipt, text: "Invoice & payment status" },
  { icon: Users, text: "Real‑time collaboration" },
];

export default function ClientPortalSection() {
  return (
    <section className="py-24 bg-brand-darker/50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Transparent Project Delivery Through Client Portals"
          subtitle="Aryvion is building dedicated client portals where clients can track progress, raise tickets, share files, check delivery timelines, and communicate clearly."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {features.map((item) => (
            <div key={item.text} className="glass p-4 flex items-center gap-3">
              <item.icon className="w-5 h-5 text-brand-cyan shrink-0" />
              <span className="text-sm text-gray-300">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}