import React from "react";
import HotRecipes from "../components/HotRecipes";
import Categories from "../components/Сategories";
import ManyRecipes from "../components/ManyRecipes";
import CanBeChef from "../components/CanBeChef";
const MainPage = () => {
  return (
    <>
      <div>
        <HotRecipes />
        <Categories />
        <ManyRecipes />
        <CanBeChef />
      </div>
    </>
  );
};
export default MainPage;
