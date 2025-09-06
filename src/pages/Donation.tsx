import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Heart, Users, BookOpen, Home } from "lucide-react";

const Donation = () => {
  const [formData, setFormData] = useState({
    amount: '',
    donorName: '',
    donorEmail: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDonation = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      const { error } = await supabase
        .from('donations')
        .insert({
          user_id: user?.id || null,
          donor_name: formData.donorName,
          donor_email: formData.donorEmail,
          amount: parseFloat(formData.amount),
          payment_status: 'pending'
        });

      if (error) throw error;

      toast({
        title: "Thank You!",
        description: "Your donation has been recorded. You will be redirected to payment processing.",
      });

      // Here you would typically redirect to payment processing (Stripe, Razorpay, etc.)
      // For now, we'll just reset the form
      setFormData({
        amount: '',
        donorName: '',
        donorEmail: '',
        message: ''
      });

    } catch (error) {
      console.error('Error processing donation:', error);
      toast({
        title: "Error",
        description: "There was an error processing your donation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const quickAmounts = [25, 50, 100, 250, 500];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Support Our Mission
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your generous donations help us continue sharing ancient Vedic wisdom and supporting 
              spiritual seekers on their transformative journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Impact Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                  Your Impact
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Educational Resources</h3>
                      <p className="text-muted-foreground">
                        Fund the creation and distribution of spiritual books, meditation guides, 
                        and educational materials.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Community Programs</h3>
                      <p className="text-muted-foreground">
                        Support workshops, retreats, and community events that bring people 
                        together in spiritual practice.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <Home className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Temple Maintenance</h3>
                      <p className="text-muted-foreground">
                        Help maintain our sacred spaces and facilities that serve as centers 
                        for spiritual learning and practice.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Donation Form */}
            <div>
              <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-foreground flex items-center gap-2">
                    <Heart className="w-6 h-6 text-primary" />
                    Make a Donation
                  </CardTitle>
                  <CardDescription>
                    Every contribution, no matter the size, makes a meaningful difference in our mission.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleDonation} className="space-y-6">
                    <div>
                      <Label htmlFor="amount">Donation Amount ($)</Label>
                      <div className="space-y-3">
                        <div className="grid grid-cols-5 gap-2">
                          {quickAmounts.map((amount) => (
                            <Button
                              key={amount}
                              type="button"
                              variant="outline"
                              onClick={() => setFormData({ ...formData, amount: amount.toString() })}
                              className={`${
                                formData.amount === amount.toString() 
                                  ? 'bg-primary text-primary-foreground' 
                                  : ''
                              }`}
                            >
                              ${amount}
                            </Button>
                          ))}
                        </div>
                        <Input
                          id="amount"
                          name="amount"
                          type="number"
                          placeholder="Enter custom amount"
                          value={formData.amount}
                          onChange={handleInputChange}
                          required
                          min="1"
                          step="0.01"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="donorName">Full Name</Label>
                        <Input
                          id="donorName"
                          name="donorName"
                          value={formData.donorName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="donorEmail">Email Address</Label>
                        <Input
                          id="donorEmail"
                          name="donorEmail"
                          type="email"
                          value={formData.donorEmail}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Share your thoughts or dedication..."
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-orange hover:shadow-orange text-lg py-6"
                    >
                      {loading ? "Processing..." : `Donate $${formData.amount || '0'}`}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center">
            <Card className="bg-card/60 backdrop-blur-sm border-border/30 inline-block px-8 py-6">
              <p className="text-muted-foreground">
                All donations are secure and tax-deductible. You will receive an email receipt 
                for your records after completing your donation.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;