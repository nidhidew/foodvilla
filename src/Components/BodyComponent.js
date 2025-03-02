import React, { useEffect, useState } from "react";
import { foodDetails } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";

function filterData(searchTxt, allRestaurants) {
  return allRestaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchTxt)
  );
}

const BodyComponent = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948"
    );
    const json = await data.json();
    console.log(json);    
    console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);    
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if(!allRestaurants) {
    return <h1>No Restaurants</h1>
  }

  if(filteredRestaurants?.length === 0){
    return <h1>0 Search Results</h1>
  }

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchTxt, allRestaurants);
            //update the state restraunts
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
              <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;

/*

*/
