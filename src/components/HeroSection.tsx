
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-40 pb-28 md:pt-48 md:pb-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="text-left md:col-span-3">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Streamline your Amazon 
              <span className="text-amazon-orange block mt-2">PPC workflow.</span>
            </h1>
            
            <p className="mt-8 text-xl md:text-2xl text-graphite-gray/80 max-w-2xl">
              Eliminate spreadsheet fatigue. Upload data, apply intelligent filters, generate ready-to-deploy outputs.
            </p>
            
            <div className="mt-12">
              <Button className="bg-ppc-black hover:bg-ppc-black/90 text-white text-lg py-7 px-10 rounded-full">
                Start Free Today
              </Button>
              
              <p className="mt-6 text-sm text-graphite-gray font-secondary">
                Access 1 tool daily. No credit card required.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-2 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-light-gray-mist p-8 h-full">
              <div className="h-64 bg-white rounded-lg shadow-inner flex items-center justify-center border border-gray-100">
                <p className="text-graphite-gray/60 italic">Product Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
