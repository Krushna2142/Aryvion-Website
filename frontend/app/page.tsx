import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ServicesSection from "@/components/sections/ServicesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import WhoWeHelpSection from "@/components/sections/WhoWeHelpSection";
import WhyAryvionSection from "@/components/sections/WhyAryvionSection";
import ClientPortalSection from "@/components/sections/ClientPortalSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import TrustSecuritySection from "@/components/sections/TrustSecuritySection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <ProductsSection />
      <WhoWeHelpSection />
      <WhyAryvionSection />
      <ClientPortalSection />
      <IndustriesSection />
      <TrustSecuritySection />
      <ContactSection />
      <Footer />
    </main>
  );
}