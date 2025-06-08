import React from "react";
import RecipeCard from "./RecipeCard";
import { NewrecipesData } from "../data/recipesData";

const NewRecipes = () => {
  return (
    <div className="px-90 py-12">
      <div className="flex gap-50">
        <h1 className="text-4xl font-bold mb-6">
          Try this delicious recipe to make your day
        </h1>
        <p className="w-4xl mt-6 font-light">
          Discover new flavors and easy-to-make meals that fit perfectly into
          your day. From breakfast to dinner, find something tasty that everyone
          will love.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 justify-items-center pt-6">
        {NewrecipesData.map((recipe) => (
          <RecipeCard
            key={recipe.id}
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

export default NewRecipes;
