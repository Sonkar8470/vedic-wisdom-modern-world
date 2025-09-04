import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/", section: null },
    { name: "About", path: "/", section: "about" },
    { name: "Articles", path: "/", section: "articles" },
    { name: "Contact", path: "/", section: "contact" },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setIsMenuOpen(false);
    
    if (location.pathname === "/") {
      if (item.name === "Home") {
        // Scroll to top of page
        window.scrollTo({ 
          top: 0, 
          behavior: 'smooth' 
        });
      } else if (item.section) {
        // Smooth scroll to section on homepage
        const element = document.getElementById(item.section);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    } else {
      // Navigate to page
      navigate(item.path);
    }
  };

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold group-hover:shadow-lg transition-all duration-300">
              <span className="text-primary-foreground font-bold text-lg">Y</span>
            </div>
            <div>
              <h1 className="font-serif font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                Yoga for Modern Age
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">
                Ancient Wisdom, Modern Life
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:shadow-gold bg-transparent border-none outline-none cursor-pointer ${
                  isActivePath(item.path)
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </button>
            ))}
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
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`text-sm font-medium py-2 px-4 rounded-md transition-colors text-left bg-transparent border-none outline-none cursor-pointer ${
                    isActivePath(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-primary hover:bg-accent"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;