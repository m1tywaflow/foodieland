import React from "react";
import AllRecipes from "./AllRecipes";
const ManyRecipes = () => {
  return (
    <div className="text-center pt-50 pb-20">
      <div className="max-w-[600px] mx-auto">
        <h1 className="text-5xl font-bold">Simple and tasty recipes</h1>
        <p className="font-light pt-4">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>
      <div className="mt-16">
        <AllRecipes />
      </div>
    </div>
  );
};

export default ManyRecipes;
