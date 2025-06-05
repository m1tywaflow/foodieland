import React from "react";
import { Clock, Utensils } from "lucide-react";

const RecipeCard = ({ image, title, time, category }) => {
  return (
    <div className="bg-[#e8f9ff] rounded-2xl overflow-hidden shadow-md p-4 max-w-xs">
      <img src={image} alt={title} className="rounded-xl mb-4 w-full h-52 object-cover" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {time && (
        <div className="flex items-center text-sm text-gray-600 space-x-4">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-1">
            <Utensils size={16} />
            <span>{category}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
