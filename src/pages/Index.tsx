import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import heroBanner from "@/assets/hero-banner.jpg";
import vrajaImage from "@/assets/vraja-bihari-das.jpg";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  // Sample articles data
  const articles = [
    {
      id: 1,
      title: "Finding Inner Peace in Turbulent Times",
      excerpt: "Discover practical techniques from ancient Vedic wisdom to maintain equilibrium and spiritual balance.",
      image: heroBanner,
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "The Power of Gratitude in Bhakti Yoga",
      excerpt: "Learn how cultivating genuine gratitude can transform your spiritual practice and deepen your connection.",
      image: heroBanner,
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Mindful Living: Integrating Spirituality into Daily Routine",
      excerpt: "Practical strategies for bringing spiritual awareness into everyday activities.",
      image: heroBanner,
      readTime: "10 min read"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % articles.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [articles.length]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Contact form submitted");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
              Vedic Wisdom 
              <span className="block bg-gradient-gold bg-clip-text text-transparent">
                for the Modern World
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Discover timeless teachings of Bhakti Yoga that bring peace, purpose, 
              and spiritual fulfillment to contemporary life.
            </p>

            <div className="pt-8">
              <Button 
                className="bg-gradient-gold text-primary-foreground hover:shadow-gold hover:scale-105 transition-all duration-300 group text-lg px-8 py-6"
                size="lg"
                asChild
              >
                <Link to="/articles">
                  Start Your Journey
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative animate-fade-in-left">
                <div className="absolute -inset-4 bg-gradient-gold rounded-2xl blur-lg opacity-20"></div>
                <img
                  src={vrajaImage}
                  alt="Vraja Bihari Das"
                  className="relative w-full rounded-2xl shadow-gold"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6 animate-fade-in-right">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                About Our Mission
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Yoga for Modern Age is dedicated to bringing ancient Vedic wisdom into contemporary life, 
                making timeless spiritual teachings accessible to modern seekers worldwide.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Led by Vraja Bihari Das, a respected spiritual teacher and full-time monk at ISKCON Chowpatty, 
                we bridge the gap between ancient wisdom and modern application.
              </p>

              <div className="pt-4">
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-gold transition-all duration-300"
                  size="lg"
                  asChild
                >
                  <Link to="/about">
                    Learn More About Us
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Latest <span className="bg-gradient-gold bg-clip-text text-transparent">Articles</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Weekly insights and teachings on Bhakti Yoga, spiritual practice, and applying 
              ancient Vedic wisdom to modern life challenges.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {articles.map((article) => (
                  <div key={article.id} className="w-full flex-shrink-0">
                    <Card className="border-border/50 bg-card/60 backdrop-blur-sm shadow-warm hover:shadow-gold transition-all duration-300">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative h-64 md:h-auto">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover rounded-l-2xl"
                          />
                        </div>
                        <CardContent className="p-8 flex flex-col justify-center">
                          <div className="space-y-4">
                            <div className="text-sm text-primary font-medium">
                              {article.readTime}
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-foreground leading-tight">
                              {article.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {article.excerpt}
                            </p>
                            <Button 
                              className="bg-gradient-gold text-primary-foreground hover:shadow-gold hover:scale-105 transition-all duration-300 w-fit"
                              asChild
                            >
                              <Link to="/articles">
                                Read More
                                <ArrowRight className="h-4 w-4 ml-2" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-gold transition-all duration-300"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-gold transition-all duration-300"
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {articles.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-primary shadow-gold' 
                      : 'bg-muted-foreground/30 hover:bg-primary/50'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Get In <span className="bg-gradient-gold bg-clip-text text-transparent">Touch</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to start your spiritual journey? We're here to support you every step of the way.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-border/50 bg-card/60 backdrop-blur-sm shadow-warm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                    Send us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          className="border-border/50 focus:border-primary focus:ring-primary/20"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          className="border-border/50 focus:border-primary focus:ring-primary/20"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you on your spiritual journey?"
                        rows={5}
                        className="border-border/50 focus:border-primary focus:ring-primary/20"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="bg-gradient-gold text-primary-foreground hover:shadow-gold hover:scale-105 transition-all duration-300 w-full"
                      size="lg"
                    >
                      Send Message
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info & Social Links */}
              <div className="space-y-8">
                {/* Contact Information */}
                <Card className="border-border/50 bg-card/60 backdrop-blur-sm shadow-warm">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                      Contact Information
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground">Address</h4>
                          <p className="text-muted-foreground">
                            ISKCON Chowpatty, Hare Krishna Land<br />
                            Juhu, Mumbai - 400049<br />
                            Maharashtra, India
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Mail className="h-6 w-6 text-primary" />
                        <div>
                          <h4 className="font-semibold text-foreground">Email</h4>
                          <a 
                            href="mailto:info@yogaformodernage.com"
                            className="text-primary hover:text-primary-glow transition-colors"
                          >
                            info@yogaformodernage.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Phone className="h-6 w-6 text-primary" />
                        <div>
                          <h4 className="font-semibold text-foreground">Phone</h4>
                          <a 
                            href="tel:+912226205090"
                            className="text-primary hover:text-primary-glow transition-colors"
                          >
                            +91 22 2620 5090
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <Card className="border-border/50 bg-card/60 backdrop-blur-sm shadow-warm">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                      Follow Us
                    </h3>
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-gold transition-all duration-300"
                      >
                        <Facebook className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-gold transition-all duration-300"
                      >
                        <Twitter className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-gold transition-all duration-300"
                      >
                        <Instagram className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-gold transition-all duration-300"
                      >
                        <Youtube className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
