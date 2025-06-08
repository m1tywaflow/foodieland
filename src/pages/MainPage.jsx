import React from "react";
import HotRecipes from "../components/HotRecipes";
import Categories from "../components/Сategories";
import ManyRecipes from "../components/ManyRecipes";
import CanBeChef from "../components/CanBeChef";
import InstaSection from "../components/InstaSection";
import MoreRecipes from "../components/MoreRecipes";
const MainPage = () => {
  return (
    <>
      <div>
        <HotRecipes />
        <Categories />
        <ManyRecipes />
        <CanBeChef />
        <InstaSection/>
        <MoreRecipes/>
      </div>
    </>
  );
};
export default MainPage;
