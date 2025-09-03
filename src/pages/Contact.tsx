import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@yogaformodernage.com",
      description: "Send us your questions or feedback",
      action: "mailto:info@yogaformodernage.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 22 2620 5090",
      description: "Speak with our team directly",
      action: "tel:+912226205090"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "+91 98765 43210",
      description: "Quick messages and updates",
      action: "https://wa.me/919876543210"
    }
  ];


  const categories = [
    { value: "general", label: "General Inquiry" },
    { value: "courses", label: "Courses & Learning" },
    { value: "events", label: "Events & Workshops" },
    { value: "books", label: "Books & Publications" },
    { value: "media", label: "Media & Content" },
    { value: "donations", label: "Donations & Support" },
    { value: "technical", label: "Technical Support" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Contact <span className="bg-gradient-primary bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're here to support your spiritual journey. Reach out with questions, 
            feedback, or to learn more about our teachings and community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div>
            <Card className="border-border shadow-warm">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-foreground">
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.value} value={category.value}>
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Brief subject of your message"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please share your thoughts, questions, or how we can help you..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" variant="sacred" size="lg" className="w-full">
                    <Send className="h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                Get in Touch
              </h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card key={index} className="border-border hover:shadow-warm transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-gradient-primary rounded-full shadow-sacred">
                            <Icon className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-1">
                              {method.title}
                            </h3>
                            <a 
                              href={method.action}
                              className="text-primary font-medium hover:underline"
                            >
                              {method.details}
                            </a>
                            <p className="text-sm text-muted-foreground mt-1">
                              {method.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* ISKCON Chowpatty Address */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <MapPin className="h-6 w-6 text-primary" />
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">ISKCON Chowpatty</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Hare Krishna Land</p>
                    <p>Juhu, Mumbai - 400049</p>
                    <p>Maharashtra, India</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Temple Hours</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Morning: 4:30 AM - 12:30 PM</p>
                      <p>Evening: 4:00 PM - 9:00 PM</p>
                      <p>Daily Programs Available</p>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  <MapPin className="h-4 w-4" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            {/* Community Information */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Join Our Community</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Connect with fellow seekers on the spiritual path
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    Be part of our growing community of spiritual seekers who support 
                    each other on the journey of self-discovery and divine connection.
                  </p>
                  <p>
                    Join our regular study circles, attend events, and participate in 
                    community service activities that help spread spiritual wisdom.
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn About Community Programs
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-serif font-semibold text-center text-foreground mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  How can I attend events at ISKCON Chowpatty?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Most of our regular programs are open to all. Check our Events page for 
                  specific registration requirements and timings.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  Are the online courses suitable for beginners?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Yes! We offer courses for all levels, from complete beginners to advanced 
                  practitioners. Each course clearly indicates its difficulty level.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  How can I support Yoga for Modern Age?
                </h3>
                <p className="text-sm text-muted-foreground">
                  You can support our mission through donations, volunteering, sharing our 
                  content, or participating in our programs and courses.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  Can I request a private consultation?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Private consultations are available on a limited basis. Please contact 
                  us with your specific needs and we'll guide you accordingly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* About Our Approach */}
        <div className="bg-gradient-earth rounded-2xl p-8">
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-foreground">
              Our Approach to Spiritual Guidance
            </h2>
            <p className="text-muted-foreground">
              We believe in providing authentic, practical spiritual guidance rooted in 
              ancient Vedic wisdom. Our approach combines traditional teachings with 
              modern application to help you on your spiritual journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="sacred" size="lg">
                Learn About Our Philosophy
              </Button>
              <Button variant="outline" size="lg">
                Explore Our Programs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;