
import { Upload, Menu, FileLineChart, Download } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HowItWorksSection = () => {
  const revealRef = useScrollReveal();

  const steps = [
    {
      icon: <Upload className="h-10 w-10 text-amazon-orange" />,
      title: "Upload",
      description: "Import your Bulk Sheet or Search Term Report from Amazon"
    },
    {
      icon: <Menu className="h-10 w-10 text-amazon-orange" />,
      title: "Select a Tool",
      description: "Choose from Deduplication, Bid Optimization, or Keyword Filtering"
    },
    {
      icon: <FileLineChart className="h-10 w-10 text-amazon-orange" />,
      title: "Configure",
      description: "Use default logic or customize filters to your specifications"
    },
    {
      icon: <Download className="h-10 w-10 text-amazon-orange" />,
      title: "Download",
      description: "Export a clean, Amazon-ready file for direct implementation"
    }
  ];

  return (
    <section className="py-28 px-6 bg-light-gray-mist" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">How It Works</h2>
          <p className="text-graphite-gray/80 text-xl max-w-2xl mx-auto">
            A clear, four-step process from raw data to optimized output
          </p>
        </div>

        <div ref={revealRef} className="grid md:grid-cols-4 gap-6 relative reveal-on-scroll stagger-reveal">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl transition-transform hover:-translate-y-1 duration-300 border border-gray-100"
            >
              <div className="mb-6 flex justify-center">
                <div className="bg-light-gray-mist p-4 rounded-full">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
              <p className="text-graphite-gray/80 text-center">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center fade-in">
          <p className="text-graphite-gray/80 inline-block bg-white py-3 px-6 rounded-full text-sm border border-gray-200">
            <span className="font-semibold">Pro users</span> can apply multiple tools to the same file in sequence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
