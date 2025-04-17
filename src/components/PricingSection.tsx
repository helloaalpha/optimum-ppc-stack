
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PricingSection = () => {
  const revealRef = useScrollReveal();

  const plans = [
    {
      name: "Free Plan",
      price: "$0",
      features: [
        "Access 1 tool per day",
        "Resets daily at midnight UTC",
        "No credit card required",
        "Full compatibility with standard reports"
      ],
      cta: "Start Free Today",
      popular: false
    },
    {
      name: "Unlimited",
      price: "$10",
      period: "/month",
      features: [
        "Unlimited tool usage",
        "Tool chaining capabilities",
        "Early access to new features",
        "Priority updates",
        "Support for all Amazon marketplaces"
      ],
      cta: "Go Unlimited",
      popular: true
    }
  ];

  return (
    <section className="py-28 px-6 bg-white" id="pricing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Pricing</h2>
          <p className="text-graphite-gray/80 text-xl max-w-2xl mx-auto">
            Start for free or upgrade when you're ready to scale
          </p>
        </div>

        <div ref={revealRef} className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto reveal-on-scroll">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl p-10 ${
                plan.popular 
                  ? "bg-light-gray-mist" 
                  : "bg-white border border-gray-200"
              } card-shadow`}
            >
              {plan.popular && (
                <div className="bg-amazon-orange text-white text-xs font-bold py-1 px-3 rounded-full inline-block mb-6">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-3xl font-bold">{plan.name}</h3>
              
              <div className="mt-6 mb-8">
                <span className="text-5xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-graphite-gray">{plan.period}</span>
                )}
              </div>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-amazon-orange mr-3 flex-shrink-0" />
                    <span className="text-graphite-gray/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full rounded-full py-6 subtle-hover ${
                  plan.popular 
                    ? "bg-ppc-black hover:bg-ppc-black/90 text-white" 
                    : "bg-white hover:bg-light-gray-mist text-ppc-black border border-gray-300"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
