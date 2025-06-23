import React from "react";
import HotRecipes from "../components/HotRecipes";
import Categories from "../components/Сategories";
import ManyRecipes from "../components/ManyRecipes";
import CanBeChef from "../components/CanBeChef";
import InstaSection from "../components/InstaSection";
import MoreRecipes from "../components/MoreRecipes";
import InBox from "../components/InBox";
import HeroSection from "../components/HeroSection";

const MainPage = () => {
  return (
    <>
      <div>
        <HotRecipes />
        <Categories />
        <ManyRecipes />
        <CanBeChef />
        <HeroSection/>
        <InstaSection/>
        <InBox/>
        
      </div>
    </>
  );
};
export default MainPage;
