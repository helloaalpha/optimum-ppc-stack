
import { Upload, Menu, FileLineChart, Download } from "lucide-react";

const HowItWorksSection = () => {
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
    <section className="py-20 px-6 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-graphite-gray text-lg max-w-2xl mx-auto">
            A clear, four-step process from raw data to optimized output
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-light-gray-mist p-8 rounded-lg transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-xl font-bold mb-3">Step {index + 1}: {step.title}</h3>
              <p className="text-graphite-gray">{step.description}</p>

              {/* Connector lines between steps (desktop only) */}
              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-graphite-gray inline-block bg-light-gray-mist py-2 px-4 rounded-full text-sm">
            <span className="font-semibold">Pro users</span> can apply multiple tools to the same file in sequence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
