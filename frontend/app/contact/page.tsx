import { Navbar } from "@/components/navigation/Navbar";
import { ContactPage } from "@/components/Contact";
import { Footer } from "@/components/navigation/Footer";

export default function Contact() {
  return (
    <main className="relative min-h-screen bg-ink-950">
      <Navbar />
      <ContactPage />
      <Footer />
    </main>
  );
}