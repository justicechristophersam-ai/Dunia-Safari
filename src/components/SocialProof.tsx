import { Star, Shield, CheckCircle, Award } from "lucide-react";

export const SocialProof = () => {
  const testimonials = [
    {
      quote: "Dunia Safari made our Morocco trip incredible — from the desert safari to the AFCON matches, everything was perfectly organized.",
      author: "Ama",
      location: "Accra"
    },
    {
      quote: "The cultural tours between matches were the highlight. Morocco's hospitality exceeded all expectations!",
      author: "Kwame", 
      location: "Lagos"
    },
    {
      quote: "Professional travel service from start to finish. The desert experience was unforgettable. Planning our next trip with Dunia Safari.",
      author: "Sarah",
      location: "Nairobi"
    }
  ];

  const badges = [
    { icon: Shield, text: "Trusted Travel Operator" },
    { icon: CheckCircle, text: "Verified Morocco Packages" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-muted-foreground font-inter">
            Join thousands of satisfied travelers who chose Dunia Safari for Morocco
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg card-shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-foreground font-inter mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              <footer className="text-sm text-muted-foreground">
                — <strong>{testimonial.author}</strong>, {testimonial.location}
              </footer>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <Icon className="w-5 h-5 text-compass-orange" />
                <span className="font-medium font-inter">{badge.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};