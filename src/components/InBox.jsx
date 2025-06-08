import React from "react";
import leftImg from "../assets/leftImg.jpg";
import rightImg from "../assets/rightImg.jpg";

const InBox = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f8f9fa]">
      <div className="relative bg-[#eafcff] rounded-3xl py-16 px-4 overflow-hidden w-[1240px]">
        <img
          src={leftImg}
          alt="Left decoration"
          className="absolute bottom-0 left-0 w-60 md:w-80 pointer-events-none select-none"
        />
        <img
          src={rightImg}
          alt="Right decoration"
          className="absolute bottom-0 right-0 w-60 md:w-80 pointer-events-none select-none"
        />

        <div className="text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold">
            Deliciousness to your inbox
          </h1>
          <p className="pt-4 text-lg md:text-xl font-light max-w-xl mx-auto text-gray-600">
            Sign up and never miss a bite of our favorite flavors.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="flex rounded-full overflow-hidden bg-white shadow-md">
              <input
                type="email"
                placeholder="Your email address..."
                className="px-6 py-3 w-64 md:w-80 text-base outline-none placeholder-gray-400"
              />
              <button className="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InBox;
