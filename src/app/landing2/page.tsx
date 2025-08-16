import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import PodcastSection from "./components/PodcastSection";
import NewsSection from "./components/NewsSection";
import QuoteSection from "./components/QuoteSection";
import NewsletterSection from "./components/NewsletterSection";
import PartnersSection from "./components/PartnersSection";
import FooterSection from "./components/FooterSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FeaturedOnSection from "./components/FeaturedOnSection";

export default function Landing2() {
  return (
    <main className="bg-white min-h-screen w-full flex flex-col items-center justify-start overflow-x-hidden">
      {/* Each section now has responsive containers */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
      </div>
      
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturedOnSection />
      </div>
      
      <div className="w-full">
        <ProductsSection />
      </div>
      
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteSection />
      </div>
      
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <TestimonialsSection />
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsSection />
      </div>
      
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <PodcastSection />
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PartnersSection />
      </div>
      
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterSection />
      </div>
      
      <div className="w-full">
        <FooterSection />
      </div>
    </main>
  );
}

// import HeroSection from "./components/HeroSection";
// import ProductsSection from "./components/ProductsSection";
// import PodcastSection from "./components/PodcastSection";
// import NewsSection from "./components/NewsSection";
// import QuoteSection from "./components/QuoteSection";
// import NewsletterSection from "./components/NewsletterSection";
// import PartnersSection from "./components/PartnersSection";
// import FooterSection from "./components/FooterSection";
// import TestimonialsSection from "./components/TestimonialsSection";
// import FeaturedOnSection from "./components/FeaturedOnSection";

// export default function Landing2() {
//   return (
//     <main className="bg-white min-h-screen w-full flex flex-col items-center justify-start">
//       <HeroSection />
//       <FeaturedOnSection />
//       <ProductsSection />
//       <QuoteSection />
//       <TestimonialsSection />
//       <NewsSection />
//       <PodcastSection />
//       <PartnersSection />
//       <NewsletterSection />
//       <FooterSection />
//     </main>
//   );
// }
