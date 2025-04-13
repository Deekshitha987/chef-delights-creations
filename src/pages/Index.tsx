
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedRecipes from "@/components/FeaturedRecipes";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChefHat, Clock, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <FeaturedRecipes />
      
      {/* About the Chef Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80" 
                alt="Chef Portrait" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-chef-darkBrown mb-4">Meet Chef Michael</h2>
              <p className="text-gray-700 mb-6">
                With over 15 years of culinary experience across Europe and Asia, Chef Michael brings a 
                unique perspective to traditional recipes. His passion for locally-sourced ingredients 
                and sustainable cooking practices defines his approach to modern cuisine.
              </p>
              <p className="text-gray-700 mb-6">
                After training at the prestigious Culinary Institute of Paris and working in Michelin-starred 
                restaurants, he now shares his knowledge and techniques to help home cooks create 
                restaurant-quality meals in their own kitchens.
              </p>
              <Button className="bg-chef-terracotta hover:bg-chef-terracotta/90 text-white">
                Read Full Bio
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cooking Tips Section */}
      <section className="py-16 bg-chef-cream/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-chef-darkBrown mb-4">Essential Cooking Tips</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional insights to elevate your cooking skills and bring out the best flavors in every dish.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-chef-terracotta/10 rounded-full flex items-center justify-center mb-4">
                <ChefHat className="text-chef-terracotta" size={24} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-chef-darkBrown mb-3">Knife Skills</h3>
              <p className="text-gray-600">
                Master the fundamental cutting techniques that professional chefs use to ensure consistency and safety in the kitchen.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-chef-terracotta/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-chef-terracotta" size={24} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-chef-darkBrown mb-3">Timing & Mise en Place</h3>
              <p className="text-gray-600">
                Learn the art of preparation and timing to manage complex recipes with ease and precision.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-chef-terracotta/10 rounded-full flex items-center justify-center mb-4">
                <Users className="text-chef-terracotta" size={24} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-chef-darkBrown mb-3">Flavor Pairing</h3>
              <p className="text-gray-600">
                Discover how to combine ingredients that complement each other to create balanced and harmonious dishes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
