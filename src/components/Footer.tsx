import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Youtube, 
  Instagram, 
  Twitter,
  Heart,
  Send
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

const Footer = () => {
  const quickLinks = [
    { name: "About", path: "/about" },
    { name: "Books", path: "/books" },
    { name: "Articles", path: "/articles" },
    { name: "Courses", path: "/courses" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/yogaformodernage", label: "Facebook" },
    { icon: Youtube, href: "https://youtube.com/yogaformodernage", label: "YouTube" },
    { icon: Instagram, href: "https://instagram.com/yogaformodernage", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/yogaformodernage", label: "Twitter" },
  ];

  return (
    <footer className="bg-gradient-earth border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center shadow-sacred">
                <span className="text-white font-bold text-lg">Y</span>
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-foreground">
                  Yoga for Modern Age
                </h3>
                <p className="text-xs text-muted-foreground">
                  Ancient Wisdom, Modern Life
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Bringing timeless Bhakti Yoga wisdom to contemporary seekers through 
              authentic teachings rooted in Vedic tradition.
            </p>
            <Button variant="donate" className="w-full">
              <Heart className="h-4 w-4" />
              Support Our Mission
            </Button>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p>ISKCON Chowpatty</p>
                  <p>Hare Krishna Land</p>
                  <p>Juhu, Mumbai - 400049</p>
                  <p>Maharashtra, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <a 
                  href="mailto:info@yogaformodernage.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  info@yogaformodernage.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <a 
                  href="tel:+912226205090"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 22 2620 5090
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Stay Connected</h4>
            <p className="text-sm text-muted-foreground">
              Subscribe to receive wisdom teachings and event updates.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-background/50"
              />
              <Button variant="sacred" className="w-full">
                <Send className="h-4 w-4" />
                Subscribe
              </Button>
            </form>
            
            {/* Social Links */}
            <div className="pt-4">
              <p className="text-sm font-medium text-foreground mb-3">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-background/50 hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Yoga for Modern Age. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;