
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-chef-darkBrown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold">Chef's Delights</h3>
            <p className="text-gray-300 text-sm">
              Elevating home cooking with professional recipes, techniques, and inspiration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-chef-terracotta transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-chef-terracotta transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-chef-terracotta transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-chef-terracotta transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-chef-terracotta transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-chef-terracotta transition-colors">
                  All Recipes
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-chef-terracotta transition-colors">
                  About Chef
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-chef-terracotta transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Recipe Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-chef-terracotta transition-colors">
                  Breakfast
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-chef-terracotta transition-colors">
                  Main Courses
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-chef-terracotta transition-colors">
                  Desserts
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-chef-terracotta transition-colors">
                  Vegetarian
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-chef-terracotta transition-colors">
                  Quick & Easy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Newsletter</h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to get the latest recipes and cooking tips.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-chef-terracotta"
              />
              <button
                type="submit"
                className="w-full bg-chef-terracotta hover:bg-chef-terracotta/90 text-white py-2 rounded font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Chef's Delights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
