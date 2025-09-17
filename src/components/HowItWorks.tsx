import { Button } from "@/components/ui/button";
import { Package, CreditCard, Plane } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: Package,
      title: "Choose your package",
      description: "Select from Bronze, Silver, or Gold AFCON experiences",
      cta: "Browse packages"
    },
    {
      number: "2",
      icon: CreditCard,
      title: "Pay 25% deposit",
      description: "Secure your spot with our safe payment gateway",
      cta: "Secure payment"
    },
    {
      number: "3",
      icon: Plane,
      title: "Fly & enjoy AFCON + Morocco experiences",
      description: "We handle everything while you focus on the football",
      cta: "Your adventure awaits"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            Three simple steps to your AFCON 2025 adventure in Morocco
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center relative">
                {/* Connector Line for Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-secondary z-0" />
                )}
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <Icon className="w-8 h-8 text-white" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-inter mb-4">
                    {step.description}
                  </p>
                  
                  <Button variant="outline" size="sm" asChild>
                    <a href="#reservation">{step.cta}</a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild className="cta-shadow">
            <a href="#reservation">Check available match dates</a>
          </Button>
        </div>
      </div>
    </section>
  );
};