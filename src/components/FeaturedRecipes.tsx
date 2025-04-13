
import RecipeCard, { RecipeCardProps } from "./RecipeCard";

// Sample recipe data
const recipes: RecipeCardProps[] = [
  {
    id: 1,
    title: "Mediterranean Grilled Salmon",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    prepTime: "15 min",
    cookTime: "20 min",
    difficulty: "Medium",
    category: "Seafood"
  },
  {
    id: 2,
    title: "Classic Tiramisu",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
    prepTime: "30 min",
    cookTime: "4 hours",
    difficulty: "Hard",
    category: "Dessert"
  },
  {
    id: 3,
    title: "Butternut Squash Risotto",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    prepTime: "20 min",
    cookTime: "35 min",
    difficulty: "Medium",
    category: "Vegetarian"
  },
  {
    id: 4,
    title: "Spicy Korean Bibimbap",
    image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    prepTime: "25 min",
    cookTime: "15 min",
    difficulty: "Easy",
    category: "Asian"
  },
  {
    id: 5,
    title: "Homemade Margherita Pizza",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    prepTime: "2 hours",
    cookTime: "10 min",
    difficulty: "Medium",
    category: "Italian"
  },
  {
    id: 6,
    title: "Beef Wellington",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    prepTime: "45 min",
    cookTime: "40 min",
    difficulty: "Hard",
    category: "Meat"
  }
];

const FeaturedRecipes = () => {
  return (
    <div className="bg-chef-cream/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-chef-darkBrown mb-4">Featured Recipes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our chef's selection of exceptional recipes, crafted with seasonal ingredients and creative techniques.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedRecipes;
