export default function TrustBar() {
  const trustPoints = [
    "Privacy-first architecture",
    "Transparent delivery",
    "AI-powered workflows",
    "Secure dashboards",
    "Scalable SaaS systems",
  ];

  return (
    <div className="bg-white/[0.02] border-y border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {trustPoints.map((point) => (
            <div
              key={point}
              className="glass px-4 py-2.5 rounded-full flex items-center gap-2.5 text-sm text-gray-300 border-white/10 transition-all duration-300 hover:border-brand-cyan/30 hover:bg-white/[0.07] hover:shadow-[0_0_15px_rgba(0,229,255,0.08)] group"
            >
              <span className="w-2 h-2 rounded-full bg-brand-cyan group-hover:animate-pulse" />
              {point}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}