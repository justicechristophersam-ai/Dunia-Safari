import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroStadium from "@/assets/hero-stadium.jpg";

// A/B VARIANT B: Alternate CTA text only
export const HeroVariantB = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroStadium})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AFCON 2025 in Morocco — Book the Ultimate Fan + Adventure Package
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-inter">
            Match tickets, flights, hotels & curated Morocco experiences — secure your seat with a 25% deposit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button variant="hero" size="lg" asChild className="cta-shadow">
              <a href="#reservation">Secure My AFCON Seat — Pay 25%</a>
            </Button>
            
            <Button variant="ghost" size="lg" className="text-white hover:text-primary" asChild>
              <a href="https://wa.me/233123456789?text=Hi%20Dunia%20Safari,%20I%27d%20like%20to%20chat%20about%20AFCON%202025%20packages" className="flex items-center gap-2">
                <MessageCircle size={20} />
                Or chat on WhatsApp
              </a>
            </Button>
          </div>

          <p className="text-white/80 text-sm font-inter">
            Limited seats per match date — small deposits accepted.
          </p>
        </div>
      </div>
    </section>
  );
};