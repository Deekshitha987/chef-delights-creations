
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-b border-chef-cream sticky top-0 bg-white/90 backdrop-blur-sm z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="font-serif text-2xl font-bold text-chef-darkBrown">
              Chef's Delights
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-chef-terracotta transition-colors">
              Home
            </Link>
            <Link to="/" className="font-medium hover:text-chef-terracotta transition-colors">
              Recipes
            </Link>
            <Link to="/" className="font-medium hover:text-chef-terracotta transition-colors">
              About
            </Link>
            <Link to="/" className="font-medium hover:text-chef-terracotta transition-colors">
              Contact
            </Link>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search recipes..."
                className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-chef-terracotta focus:border-transparent"
              />
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              className="text-chef-darkBrown hover:text-chef-terracotta"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-chef-cream hover:text-chef-terracotta"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-chef-cream hover:text-chef-terracotta"
              onClick={() => setIsMenuOpen(false)}
            >
              Recipes
            </Link>
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-chef-cream hover:text-chef-terracotta"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-chef-cream hover:text-chef-terracotta"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search recipes..."
                  className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-chef-terracotta focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
