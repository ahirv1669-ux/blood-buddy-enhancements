import { Heart, Search, Building, AlertTriangle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t mt-16">
      <div className="container py-12">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Blood Buddy Pro</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-8 text-sm">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Search className="h-4 w-4" />
              <span>Find Donors</span>
            </Link>
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Building className="h-4 w-4" />
              <span>Blood Banks</span>
            </Link>
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <AlertTriangle className="h-4 w-4" />
              <span>Emergency SOS</span>
            </Link>
            <Link 
              to="/contact" 
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </Link>
          </nav>

          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Blood Buddy Pro. Saving lives through technology.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};