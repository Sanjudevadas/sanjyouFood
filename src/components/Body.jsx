import RestaurentCard from "./RestaurentCard";

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">
Search
      </div>

      <div className="res-container">
        <RestaurentCard/>
      </div>
    </div>
  );
};

export default Body;
