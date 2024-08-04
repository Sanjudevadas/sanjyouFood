import RestaurentCard from "./RestaurentCard";

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">Search</div>

      <div className="res-container">
        <RestaurentCard
          resName="Meghna Foods"
          cuisine="North Indian Biriyani"
        />
          <RestaurentCard
          resName="KFC"
          cuisine="Burger"
        />
          <RestaurentCard
          resName="Nahdi"
          cuisine="Mandhi"
        />
      </div>
    </div>
  );
};

export default Body;
