import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="border-amber-700 border-2 pb-8">
      <div className="flex justify-between">
        <div className="pl-10">
          <h1 className="text-3xl font-lobster  ">
            Foodieland<span className="text-orange-500">.</span>
          </h1>
          <p className="font-light pt-2">
            Your daily source of delicious inspiration.
          </p>
        </div>
        <div className="flex gap-10 pr-10 text-xl">
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
        </div>
      </div>
      <div className="pl-9 pt-4">
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
    </div>
  );
};
export default Footer;
