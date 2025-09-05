import { Button } from "@/components/ui/button";
import { Heart, Menu, Phone, User, Sun, Moon, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();

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
                to="/"
                className={`transition-colors hover:text-primary ${
                  isActive("/") ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                Home
              </Link>
              <Link
                to="/donate"
                className={`transition-colors hover:text-primary ${
                  isActive("/donate") ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                Donate
              </Link>
              <Link
                to="/requests"
                className={`transition-colors hover:text-primary ${
                  isActive("/requests") ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                Request Blood
              </Link>
              <Link
                to="/about"
                className={`transition-colors hover:text-primary ${
                  isActive("/about") ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                About
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
            {/* Theme Toggle */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleTheme}
              className="ml-4"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
            
            {/* User Menu */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="ml-2">
                    <User className="h-4 w-4 mr-2" />
                    {user?.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/my-donations">My Donations</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/leaderboard">Leaderboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="text-red-600">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="outline" size="sm" className="ml-2" asChild>
                <Link to="/login">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Link>
              </Button>
            )}
            <Button variant="ghost" size="sm" className="ml-2 md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};