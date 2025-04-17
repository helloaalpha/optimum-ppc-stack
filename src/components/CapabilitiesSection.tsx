
import { CheckCircle } from "lucide-react";

const CapabilitiesSection = () => {
  const capabilities = [
    "Simple & Advanced Modes for flexible execution",
    "Full compatibility with Bulk Sheets and STR formats",
    "Tool chaining: apply multiple tools to the same file in sequence",
    "Filters include ACOS, Order Count, Spend, CTR, and more",
    "No coding, formulas, or macros required",
    "Built for all Amazon marketplaces (US, EU, CA, etc.)"
  ];

  return (
    <section className="py-20 px-6 bg-white" id="capabilities">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Capabilities</h2>
          <p className="text-graphite-gray text-lg max-w-2xl mx-auto">
            Designed to streamline complex workflows and eliminate technical hurdles
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-10 max-w-4xl mx-auto">
          {capabilities.map((capability, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="h-6 w-6 text-amazon-orange mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-graphite-gray">{capability}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
