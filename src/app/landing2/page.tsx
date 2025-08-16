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
    <main className="bg-white min-h-screen w-full flex flex-col items-center justify-start">
      <HeroSection />
      <FeaturedOnSection />
      <ProductsSection />
      <QuoteSection />
      <TestimonialsSection />
      <NewsSection />
      <PodcastSection />
      <PartnersSection />
      <NewsletterSection />
      <FooterSection />
    </main>
  );
}
