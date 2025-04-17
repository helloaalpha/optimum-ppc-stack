
import { Users, Briefcase, Building } from "lucide-react";

const TargetAudienceSection = () => {
  const audiences = [
    {
      icon: <Users className="h-12 w-12 text-amazon-orange" />,
      title: "PPC Analysts",
      description: "Execute with speed and precision to streamline your daily workflow"
    },
    {
      icon: <Building className="h-12 w-12 text-amazon-orange" />,
      title: "Brand Owners",
      description: "Reduce overwhelm and simplify campaign management without technical expertise"
    },
    {
      icon: <Briefcase className="h-12 w-12 text-amazon-orange" />,
      title: "Agency Teams",
      description: "Standardize workflows, increase output, and reduce errors across clients"
    }
  ];

  return (
    <section className="py-28 px-6 bg-white" id="who-its-for">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Who This Platform Serves</h2>
          <p className="text-graphite-gray/80 text-xl max-w-2xl mx-auto">
            Engineered for performance-driven teams managing Amazon PPC at scale
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {audiences.map((audience, index) => (
            <div key={index} className="bg-light-gray-mist p-10 rounded-xl transition-transform hover:-translate-y-1 duration-300">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center border border-gray-100">
                  {audience.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{audience.title}</h3>
              <p className="text-graphite-gray/80 text-center">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
