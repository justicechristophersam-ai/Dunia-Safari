import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ReservationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    country: "",
    package: "",
    matchDates: "",
    groupSize: "",
    source: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Generate lead ID
    const leadId = `AFCON_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: `Thanks ${formData.fullName.split(' ')[0]}!`,
        description: `We saved your request (Ref: ${leadId}). A travel specialist will reach out via WhatsApp within 24 hours. For urgent questions: +233 XXX.`,
      });
      
      setIsSubmitting(false);
      setFormData({
        fullName: "",
        email: "",
        whatsapp: "",
        country: "",
        package: "",
        matchDates: "",
        groupSize: "",
        source: ""
      });
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="reservation" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Secure your AFCON 2025 travel experience — limited slots available
            </h2>
            <p className="text-lg text-muted-foreground font-inter">
              Reserve your Morocco adventure with a small deposit. We'll handle the rest!
            </p>
          </div>

          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-center text-xl">
                Start Your Morocco Travel Journey
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* WhatsApp */}
                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp Number *</Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                    placeholder="+233 XX XXX XXXX"
                  />
                </div>

                {/* Country */}
                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <Input
                    id="country"
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => handleInputChange("country", e.target.value)}
                    placeholder="Your country"
                  />
                </div>

                {/* Package Selection */}
                <div className="space-y-2">
                  <Label htmlFor="package">Preferred Package *</Label>
                  <Select onValueChange={(value) => handleInputChange("package", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your package" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="match-explore">Match & Explore</SelectItem>
                      <SelectItem value="culture-football">Culture & Football</SelectItem>
                      <SelectItem value="luxury-desert">Luxury Desert Safari</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Match Dates */}
                <div className="space-y-2">
                  <Label htmlFor="matchDates">Preferred Match Dates (Optional)</Label>
                  <Input
                    id="matchDates"
                    type="text"
                    value={formData.matchDates}
                    onChange={(e) => handleInputChange("matchDates", e.target.value)}
                    placeholder="e.g., Quarter finals, Semi finals"
                  />
                </div>

                {/* Group Size */}
                <div className="space-y-2">
                  <Label htmlFor="groupSize">Group Size</Label>
                  <Select onValueChange={(value) => handleInputChange("groupSize", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="How many travelers?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Just me</SelectItem>
                      <SelectItem value="2">2 people</SelectItem>
                      <SelectItem value="3-4">3-4 people</SelectItem>
                      <SelectItem value="5-8">5-8 people</SelectItem>
                      <SelectItem value="9+">9+ people</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* How did you hear about us */}
                <div className="space-y-2">
                  <Label htmlFor="source">How did you hear about us?</Label>
                  <Select onValueChange={(value) => handleInputChange("source", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google Search</SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="friend">Friend/Family</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full cta-shadow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Reserving..." : "Reserve Now — Pay 25%"}
                </Button>

                <p className="text-sm text-muted-foreground text-center font-inter">
                  We will contact you on WhatsApp within 24 hours to confirm. Secure with a small deposit — balance due before travel.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};