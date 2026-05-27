import { Shield, Lock, UserCheck, EyeOff, FileText, Key, UserX } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import GlowCard from "../ui/GlowCard";

const principles = [
  { icon: UserX, text: "No selling user data" },
  { icon: UserCheck, text: "Role‑based access control" },
  { icon: Lock, text: "Encrypted storage" },
  { icon: FileText, text: "Audit‑ready workflows" },
  { icon: EyeOff, text: "AI data masking" },
  { icon: Key, text: "Secure API design" },
  { icon: Shield, text: "Human approval for critical decisions" },
];

export default function TrustSecuritySection() {
  return (
    <section id="trust" className="py-24 bg-brand-darker/50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Built on Trust, Privacy, and Security"
          subtitle="Aryvion believes user data should not be treated as a product. Whether it is candidate data, farmer data, client data, or business data, privacy and trust must be protected by design."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {principles.map((p) => (
            <GlowCard key={p.text} className="flex items-center gap-4 !p-5">
              <p.icon className="w-6 h-6 text-brand-purple shrink-0" />
              <span className="text-gray-300">{p.text}</span>
            </GlowCard>
          ))}
        </div>
        <p className="mt-12 text-center text-lg text-white/80 italic max-w-2xl mx-auto">
          “Aryvion will not become powerful by selling user data. Aryvion will become trusted by protecting it.”
        </p>
      </div>
    </section>
  );
}