
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
    <section className="py-20 px-6 bg-light-gray-mist" id="who-its-for">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who This Platform Serves</h2>
          <p className="text-graphite-gray text-lg max-w-2xl mx-auto">
            Engineered for performance-driven teams managing Amazon PPC at scale
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {audiences.map((audience, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-center mb-6 bg-light-gray-mist rounded-full w-20 h-20 mx-auto">
                {audience.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{audience.title}</h3>
              <p className="text-graphite-gray text-center">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
