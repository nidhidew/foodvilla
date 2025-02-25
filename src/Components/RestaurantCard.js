import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
}) => {
  // console.log(restaurant);
  // const {name,cuisines,lastMileTravelString,cloudinaryImageId} = restaurant.data
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt=""/>
      <h2>{name}</h2>
      <h3>{cuisines.join(" ,")}</h3>
      <h4>{avgRating+" Rating"}</h4>
    </div>
  );
};

export default RestaurantCard;
