import { Navbar } from "@/components/navigation/Navbar";
import { PortalPage } from "@/components/Portal";
import { Footer } from "@/components/navigation/Footer";

export default function Portal() {
  return (
    <main className="relative min-h-screen bg-ink-950">
      <Navbar />
      <PortalPage />
      <Footer />
    </main>
  );
}