import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";
import { StudentProjects } from "@/components/StudentProjects";
import { Startups } from "@/components/Startups";
import { Workflow } from "@/components/Workflow";
import { WhyAryvion } from "@/components/WhyAryvion";
import { Founder } from "@/components/Founder";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-ink-950">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <StudentProjects />
      <Startups />
      <Workflow />
      <WhyAryvion />
      <Founder />
      <FinalCTA />
      <Footer />
    </main>
  );
}
