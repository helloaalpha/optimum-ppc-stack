
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
    <div className="fixed bottom-6 left-0 right-0 z-40 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-full border border-gray-200 shadow-lg py-4 px-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-ppc-black text-sm font-medium mb-3 sm:mb-0">Optimize your workflow. Protect your spend.</p>
        <Button className="bg-ppc-black hover:bg-ppc-black/90 text-white whitespace-nowrap rounded-full">
          Start Free Today
        </Button>
      </div>
    </div>
  );
};

export default StickyCTA;
