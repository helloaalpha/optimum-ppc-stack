
import { Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const TestimonialsSection = () => {
  const revealRef = useScrollReveal();

  const testimonials = [
    {
      quote: "This is the exact stack we use to manage and scale 8-figure brands at Trivium.",
      author: "Mina Elias",
      title: "Founder of Trivium",
      avatar: "/placeholder.svg"
    },
    {
      quote: "The Bulk Bid Optimizer has transformed our campaign management. What took hours now takes minutes.",
      author: "Jane Smith",
      title: "Senior PPC Analyst",
      avatar: "/placeholder.svg"
    },
    {
      quote: "Finally, PPC tools that actually do what they're supposed to do without the complexity or learning curve.",
      author: "Michael Johnson",
      title: "E-commerce Agency Director",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-28 px-6 bg-light-gray-mist" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Trusted by Industry Experts</h2>
          <p className="text-graphite-gray/80 text-xl max-w-2xl mx-auto">
            See why leading PPC professionals rely on our platform
          </p>
        </div>

        <div ref={revealRef} className="grid md:grid-cols-3 gap-8 reveal-on-scroll stagger-reveal">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-xl relative border border-gray-100 card-shadow"
            >
              <Quote className="h-8 w-8 text-amazon-orange/20 absolute top-6 right-6" />
              
              <p className="text-graphite-gray mb-8 text-lg">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-light-gray-mist flex items-center justify-center border border-gray-100">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-graphite-gray/80">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
