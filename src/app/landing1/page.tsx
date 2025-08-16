import HeroSection from "./components/HeroSection";
import ComplianceSection from "./components/ComplianceSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import ProductsSection from "./components/ProductsSection";
import FeatureSection from "./components/FeatureSection";
import DroneSection from "./components/DroneSection";

export default function Landing1() {
  return (
    <main className="bg-[#111] min-h-screen w-full flex flex-col items-center justify-start">
      <HeroSection />
      <ProductsSection />
      <FeatureSection />
      <DroneSection />
      <ComplianceSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
