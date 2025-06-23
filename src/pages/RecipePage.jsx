import { useParams } from "react-router-dom";
import { useState } from "react";
import recipesData, { NewrecipesData } from "../data/recipesData"; // ✅ импорт обоих массивов
import elipse from "../assets/elipse.jpg";
import women from "../assets/women.jpg";
import { MdOutlineDone } from "react-icons/md";
import InBox from "../components/InBox";

const RecipePage = () => {
  const { id } = useParams();
  const allRecipes = [...recipesData, ...NewrecipesData]; // ✅ объединённый массив
  const recipe = allRecipes.find((r) => r.id === Number(id)); // ✅ работает и с id = 101 и т.д.
  const [showVideo, setShowVideo] = useState(false);

  if (!recipe)
    return <p className="p-8 text-center text-red-600">Recipe not found</p>;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold mb-4">{recipe.title}</h1>

      {/* Author and metadata */}
      <div className="flex flex-col md:flex-row items-start md:items-center text-gray-600 text-sm gap-4 mb-6">
        <div className="flex items-center gap-2">
          <img src={elipse} alt="Author" className="w-6 h-6 rounded-full" />
          <span>{recipe.author || "John Smith"}</span>
          <span>• {recipe.date || "13 March 2022"}</span>
        </div>
        <div className="flex gap-4">
          <span>Prep: {recipe.prepTime || "15 Minutes"}</span>
          <span>Cook: {recipe.cookTime || "15 Minutes"}</span>
          <span>{recipe.category || "Chicken"}</span>
        </div>
      </div>

      {/* Media + Nutrition */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-13 mb-10">
        <div
          className="lg:col-span-2 relative cursor-pointer"
          onClick={() => setShowVideo((v) => !v)}
        >
          {!showVideo ? (
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-auto rounded-xl object-cover"
            />
          ) : (
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="400"
                src={recipe.videoUrl}
                title="Recipe Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowVideo(false);
                }}
                className=" bg-red-600 text-white px-3 py-1 rounded shadow"
              >
                Close video
              </button>
            </div>
          )}
        </div>

        {/* Nutrition Box */}
        <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Nutrition Information</h2>
          <ul className="text-sm space-y-6 font-bold">
            <li>Calories: {recipe.nutrition?.calories || "219.9 kcal"}</li>
            <li>Total Fat: {recipe.nutrition?.fat || "10.7 g"}</li>
            <li>Protein: {recipe.nutrition?.protein || "7.9 g"}</li>
            <li>Carbohydrates: {recipe.nutrition?.carbs || "22.3 g"}</li>
            <li>Cholesterol: {recipe.nutrition?.cholesterol || "37.4 mg"}</li>
          </ul>
          <p className="text-xs text-gray-500 mt-4">
            *Nutrition info is approximate.
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700  leading-relaxed">
        {recipe.description ||
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."}
      </p>

      {/* Ingredients + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Ingredients */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
          {recipe.ingredients?.main && (
            <>
              <h3 className="font-medium mb-2">For main dish</h3>
              <ul className="space-y-2 mb-6">
                {recipe.ingredients.main.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <MdOutlineDone className="text-green-600" />
                    <span> {item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
          {recipe.ingredients?.sauce && (
            <>
              <h3 className="font-medium mb-2">For the sauce</h3>
              <ul className="space-y-2">
                {recipe.ingredients.sauce.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <MdOutlineDone className="text-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Other Recipes (Sidebar) */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Other Recipe</h2>
          <div className="space-y-4">
            {recipe.relatedRecipes?.map((r, idx) => (
              <div
                key={idx}
                className="flex gap-4 cursor-pointer"
                onClick={() => (window.location.href = `/recipe/${r.id}`)}
              >
                <img
                  src={r.image}
                  alt={r.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <p className="font-medium text-sm line-clamp-2">{r.title}</p>
                  <p className="text-xs text-gray-500">By {r.author}</p>
                </div>
              </div>
            )) || (
              <p className="text-sm text-gray-500">
                No related recipes available.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="pt-40">
        <h1 className="font-bold text-3xl">Directions</h1>
        <div className="pt-12">
          <h1 className="text-2xl font-bold">1. Stir-fry on high heat</h1>
          <p className="pt-8 text-xl font-light">
            Cooking on high heat helps sear the ingredients quickly, preserving
            flavor and preventing sogginess. Keep stirring constantly to avoid
            burning.
          </p>
          <img className="pt-12 pl-38" src={women} alt="women-cooking" />
          <p className="pt-12 text-xl font-light">
            A wok distributes heat more evenly and helps create that signature
            smoky flavor known as "wok hei." Give ingredients space to fry, not
            steam. If your pan is too full, it’s better to cook in batches.
          </p>
        </div>
        <div>
          <h1 className="pt-8 text-2xl font-bold">
            2. Keep vegetables slightly crisp
          </h1>
          <p className="pt-8 text-xl font-light">
            Don’t overcook the vegetables — a bit of crunch adds great texture
            and makes the dish feel fresh and balanced.
          </p>
        </div>
        <div>
          <h1 className="pt-8 text-2xl font-bold">3. Taste before serving</h1>
          <p className="pt-8 text-xl font-light">
            Always give your dish a quick taste before serving. You might want
            to adjust the seasoning or add a splash of sauce to enhance the
            flavor.
          </p>
        </div>
        <div>
          <InBox />
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
