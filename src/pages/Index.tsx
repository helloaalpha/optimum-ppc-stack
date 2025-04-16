
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ToolPreviewSection from "@/components/ToolPreviewSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StickyCTA from "@/components/StickyCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <ToolPreviewSection />
        <PricingSection />
        <TestimonialsSection />
      </main>
      <StickyCTA />
      <Footer />
    </div>
  );
};

export default Index;
