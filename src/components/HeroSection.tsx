
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-36 md:pb-20 px-6 bg-gradient-to-b from-light-gray-mist to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Streamline Your Amazon <br />
              <span className="text-amazon-orange">PPC Workflow</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-graphite-gray">
              Eliminate spreadsheet fatigue and manual processes. Upload your data, apply intelligent filters, and generate clean, ready-to-deploy outputs — in minutes.
            </p>
            
            <div className="mt-8">
              <Button className="bg-amazon-orange hover:bg-amber-600 text-white text-lg py-6 px-8">
                Start Free – Access 1 Tool Daily
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-graphite-gray font-secondary italic">
              Trusted by PPC experts, brand operators, and Trivium's own team
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl">
            <div className="bg-white p-6 border border-gray-200 rounded-lg">
              <div className="h-64 bg-light-gray-mist rounded flex items-center justify-center">
                <p className="text-graphite-gray">Product Dashboard Visual</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
