
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
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
    <section className="py-20 px-6 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing</h2>
          <p className="text-graphite-gray text-lg max-w-2xl mx-auto">
            Start for free or upgrade when you're ready to scale
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-lg p-8 border ${
                plan.popular 
                  ? "border-amazon-orange shadow-lg" 
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="bg-amazon-orange text-white text-xs font-bold py-1 px-3 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              
              <div className="mt-4 mb-6">
                <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-graphite-gray">{plan.period}</span>
                )}
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-amazon-orange mr-2" />
                    <span className="text-graphite-gray">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? "bg-amazon-orange hover:bg-amber-600 text-white" 
                    : "bg-light-gray-mist hover:bg-gray-200 text-ppc-black"
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
