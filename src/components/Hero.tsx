import { ArrowRight, Book, PlayCircle, Calendar, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  const quickLinks = [
    { 
      name: "Articles", 
      path: "/articles", 
      icon: ArrowRight, 
      description: "Weekly Insights" 
    },
    { 
      name: "About", 
      path: "/about", 
      icon: Book, 
      description: "Our Mission" 
    },
    { 
      name: "Contact", 
      path: "/contact", 
      icon: Calendar, 
      description: "Get In Touch" 
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Peaceful background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 left-16 w-80 h-80 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary-glow rounded-full blur-2xl"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* About Section - Left Side */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-gradient-orange text-white px-6 py-3 rounded-full text-sm font-medium shadow-orange">
                  ✨ Ancient Wisdom Meets Modern Life
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
                Ancient Vedic Wisdom <br />
                <span className="bg-gradient-orange bg-clip-text text-transparent">for the Modern World</span>
              </h1>
              
              <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-soft">
                <blockquote className="text-lg text-muted-foreground italic leading-relaxed">
                  "The ancient teachings of the Vedas offer profound wisdom that transcends time, 
                  providing guidance and peace in our modern world. Through Bhakti Yoga, we discover 
                  the path to inner transformation and spiritual fulfillment."
                </blockquote>
                <footer className="mt-4 text-sm text-primary font-medium">
                  — Vraja Bihari Das
                </footer>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-gradient-orange hover:shadow-orange hover:scale-105 transition-all duration-300"
                  size="lg" 
                  asChild
                >
                  <Link to="/about">
                    Learn More About Our Mission
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Section - Right Side */}
          <div className="space-y-8 animate-fade-in-right">
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-8 shadow-soft">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-6 text-center">
                Connect With Us
              </h2>
              
              <div className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="p-4 bg-gradient-peaceful rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Email us at</p>
                    <a 
                      href="mailto:info@yogaformodernage.com"
                      className="text-lg font-medium text-primary hover:text-primary-glow transition-colors"
                    >
                      info@yogaformodernage.com
                    </a>
                  </div>
                  
                  <div className="p-4 bg-gradient-peaceful rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Call us at</p>
                    <a 
                      href="tel:+912226205090"
                      className="text-lg font-medium text-primary hover:text-primary-glow transition-colors"
                    >
                      +91 22 2620 5090
                    </a>
                  </div>
                </div>

                <div className="text-center pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-4">
                    Ready to begin your spiritual journey?
                  </p>
                  <Button 
                    className="bg-gradient-orange hover:shadow-orange w-full text-lg py-6"
                    asChild
                  >
                    <Link to="/contact">
                      Get In Touch Today
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center bg-card/60 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                <p className="text-2xl font-bold text-primary">10K+</p>
                <p className="text-xs text-muted-foreground">Students Worldwide</p>
              </div>
              <div className="text-center bg-card/60 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                <p className="text-2xl font-bold text-primary">25+</p>
                <p className="text-xs text-muted-foreground">Years Teaching</p>
              </div>
              <div className="text-center bg-card/60 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                <p className="text-2xl font-bold text-primary">15+</p>
                <p className="text-xs text-muted-foreground">Published Books</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
