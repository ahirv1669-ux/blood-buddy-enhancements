import { Button } from "@/components/ui/button";
import { Heart, Menu, Phone, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Blood Buddy Pro</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link
                to="/requests"
                className={`transition-colors hover:text-primary ${
                  isActive("/requests") ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                Requests
              </Link>
              <Link
                to="/my-donations"
                className={`transition-colors hover:text-primary ${
                  isActive("/my-donations") ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                My Donations
              </Link>
              <Link
                to="/contact"
                className={`transition-colors hover:text-primary ${
                  isActive("/contact") ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                Contact
              </Link>
            </div>
            <Button size="sm" className="ml-4 hidden md:flex" asChild>
              <Link to="/contact">
                <Phone className="mr-2 h-4 w-4" />
                Help
              </Link>
            </Button>
            <Button variant="outline" size="sm" className="ml-2">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="ml-2 md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};