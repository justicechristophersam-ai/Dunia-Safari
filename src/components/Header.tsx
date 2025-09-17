import { Button } from "@/components/ui/button";
import { Menu, MessageCircle } from "lucide-react";
import { useState } from "react";
import duniaSafariLogo from "@/assets/dunia-safari-logo.png";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={duniaSafariLogo} 
              alt="Dunia Safari logo - authentic travels for less" 
              className="h-8 md:h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#packages" className="text-foreground hover:text-primary transition-colors font-medium">
              Packages
            </a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors font-medium">
              FAQs
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
            <a 
              href="https://wa.me/233123456789?text=Hi%20Dunia%20Safari%20team,%20I%27d%20like%20to%20know%20more%20about%20AFCON%202025%20packages"
              className="flex items-center gap-1 text-deep-green hover:text-primary transition-colors font-medium"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <Button variant="hero" size="sm" asChild>
              <a href="#reservation">Reserve Your Spot</a>
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="hero" asChild>
              <a href="#reservation">Reserve Your Spot</a>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 space-y-3">
            <a href="#packages" className="block text-foreground hover:text-primary transition-colors font-medium">
              Packages
            </a>
            <a href="#faq" className="block text-foreground hover:text-primary transition-colors font-medium">
              FAQs
            </a>
            <a href="#contact" className="block text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
            <a 
              href="https://wa.me/233123456789?text=Hi%20Dunia%20Safari%20team,%20I%27d%20like%20to%20know%20more%20about%20AFCON%202025%20packages"
              className="flex items-center gap-1 text-deep-green hover:text-primary transition-colors font-medium"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};