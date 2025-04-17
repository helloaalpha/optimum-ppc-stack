
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show sticky CTA when user scrolls down past 500px
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-ppc-black py-3 px-6 shadow-lg z-40 transform transition-transform duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <p className="text-white text-lg mb-3 sm:mb-0">Optimize your workflow. Protect your spend.</p>
        <Button className="bg-amazon-orange hover:bg-amber-600 text-white whitespace-nowrap">
          Start Free Today
        </Button>
      </div>
    </div>
  );
};

export default StickyCTA;
