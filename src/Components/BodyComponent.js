import React, { useState } from "react";
import { foodDetails } from "../config";
import RestaurantCard from "./RestaurantCard";

function filterData(searchTxt, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchTxt)
  );
}

const BodyComponent = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [restaurants, setRestaurants] = useState(foodDetails);
  return (
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
            const data = filterData(searchTxt, restaurants);
            //update the state restraunts
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;

/*

 
 */
