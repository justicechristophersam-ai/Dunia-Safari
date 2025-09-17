import { Facebook, Instagram, Twitter, MessageCircle, Mail, Phone } from "lucide-react";
import duniaSafariLogo from "@/assets/dunia-safari-logo.png";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-neutral-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img 
              src=duniaSafariLogo_png 
              alt="Dunia Safari logo - authentic travels for less" 
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/80 font-inter mb-4 max-w-md">
              Your trusted partner for authentic African travel experiences. 
              From AFCON adventures to safari expeditions, we create memories that last a lifetime.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://wa.me/233123456789" className="text-white/60 hover:text-white transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80 font-inter">
              <li><a href="#packages" className="hover:text-white transition-colors">Packages</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#reservation" className="hover:text-white transition-colors">Book Now</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-white/80 font-inter">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+233 XXX XXX XXX</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} />
                <a href="https://wa.me/233123456789" className="hover:text-white transition-colors">
                  WhatsApp Support
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:hello@duniasafari.com" className="hover:text-white transition-colors">
                  hello@duniasafari.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-white/60 font-inter">
          <p className="text-sm mb-4 md:mb-0">
            © 2024 Dunia Safari. All rights reserved. Licensed travel operator.
          </p>
          <p className="text-sm">
            Prices subject to availability. 
            <span className="text-white/80 ml-2">Built with ❤️ for African football fans</span>
          </p>
        </div>
      </div>
    </footer>
  );
};