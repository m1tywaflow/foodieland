import React from "react";
import chef from "../assets/chef.jpg";
import { Link } from "react-router-dom";

const CanBeChef = () => {
  return (
    <div className="bg-white px-10 py-16 rounded-2xl max-w-[1440px] mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Левый блок с текстом */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold leading-tight">
            Everyone can be a chef in their own kitchen
          </h1>
          <p className="text-lg font-light pt-6">
            You don't need a fancy kitchen or special training — just good
            ingredients and a love for cooking. Start small, try new things, and
            enjoy the process!
          </p>
        </div>
        <Link
          to={"/guide"}
          className="mt-10 w-[250px] h-[30px] rounded-2xl bg-black text-white hover:bg-orange-400 transition duration-200 text-center"
        >
          Learn More
        </Link>
        {/* Правый блок с изображением */}
        <div className="w-full lg:w-[660px]">
          <img
            src={chef}
            alt="chef"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default CanBeChef;
