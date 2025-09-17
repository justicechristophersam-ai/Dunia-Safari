import { Trophy, Plane, Shield } from "lucide-react";

export const TrustSection = () => {
  const trustItems = [
    {
      icon: Trophy,
      title: "Match-Ready",
      description: "Guaranteed match transfers & match-day support"
    },
    {
      icon: Plane,
      title: "Hassle-Free Travel",
      description: "Flights, hotels & local guides included"
    },
    {
      icon: Shield,
      title: "Safe & Trusted",
      description: "Secure payments & travel insurance option"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-inter">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};