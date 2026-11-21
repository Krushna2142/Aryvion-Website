// Lighter than before: 2 blobs instead of 4, hidden when motion is reduced.
export function CinematicBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
      <div
        className="aurora-blob h-[520px] w-[520px] bg-cyan/25"
        style={{ top: "-10%", left: "-10%" }}
      />
      <div
        className="aurora-blob h-[460px] w-[460px] bg-violet/20"
        style={{ top: "25%", right: "-12%", animationDelay: "-6s", animationDuration: "22s" }}
      />
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="absolute inset-0 spotlight" />
    </div>
  );
}
