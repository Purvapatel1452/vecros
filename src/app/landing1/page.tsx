import HeroSection from "./components/HeroSection";
import ComplianceSection from "./components/ComplianceSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import ProductsSection from "./components/ProductsSection";
import FeatureSection from "./components/FeatureSection";
import DroneSection from "./components/DroneSection";

export default function Landing1() {
  return (
    <main className="bg-[#111] min-h-screen w-full flex flex-col items-center justify-start overflow-x-hidden">
      {/* Each section now has responsive containers */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
      </div>
      
      <div className="w-full">
        <ProductsSection />
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeatureSection />
      </div>
      
      <div className="w-full">
        <DroneSection />
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ComplianceSection />
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactSection />
      </div>
      
      <div className="w-full">
        <FooterSection />
      </div>
    </main>
  );
}

// import HeroSection from "./components/HeroSection";
// import ComplianceSection from "./components/ComplianceSection";
// import ContactSection from "./components/ContactSection";
// import FooterSection from "./components/FooterSection";
// import ProductsSection from "./components/ProductsSection";
// import FeatureSection from "./components/FeatureSection";
// import DroneSection from "./components/DroneSection";

// export default function Landing1() {
//   return (
//     <main className="bg-[#111] min-h-screen w-full flex flex-col items-center justify-start">
//       <HeroSection />
//       <ProductsSection />
//       <FeatureSection />
//       <DroneSection />
//       <ComplianceSection />
//       <ContactSection />
//       <FooterSection />
//     </main>
//   );
// }
