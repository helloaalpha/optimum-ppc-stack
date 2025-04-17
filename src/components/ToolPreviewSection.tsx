
import { Copy, Search, Calculator, Sparkles, FileCheck } from "lucide-react";

const ToolPreviewSection = () => {
  const tools = [
    {
      icon: <Copy className="h-8 w-8 text-amazon-orange" />,
      name: "Deduplication Tool",
      description: "Identify and remove redundant keywords and terms, preserving efficiency and budget",
      comingSoon: false
    },
    {
      icon: <Search className="h-8 w-8 text-amazon-orange" />,
      name: "Negative Keyword Wizard",
      description: "Quickly filter, identify, and block wasteful terms—using performance-based criteria",
      comingSoon: false
    },
    {
      icon: <Calculator className="h-8 w-8 text-amazon-orange" />,
      name: "Bulk Bid Optimizer",
      description: "Apply strategic bid adjustments across campaigns or ASINs in just a few clicks",
      comingSoon: false
    },
    {
      icon: <Sparkles className="h-8 w-8 text-amazon-orange" />,
      name: "STIN",
      description: "Extract actionable insights from your Impression Share reports—without spreadsheet overwhelm",
      comingSoon: true
    },
    {
      icon: <FileCheck className="h-8 w-8 text-amazon-orange" />,
      name: "Campaign Creation Tool",
      description: "Generate high-performance campaigns from your keyword, ASIN, or category inputs",
      comingSoon: true
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-light-gray-mist" id="tools">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tool Suite</h2>
          <p className="text-graphite-gray text-lg max-w-2xl mx-auto">
            Purpose-built tools for brands, agencies, and PPC teams that demand performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 relative group h-full"
            >
              {tool.comingSoon && (
                <div className="absolute top-4 right-4 bg-electric-blue text-white text-xs font-bold py-1 px-3 rounded-full">
                  Coming Soon
                </div>
              )}
              
              <div className="p-6">
                <div className="mb-4">{tool.icon}</div>
                <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                <p className="text-graphite-gray">{tool.description}</p>
              </div>
              
              {/* Hover details - appears on hover */}
              <div className="absolute inset-0 bg-ppc-black bg-opacity-90 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                <div>
                  <h4 className="text-lg font-bold mb-2 text-amazon-orange">{tool.name}</h4>
                  <p className="text-sm">{tool.description}</p>
                  {!tool.comingSoon && (
                    <button className="mt-4 text-amazon-orange border border-amazon-orange rounded px-3 py-1 text-sm hover:bg-amazon-orange hover:text-white transition-colors duration-300">
                      Learn more
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolPreviewSection;
