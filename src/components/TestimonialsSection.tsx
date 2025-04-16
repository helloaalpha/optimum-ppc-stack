
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "We use OptimumTools every day at Trivium. It saves time, cuts through clutter, and gets results.",
      author: "Mina Elias",
      title: "Founder of Trivium",
      avatar: "/placeholder.svg"
    },
    {
      quote: "The Bulk Bid Optimizer has transformed our campaign management. What took hours now takes minutes.",
      author: "Jane Smith",
      title: "Amazon PPC Strategist",
      avatar: "/placeholder.svg"
    },
    {
      quote: "Finally, PPC tools that actually do what they're supposed to do without the complexity.",
      author: "Michael Johnson",
      title: "E-commerce Agency Owner",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 px-6 bg-light-gray-mist" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-graphite-gray text-lg max-w-2xl mx-auto">
            Trusted by Amazon PPC professionals around the world
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-lg shadow-md relative ${
                index === 0 ? "border-t-4 border-amazon-orange" : ""
              }`}
            >
              <Quote className="h-8 w-8 text-amazon-orange opacity-20 absolute top-4 right-4" />
              
              <p className="text-graphite-gray mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200 flex items-center justify-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-graphite-gray">{testimonial.title}</p>
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
