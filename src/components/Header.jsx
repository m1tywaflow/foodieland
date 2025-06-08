import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
const Header = () => {
  return (
    <header>
      <div className="flex justify-between pt-4">
        <div>
          <h1 className="text-4xl font-lobster pl-10">
            Foodieland<span className="text-orange-500">.</span>
          </h1>
        </div>
        <div className="text-xl flex gap-10">
          <a href="#" className="hover:text-orange-400 transition duration-300">
            Home
          </a>
          <a href="#" className="hover:text-orange-400 transition duration-300">
            Recipes
          </a>
          <a href="#" className="hover:text-orange-400 transition duration-300">
            Blog
          </a>
          <a href="#" className="hover:text-orange-400 transition duration-300">
            Contact
          </a>
          <a href="#" className="hover:text-orange-400 transition duration-300">
            About us
          </a>
        </div>
        <div className="text-xl flex gap-5 pr-10">
          <a href="#" className="text-2xl hover:text-orange-400">
            <FaFacebookF />
          </a>
          <a href="#" className="text-2xl hover:text-orange-400">
            <BsTwitter />
          </a>
          <a href="#" className="text-2xl hover:text-orange-400">
            <FiInstagram />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
