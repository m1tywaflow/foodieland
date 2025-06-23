import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-64 rounded-lg mb-8"
      style={{ backgroundImage: "url('/images/banner.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center p-4">
        <h1 className="text-3xl font-bold">Discover Delicious Recipes</h1>
        <p className="mt-2 text-sm">
          Explore a variety of meals from around the world
        </p>
        <Link
          to="/recipes"
          className="mt-4 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-full font-semibold hover:text-white transition duration-300"
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
