import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import matchExplore from "@/assets/match-explore-package.jpg";
import cultureFootball from "@/assets/culture-football-package.jpg";
import luxuryDesert from "@/assets/luxury-desert-safari.jpg";

export const PackagesSection = () => {
  const packages = [
    {
      name: "Match & Explore",
      image: matchExplore,
      alt: "Stadium interior with football fans and local tour guide",
      features: [
        "Stadium tickets + match transfers",
        "3–4 nights accommodation near venues",
        "Local guided city tours & fan experiences"
      ],
      ctaText: "View Match & Explore Details",
      popular: false
    },
    {
      name: "Culture & Football",
      image: cultureFootball,
      alt: "Traditional Moroccan market with football fans exploring",
      features: [
        "Everything in Match & Explore",
        "Traditional Moroccan culture immersion (Medina + Food)",
        "Welcome travel kit (jersey + local souvenirs)"
      ],
      ctaText: "View Culture & Football Details",
      popular: true
    },
    {
      name: "Luxury Desert Safari",
      image: luxuryDesert,
      alt: "Luxury desert camp with elegant tents in Moroccan Sahara",
      features: [
        "Premium match hospitality & VIP seating",
        "3-day luxury desert safari experience",
        "Dedicated travel concierge & exclusive perks"
      ],
      ctaText: "View Luxury Safari Details",
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Morocco Travel Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            Choose your perfect Morocco travel experience. All packages include AFCON 2025 match access and authentic local experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative card-shadow hover:shadow-lg transition-shadow ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="p-0">
                <div className="aspect-square w-full">
                  <img 
                    src={pkg.image} 
                    alt={pkg.alt}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6 pb-4">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {pkg.name}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="px-6 pb-4">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-compass-orange mt-0.5 flex-shrink-0" />
                      <span className="text-foreground font-inter text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button 
                  variant={pkg.popular ? "default" : "outline"} 
                  className="w-full" 
                  asChild
                >
                  <a href="#reservation">{pkg.ctaText}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground font-inter">
            Starting from $<strong>[xxx]</strong> — final pricing confirmed on enquiry.
          </p>
        </div>
      </div>
    </section>
  );
};