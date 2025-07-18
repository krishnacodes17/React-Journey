import { useEffect, useState } from "react";
import { BodyCard } from "./BodyCard";

export const Bodyproject = () => {
  const [zomatoData, SetZomatoData] = useState([]);

  const fatchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=21.99740&lng=79.00110&carousel=true&third_party_vendor=1"
      );
      const json = await data.json();
    //   console.log(json);

      // Loop through all cards to safely find restaurant data
      const cards = json?.data?.cards || [];
      let restaurantList = [];

      for (let card of cards) {
        const restaurants = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (restaurants) {
          restaurantList = restaurants;
          break;
        }
      }

      SetZomatoData(restaurantList || []);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  useEffect(() => {
    fatchData();
  }, []);

  return (
    <div className="body-project-container">
      <div className="body-project-item">
        {Array.isArray(zomatoData) && zomatoData.map((item) => {
          return <BodyCard item={item} key={item?.info?.id} />;
        })}
      </div>
    </div>
  );
};
