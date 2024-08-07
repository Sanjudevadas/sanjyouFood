import  { useEffect, useState } from 'react';
import RestaurentCard from './RestaurentCard';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const Data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8496217&lng=81.0072193&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );

    const json = await Data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
  };

  console.log('body rendered');
  return (
    <div className="body-container">
      <div className="filter">
        <button
          onClick={() => {
            console.log('Button Clicked');
          }}
          className="filter-btn"
          onMouseOver={() => {
            console.log('Mouse over');
          }}
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
