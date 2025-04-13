
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Clock, ChefHat, Users, Printer, Bookmark, Share2, Star } from "lucide-react";
import { toast } from "sonner";

// Sample recipe data (in a real app, this would come from an API)
const recipeData = {
  id: 1,
  title: "Mediterranean Grilled Salmon",
  image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  description: "This Mediterranean-inspired grilled salmon is infused with the flavors of lemon, garlic, and fresh herbs. The fish is marinated, then grilled to perfection for a healthy, flavorful meal.",
  prepTime: "15 minutes",
  cookTime: "20 minutes",
  servings: 4,
  difficulty: "Medium",
  chef: "Michael Johnson",
  ingredients: [
    "4 salmon fillets (6 oz each)",
    "3 tablespoons olive oil",
    "2 tablespoons lemon juice",
    "3 cloves garlic, minced",
    "1 tablespoon fresh dill, chopped",
    "1 tablespoon fresh parsley, chopped",
    "1 teaspoon dried oregano",
    "1/2 teaspoon sea salt",
    "1/4 teaspoon black pepper",
    "1 lemon, sliced into rounds",
    "1/4 cup olives, chopped (optional)"
  ],
  instructions: [
    "In a small bowl, combine olive oil, lemon juice, minced garlic, dill, parsley, oregano, salt, and pepper to make the marinade.",
    "Place salmon fillets in a shallow dish and pour the marinade over them. Turn to coat both sides. Cover and refrigerate for 30 minutes (or up to 2 hours for stronger flavor).",
    "Preheat grill to medium-high heat (about 375°F to 400°F).",
    "Oil the grill grates to prevent sticking.",
    "Remove salmon from the marinade and place on the grill, skin-side down if your fillets have skin.",
    "Grill for 4-5 minutes, then carefully flip and grill for another 3-4 minutes until the salmon is opaque and flakes easily with a fork.",
    "For a nice presentation, serve with lemon slices and sprinkle with additional fresh herbs.",
    "If using, garnish with chopped olives for an extra Mediterranean touch."
  ],
  notes: "For an oven-baked version, preheat oven to 400°F (200°C) and bake for 12-15 minutes. You can also wrap the salmon in foil with the marinade for a more intense flavor.",
  tags: ["Seafood", "Mediterranean", "Healthy", "Gluten-Free", "High-Protein"]
};

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [servings, setServings] = useState(recipeData.servings);
  
  // In a real app, you would fetch the recipe based on the ID
  // For this example, we'll just use the sample data
  
  const handlePrint = () => {
    window.print();
  };
  
  const handleSave = () => {
    toast.success("Recipe saved to your collection");
  };
  
  const handleShare = () => {
    toast.success("Share link copied to clipboard");
  };
  
  const adjustServings = (amount: number) => {
    const newServings = servings + amount;
    if (newServings >= 1) {
      setServings(newServings);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-chef-darkBrown mb-4">
            {recipeData.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-6">
            <span className="flex items-center">
              <ChefHat size={16} className="mr-1" />
              By Chef {recipeData.chef}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-chef-terracotta"></span>
            <span className="flex items-center">
              <Clock size={16} className="mr-1" />
              Prep: {recipeData.prepTime}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-chef-terracotta"></span>
            <span className="flex items-center">
              <Clock size={16} className="mr-1" />
              Cook: {recipeData.cookTime}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-chef-terracotta"></span>
            <span className="flex items-center">
              <ChefHat size={16} className="mr-1" />
              {recipeData.difficulty}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {recipeData.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-chef-sage/20 text-chef-sage font-medium px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="relative mb-8">
          <img 
            src={recipeData.image} 
            alt={recipeData.title}
            className="w-full h-[400px] object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-4 right-4 flex space-x-2">
            <Button 
              onClick={handlePrint}
              variant="outline"
              size="icon"
              className="bg-white hover:bg-gray-100 text-chef-darkBrown border-gray-200"
            >
              <Printer size={18} />
            </Button>
            <Button 
              onClick={handleSave}
              variant="outline"
              size="icon"
              className="bg-white hover:bg-gray-100 text-chef-darkBrown border-gray-200"
            >
              <Bookmark size={18} />
            </Button>
            <Button 
              onClick={handleShare}
              variant="outline"
              size="icon"
              className="bg-white hover:bg-gray-100 text-chef-darkBrown border-gray-200"
            >
              <Share2 size={18} />
            </Button>
          </div>
        </div>
        
        <div className="mb-10">
          <p className="text-gray-700 leading-relaxed">
            {recipeData.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="bg-chef-cream/30 p-4 rounded-lg flex flex-col items-center justify-center">
            <Clock size={24} className="text-chef-terracotta mb-2" />
            <div className="text-sm text-gray-600">Total Time</div>
            <div className="font-medium">
              {recipeData.prepTime.split(" ")[0] + recipeData.cookTime.split(" ")[0]} minutes
            </div>
          </div>
          <div className="bg-chef-cream/30 p-4 rounded-lg flex flex-col items-center justify-center">
            <ChefHat size={24} className="text-chef-terracotta mb-2" />
            <div className="text-sm text-gray-600">Difficulty</div>
            <div className="font-medium">{recipeData.difficulty}</div>
          </div>
          <div className="bg-chef-cream/30 p-4 rounded-lg flex flex-col items-center justify-center">
            <Users size={24} className="text-chef-terracotta mb-2" />
            <div className="text-sm text-gray-600">Servings</div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => adjustServings(-1)}
                className="w-6 h-6 flex items-center justify-center bg-white rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                -
              </button>
              <span className="font-medium">{servings}</span>
              <button 
                onClick={() => adjustServings(1)}
                className="w-6 h-6 flex items-center justify-center bg-white rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-serif font-semibold text-chef-darkBrown mb-4">Ingredients</h2>
            <ul className="space-y-2">
              {recipeData.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full border border-chef-terracotta flex-shrink-0 mt-0.5"></div>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h2 className="text-2xl font-serif font-semibold text-chef-darkBrown mb-4">Instructions</h2>
            <ol className="space-y-4">
              {recipeData.instructions.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-chef-terracotta text-white flex items-center justify-center font-medium">
                    {index + 1}
                  </div>
                  <p className="pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
        
        {recipeData.notes && (
          <div className="bg-chef-cream/30 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-serif font-semibold text-chef-darkBrown mb-2">Chef's Notes</h3>
            <p className="text-gray-700">{recipeData.notes}</p>
          </div>
        )}
        
        <div className="border-t border-gray-200 pt-8 mb-12">
          <h3 className="text-xl font-serif font-semibold text-chef-darkBrown mb-4">Rate this Recipe</h3>
          <div className="flex items-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button key={rating} className="text-gray-300 hover:text-yellow-400">
                <Star size={24} className="fill-current" />
              </button>
            ))}
          </div>
          <textarea
            placeholder="Share your experience with this recipe..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chef-terracotta"
            rows={4}
          />
          <Button className="mt-4 bg-chef-terracotta hover:bg-chef-terracotta/90 text-white">
            Submit Review
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RecipeDetail;
