import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { PackagesSection } from "@/components/PackagesSection";
import { HowItWorks } from "@/components/HowItWorks";
import { ReservationForm } from "@/components/ReservationForm";
import { SocialProof } from "@/components/SocialProof";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const AfconLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Technical Annotations (Hidden) */}
      {/* 
      TECHNICAL NOTES FOR DEVELOPER:
      - Add UTM parameter capture: utm_source, utm_medium, utm_campaign
      - Meta Pixel & TikTok Pixel in header
      - Form webhook integration: POST to Zapier → WhatsApp auto-reply → Mailchimp
      - Payment integration: Stripe checkout with lead_id in metadata
      - WhatsApp click-to-chat: https://wa.me/<number>?text=I%20want%20to%20book%20AFCON%20package%20Ref:%20{{lead_id}}
      - Lead event tracking on form submission
      - Purchase server-side tracking via webhook
      */}
      
      <Header />
      <Hero />
      <TrustSection />
      <PackagesSection />
      <HowItWorks />
      <ReservationForm />
      <SocialProof />
      <FAQ />
      <Footer />
    </div>
  );
};

export default AfconLanding;