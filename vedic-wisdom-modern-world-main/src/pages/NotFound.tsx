import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-serif font-semibold text-foreground">
            Page Not Found
          </h2>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved to a new location.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button variant="sacred" size="lg" asChild>
            <Link to="/">
              Return to Home
            </Link>
          </Button>
          
          <div className="text-sm text-muted-foreground">
            <p>Or explore our other pages:</p>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              <Link to="/about" className="text-primary hover:underline">About</Link>
              <span>•</span>
              <Link to="/books" className="text-primary hover:underline">Books</Link>
              <span>•</span>
              <Link to="/courses" className="text-primary hover:underline">Courses</Link>
              <span>•</span>
              <Link to="/contact" className="text-primary hover:underline">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
