
import { Copy, Search, Calculator, Sparkles, FileCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ToolPreviewSection = () => {
  const revealRef = useScrollReveal();

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
    <section className="py-28 px-6 bg-white" id="tools">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Tool Suite</h2>
          <p className="text-graphite-gray/80 text-xl max-w-2xl mx-auto">
            Purpose-built tools for brands, agencies, and PPC teams that demand performance
          </p>
        </div>

        <div ref={revealRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-on-scroll stagger-reveal">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 transition-all duration-300 relative group h-full hover:border-amazon-orange card-shadow"
            >
              {tool.comingSoon && (
                <div className="absolute top-6 right-6 bg-light-gray-mist text-ppc-black text-xs font-bold py-1 px-3 rounded-full">
                  Coming Soon
                </div>
              )}
              
              <div className="p-8">
                <div className="mb-6">{tool.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{tool.name}</h3>
                <p className="text-graphite-gray/80">{tool.description}</p>
              </div>
              
              {/* Hover details - appears on hover */}
              <div className="absolute inset-0 bg-ppc-black bg-opacity-90 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                <div>
                  <h4 className="text-lg font-bold mb-2 text-amazon-orange">{tool.name}</h4>
                  <p className="text-sm">{tool.description}</p>
                  {!tool.comingSoon && (
                    <button className="mt-4 text-amazon-orange border border-amazon-orange rounded-full px-4 py-1 text-sm hover:bg-amazon-orange hover:text-white transition-colors duration-300">
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
