
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-chef-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-chef-darkBrown leading-tight mb-4">
              Culinary Masterpieces <br />
              <span className="text-chef-terracotta">Made Simple</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Discover exceptional recipes crafted with passion by our expert chef. 
              From traditional classics to innovative creations, elevate your cooking journey.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-chef-terracotta hover:bg-chef-terracotta/90 text-white px-6 py-2 rounded-md">
                Explore Recipes
              </Button>
              <Button variant="outline" className="border-chef-terracotta text-chef-terracotta hover:bg-chef-terracotta/10">
                About Chef <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
                alt="Chef preparing a meal" 
                className="rounded-lg shadow-xl max-h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-sm text-gray-600">Featured Recipe</div>
                <div className="font-serif font-medium text-chef-darkBrown">Mediterranean Grilled Salmon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
