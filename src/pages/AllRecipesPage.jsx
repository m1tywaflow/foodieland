import React from "react";
import { useNavigate } from "react-router-dom"; // 1. импортируем useNavigate
import recipesData, { NewrecipesData } from "../data/recipesData";
import cooking from "../assets/cooking.jpg";
import cooking2 from "../assets/cooking2.jpg";

const AllRecipesPage = () => {
  const manyRecipe = [...recipesData, ...NewrecipesData];
  const navigate = useNavigate(); // 2. инициализируем

  const handleClick = (id) => {
    navigate(`/recipe/${id}`); // 3. переход на нужную страницу
  };

  return (
    <>
      <div className="max-w-6xl mx-auto p-12">
        <h2 className="text-2xl">
          Here you can see all the recipes added to our site, by clicking on the
          card you will go to the page with the recipe itself, where you can
          watch a video of the preparation and all the ingredients you
          need.IMGIMGIMGIGIGIFISDIFSDFHSDJHIMGIMGIMGIMGIMG
        </h2>
      </div>

      <div className="max-w-6xl mx-auto p-4 md:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
    </>
  );
};

export default AllRecipesPage;
