import React from "react";
const Footer = () => {
  return (
    <div className="border-amber-700 border-2">
      <div className="flex justify-between">
        <div className="pl-10">
          <h1 className="text-3xl font-lobster  ">
            Foodieland<span className="text-orange-500">.</span>
          </h1>
          <p className="font-light">
            Your daily source of delicious inspiration.
          </p>
        </div>
        <div className="flex gap-10 pr-10 text-xl">
          <a className=" hover:bg-orange-400 transition duration-200" href="#">Recipes</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <a href="#">About us</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
