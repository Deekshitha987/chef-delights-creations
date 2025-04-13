
import { Link } from "react-router-dom";
import { Clock, ChefHat, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface RecipeCardProps {
  id: number;
  title: string;
  image: string;
  prepTime: string;
  cookTime: string;
  difficulty: string;
  category: string;
}

const RecipeCard = ({ id, title, image, prepTime, cookTime, difficulty, category }: RecipeCardProps) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <Link to={`/recipe/${id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2">
            <Button variant="ghost" size="icon" className="bg-white/80 backdrop-blur-sm rounded-full hover:bg-white">
              <Heart className="h-5 w-5 text-chef-terracotta" />
            </Button>
          </div>
          <div className="absolute top-2 left-2">
            <span className="inline-block bg-chef-sage text-white px-3 py-1 text-xs font-semibold rounded-full">
              {category}
            </span>
          </div>
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/recipe/${id}`} className="block">
          <h3 className="font-serif text-xl font-semibold text-chef-darkBrown mb-2 group-hover:text-chef-terracotta transition-colors">
            {title}
          </h3>
        </Link>
        <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>Prep: {prepTime}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>Cook: {cookTime}</span>
          </div>
          <div className="flex items-center">
            <ChefHat size={14} className="mr-1" />
            <span>{difficulty}</span>
          </div>
        </div>
        <Link to={`/recipe/${id}`} className="inline-block">
          <Button className="w-full bg-chef-terracotta hover:bg-chef-terracotta/90 text-white">
            View Recipe
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
