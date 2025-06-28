import React from "react";
import { useNavigate } from "react-router-dom"; // 1. импортируем useNavigate
import recipesData, { NewrecipesData } from "../data/recipesData";
const AllRecipesPage = () => {
  const manyRecipe = [...recipesData, ...NewrecipesData];
  const navigate = useNavigate(); // 2. инициализируем

  const handleClick = (id) => {
    navigate(`/recipe/${id}`); // 3. переход на нужную страницу
  };

  return (
    <>
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-8 mb-12">
          <div className="text-lg leading-relaxed text-gray-700 text-center lg:w-2/3">
            Here you can see all the recipes added to our site. By clicking on
            the card you will go to the page with the recipe itself, where you
            can watch a video of the preparation and all the ingredients you
            need.
            <br />
            <br />
            Each recipe is created with care and includes detailed instructions
            to make your cooking experience easier and more enjoyable. Whether
            you're a beginner or an experienced chef, you’ll find something new
            to try.
            <br />
            <br />
            We also provide nutritional information, so you can be confident in
            what you’re eating. Explore our growing collection and get inspired
            to cook something delicious today!
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 md:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-40">
        {manyRecipe.map((recipe, index) => (
          <div
            key={index}
            onClick={() => handleClick(recipe.id)} // 4. добавляем обработчик
            className="cursor-pointer border rounded-lg overflow-hidden shadow hover:shadow-lg transition-transform transform hover:scale-105 duration-300 hover:bg-amber-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title || `Recipe ${index + 1}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-2">
              <h2 className="text-lg font-semibold ">
                {recipe.title || "Untitled Recipe"}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center pt-20 pb-30">
        <h1 className="text-3xl font-light">
          We will add more delicious recipes for you soon..
        </h1>
      </div>
    </>
  );
};

export default AllRecipesPage;
