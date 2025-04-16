
import { Upload, Menu, FileLineChart } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Upload className="h-10 w-10 text-amazon-orange" />,
      title: "Upload your STR or Bulk Sheet",
      description: "Simply drag and drop your Amazon advertising reports into the platform"
    },
    {
      icon: <Menu className="h-10 w-10 text-amazon-orange" />,
      title: "Choose a tool",
      description: "Select from our specialized tools (free tool per day or full access on Pro)"
    },
    {
      icon: <FileLineChart className="h-10 w-10 text-amazon-orange" />,
      title: "Get fast, export-ready insights",
      description: "Receive actionable data you can implement immediately"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-graphite-gray text-lg max-w-2xl mx-auto">
            Optimize your Amazon PPC campaigns in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-light-gray-mist p-8 rounded-lg transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-xl font-bold mb-3">Step {index + 1}: {step.title}</h3>
              <p className="text-graphite-gray">{step.description}</p>

              {/* Connector lines between steps (desktop only) */}
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-graphite-gray inline-block bg-light-gray-mist py-2 px-4 rounded-full text-sm">
            <span className="font-semibold">Pro users</span> can upload once and run multiple tools back-to-back.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
