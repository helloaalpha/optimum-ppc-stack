
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Do I need prior experience with Excel macros or formulas?",
      answer: "Not at all. This platform was built to eliminate that requirement entirely. Simply upload your file and our tools will handle the complex processing."
    },
    {
      question: "What happens with the free plan?",
      answer: "You can access one tool per day. It resets every 24 hours (midnight UTC). No credit card is required to get started."
    },
    {
      question: "What's included in the $10/month plan?",
      answer: "Full access to all tools, the ability to run multiple tools in sequence (tool chaining), and early access to upcoming features."
    },
    {
      question: "Can I define campaign-specific or ASIN-specific logic?",
      answer: "Yes. Advanced Mode allows granular rule-setting for specific campaigns, ASINs, or ad groups when needed."
    },
    {
      question: "Is this suitable for agency teams?",
      answer: "Absolutely. Our toolset is built for scale, consistency, and team efficiency. Multiple team members can use the same standardized approach."
    }
  ];

  return (
    <section className="py-20 px-6 bg-light-gray-mist" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-graphite-gray text-lg max-w-2xl mx-auto">
            Everything you need to know about OptimumTools
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg overflow-hidden shadow-sm ${
                openIndex === index ? "shadow-md" : ""
              }`}
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="font-bold text-lg">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-amazon-orange" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-amazon-orange" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-graphite-gray">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
