import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";

const RestrauntPageComponent = () => {
  const { id } = useParams();

  const [restaurantMenu, setRestaurantMenu] = useState();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9046136&lng=77.614948&restaurantId=" +
        id
    );
    //440147
    const json = await data.json();
    console.log(json.data);
    console.log(
      Object.values(
        json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
          ?.card?.card?.itemCards
      )
    );

    setRestaurantMenu(json?.data);
  }
  return (
    <div>
      <h3>Restaurant id: {id}</h3>
      {restaurantMenu?.cards?.[2]?.card?.card?.info?.name ? (
        <h1>{restaurantMenu.cards[2].card.card.info.name}</h1>
      ) : (
        <p>Loading...</p>
      )}
      {restaurantMenu?.cards?.[2]?.card?.card?.info?.cloudinaryImageId ? (
        <img
          src={
            IMG_CDN_URL +
            restaurantMenu.cards[2].card.card.info.cloudinaryImageId
          }
        />
      ) : (
        <p>Loading...</p>
      )}
      {restaurantMenu?.cards?.[2]?.card?.card?.info?.areaName ? (
        <h3>{restaurantMenu.cards[2].card.card.info.areaName}</h3>
      ) : (
        <p>Loading...</p>
      )}
      {restaurantMenu?.cards?.[2]?.card?.card?.info?.city ? (
        <h3>{restaurantMenu.cards[2].card.card.info.city}</h3>
      ) : (
        <p>Loading...</p>
      )}
      <h1>Menu</h1>

      <ul>
        {restaurantMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards?.map(
          (item, index) => (
            <li key={index}>{item?.card?.info?.name}</li>
          )
        )}
      </ul>
    </div>
  );
};

export default RestrauntPageComponent;
