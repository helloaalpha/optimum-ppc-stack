
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ToolPreviewSection from "@/components/ToolPreviewSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StickyCTA from "@/components/StickyCTA";
import Footer from "@/components/Footer";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <NavBar />
      <main>
        <HeroSection />
        <TargetAudienceSection />
        <HowItWorksSection />
        <ToolPreviewSection />
        <CapabilitiesSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <StickyCTA />
      <Footer />
    </div>
  );
};

export default Index;
