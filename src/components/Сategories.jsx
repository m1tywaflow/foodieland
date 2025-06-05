import React from "react";
import breakfast from "../assets/breakfast.jpg";
import vegan from "../assets/vegan.jpg";
import meat from "../assets/meat.jpg";
import dessert from "../assets/dessert.jpg";
import lunch from "../assets/lunch.jpg";
import chocolate from "../assets/chocolate.jpg";

const Categories = () => {
  return (
    <div className="bg-white px-10 py-6 rounded-2xl max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-5xl font-bold">Categories</h2>
        <button className="bg-sky-100 text-black px-4 py-2 rounded-lg font-medium hover:bg-sky-200 transition">
          View All Categories
        </button>
      </div>

      {/* Category Items */}
      <div className="flex justify-between gap-6">
        {/* Category Card */}
        {[
          { src: breakfast, title: "Breakfast", bg: "bg-slate-100" },
          { src: vegan, title: "Vegan", bg: "bg-green-50" },
          { src: meat, title: "Meat", bg: "bg-rose-50" },
          { src: dessert, title: "Dessert", bg: "bg-yellow-50" },
          { src: lunch, title: "Lunch", bg: "bg-blue-50" },
          { src: chocolate, title: "Chocolate", bg: "bg-pink-50" },
        ].map(({ src, title, bg }, i) => (
          <div
            key={i}
            className={`${bg} flex flex-col items-center rounded-2xl px-6 py-6 w-36 shadow-sm hover:shadow-lg hover:scale-105 hover:bg-opacity-80 transition duration-200 ease-in-out cursor-pointer group`}
          >
            <img
              className="w-24 h-24 mb-4 transition-transform duration-500 ease-in-out group-hover:rotate-360"
              src={src}
              alt={title}
            />
            <p className="font-medium text-center">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
