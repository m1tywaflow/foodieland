import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
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
          <Link
            className="hover:text-orange-400 transition duration-300"
            to={"/"}
          >
            <>Home</>
          </Link>
          <Link
            to={"/recipes"}
            className="hover:text-orange-400 transition duration-300"
          >
            Recipes
          </Link>

          <Link
            to={"/blog"}
            className="hover:text-orange-400 transition duration-300"
          >
            Blog
          </Link>
          <Link
            to={"/contact"}
            className="hover:text-orange-400 transition duration-300"
          >
            Contact
          </Link>
          <Link
            to={"/about-us"}
            className="hover:text-orange-400 transition duration-300"
          >
            About us
          </Link>
          <Link
            to={"/guide"}
            className="hover:text-orange-400 transition duration-300"
          >
            Guide
          </Link>
        </div>
        <div className="text-xl flex gap-5 pr-10">
          <Link
            to={"*"}
            className="hover:text-orange-400 transition duration-300"
          >
            <FaFacebookF />
          </Link>

          <Link
            to={"*"}
            className="hover:text-orange-400 transition duration-300"
          >
            <BsTwitter />
          </Link>
          
          <Link
            to={"*"}
            className="hover:text-orange-400 transition duration-300"
          >
            <FiInstagram />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
