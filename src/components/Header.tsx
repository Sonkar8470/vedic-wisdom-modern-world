import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Books", path: "/books" },
    { name: "Articles", path: "/articles" },
    { name: "Media", path: "/media", submenu: [
      { name: "Audio", path: "/media/audio", submenu: [
        { name: "Temple Classes", path: "/media/audio/temple-classes" },
        { name: "Bhagavad Gita Talks", path: "/media/audio/bhagavad-gita" }
      ]},
      { name: "Video", path: "/media/video" },
      { name: "Press", path: "/media/press" }
    ]},
    { name: "Meditation", path: "/meditation" },
    { name: "Events", path: "/events" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-orange rounded-full flex items-center justify-center shadow-orange group-hover:shadow-lg transition-all duration-300">
              <span className="text-primary-foreground font-bold text-lg">Y</span>
            </div>
            <div>
              <h1 className="font-serif font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                Yoga for Modern Age
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">
                Ancient Vedic Wisdom for the Modern World
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:shadow-orange px-3 py-2 rounded-md ${
                  isActivePath(item.path)
                    ? "text-primary bg-accent/50"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/donation"
              className="bg-gradient-orange text-white px-4 py-2 rounded-full font-medium text-sm hover:shadow-orange transition-all duration-300 hover:scale-105"
            >
              Donation
            </Link>
          </nav>


          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium py-2 px-4 rounded-md transition-colors text-left ${
                    isActivePath(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-primary hover:bg-accent"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/donation"
                className="bg-gradient-orange text-white py-2 px-4 rounded-full font-medium text-sm hover:shadow-orange transition-all duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Donation
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;