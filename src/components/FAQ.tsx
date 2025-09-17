import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Do you provide visas?",
      answer: "We provide visa guidance and partner services to assist applications. Our team will guide you through the entire visa process and connect you with reliable visa assistance services."
    },
    {
      question: "What payment methods do you accept?",
      answer: "Card (Stripe), Paystack / Flutterwave for West Africa, bank transfer. We accept all major credit cards and provide secure payment processing through trusted payment gateways."
    },
    {
      question: "Deposit & refund policy?",
      answer: "20–30% deposit to secure spot. Refunds per cancellation policy. Our flexible cancellation policy ensures you're protected, with clear terms available on request."
    },
    {
      question: "Are match tickets guaranteed?",
      answer: "Yes, all our packages include guaranteed match tickets. We work directly with official AFCON partners to ensure ticket availability for all package holders."
    },
    {
      question: "What about travel insurance?",
      answer: "Travel insurance is optional but highly recommended. We can connect you with comprehensive travel insurance providers to protect your investment and ensure peace of mind."
    },
    {
      question: "Can I customize my package?",
      answer: "Absolutely! While we offer Bronze, Silver, and Gold packages, we can customize experiences based on your preferences, group size, and budget. Contact our team to discuss your needs."
    },
    {
      question: "What's included in airport transfers?",
      answer: "All packages include return airport transfers to your hotel, plus match day transfers to and from stadiums. Our local guides ensure you never miss a moment of the action."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground font-inter">
              Everything you need to know about AFCON 2025 packages
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-inter pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};