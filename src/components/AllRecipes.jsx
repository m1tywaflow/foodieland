import React from "react";
import RecipeCard from "./RecipeCard";
import  recipesData from "../data/recipesData";
import { Link } from "react-router-dom";

const AllRecipes = () => {
  return (
    <div className="px-90 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
        {[...recipesData].map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            image={recipe.image}
            title={recipe.title}
            time={recipe.time}
            category={recipe.category}
          />
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;
