import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [searchResult, setSearchResult] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const Data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8496217&lng=81.0072193&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await Data.json();
   
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  //Conditional Rendering
  if (listOfRestaurants.length === 0) {
    return (
      <>
        <Shimmer />
      </>
    );
  }

  return (
    <div className="body-container">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchResult}
            onChange={(e) => {
              setSearchResult(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchResult);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListOfRestaurants(filteredList);
          }}
          className="filter-btn"
         
        >
          Top rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
