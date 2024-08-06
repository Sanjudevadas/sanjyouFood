import RestaurentCard from "./RestaurentCard";
//import { useState } from "react";
const Body = () => {
  return (
    <div className="body-container">
      <div className="filter">
        <button
          onClick={() => {
            console.log("Button Clicked");
          }}
          className="filter-btn"
          onMouseOver={() => {
            console.log("Mouse over");
          }}
        >
          Top rated Restaurents
        </button>
      </div>

      <div className="res-container">
        <RestaurentCard
          resName="Meghna Foods"
          cuisine="North Indian Biriyani"
        />
        <RestaurentCard resName="KFC" cuisine="Burger" />
        <RestaurentCard resName="Nahdi" cuisine="Mandhi" />
      </div>
    </div>
  );
};

export default Body;
