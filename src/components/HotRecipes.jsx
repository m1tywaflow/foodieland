import React from "react";
import svitok from "../assets/smal-svitok.jpg";
import elipse from "../assets/elipse.jpg";
import chiken from "../assets/baked-chiken.jpg";
import badge from "../assets/Badge.jpg";
import { PiTimerFill } from "react-icons/pi";
import { GiKnifeFork } from "react-icons/gi";
import { FaCirclePlay } from "react-icons/fa6";

const HotRecipes = () => {
  return (
    <div className="bg-[#EAF9FF] py-20 px-10 rounded-3xl">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto">
        {/* Left Side */}
        <div className="w-1/2 space-y-8">
          <div className="flex items-center gap-4">
            <img className="w-8 h-8" src={svitok} alt="small-svitok" />
            <p className="font-bold text-xl">Hot Recipes</p>
          </div>

          <h1 className="text-5xl font-bold leading-tight">
            Spicy delicious <br /> chicken wings
          </h1>

          <p className="text-gray-600 w-[90%]">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>

          <div className="flex gap-6">
            <div className="flex items-center gap-2 bg-sky-100 px-4 py-2 rounded-lg shadow-sm">
              <PiTimerFill className="text-lg" />
              <p className="text-sm font-medium">30 Minutes</p>
            </div>
            <div className="flex items-center gap-2 bg-sky-100 px-4 py-2 rounded-lg shadow-sm">
              <GiKnifeFork className="text-lg" />
              <p className="text-sm font-medium">Chicken</p>
            </div>
          </div>

          <div className="flex items-center pt-6 gap-4">
            <img src={elipse} alt="Avatar" className="w-10 h-10 rounded-full" />
            <div>
              <h1 className="font-bold text-base">John Smith</h1>
              <p className="text-sm text-gray-500">15 March 2025</p>
            </div>
            <button className="flex items-center gap-3 text-white bg-black hover:bg-orange-500 transition duration-300 rounded-lg px-6 py-3 ml-auto">
              <p className="text-[16px]">View Recipes</p>
              <FaCirclePlay className="text-xl" />
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative w-1/2 flex justify-center">
          <img
            src={chiken}
            alt="Baked Chicken"
            className="rounded-2xl w-[90%]"
          />
          <img
            src={badge}
            alt="Badge"
            className="absolute top-[-10px] left-[-150px] w-40 h-40"
          />
        </div>
      </div>
    </div>
  );
};

export default HotRecipes;
