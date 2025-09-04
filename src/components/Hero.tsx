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
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 0%, transparent 50%), 
                            radial-gradient(circle at 75% 75%, hsl(var(--primary)) 0%, transparent 50%)`,
            backgroundSize: '400px 400px'
          }} />
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-gradient-gold text-primary-foreground px-6 py-3 rounded-full text-sm font-medium shadow-gold hover-glow">
                  ✨ Welcome to Spiritual Transformation
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                 Vedic Wisdom 
                <span className="block bg-gradient-gold bg-clip-text text-transparent drop-shadow-lg">
                  for the Modern World
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Discover timeless teachings of Bhakti Yoga that bring peace, purpose, 
                and spiritual fulfillment to contemporary life. Join thousands on the 
                journey of self-discovery and divine connection.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-gold text-primary-foreground hover:shadow-gold hover:scale-105 transition-all duration-300 group"
                size="xl" 
                asChild
              >
                <Link to="/articles">
                  <ArrowRight className="h-5 w-5" />
                  Start Your Journey
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-gold transition-all duration-300"
                size="xl" 
                asChild
              >
                <Link to="/about">
                  Learn About Our Mission
                </Link>
              </Button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="text-center group">
                <p className="text-2xl font-bold text-primary group-hover:text-primary-glow transition-colors">10K+</p>
                <p className="text-sm text-muted-foreground">Students Worldwide</p>
              </div>
              <div className="text-center group">
                <p className="text-2xl font-bold text-primary group-hover:text-primary-glow transition-colors">25+</p>
                <p className="text-sm text-muted-foreground">Years Teaching</p>
              </div>
              <div className="text-center group">
                <p className="text-2xl font-bold text-primary group-hover:text-primary-glow transition-colors">15+</p>
                <p className="text-sm text-muted-foreground">Published Books</p>
              </div>
            </div>
          </div>

          {/* Quick Links Cards */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-serif font-semibold text-foreground text-center lg:text-left">
              Explore Sacred Teachings
            </h2>
            
            <div className="grid gap-4">
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="group flex items-center gap-4 p-6 bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl hover:shadow-gold hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:bg-card/80"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-3 bg-gradient-gold rounded-full shadow-gold group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {link.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {link.description}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
