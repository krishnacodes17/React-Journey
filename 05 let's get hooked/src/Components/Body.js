import RestauranrCard from "./RestauranrCard.js";
import { foodData } from "../utils/Mokdata.js";
import { useEffect, useState } from "react";

const Body = () => {
  const [Data, setData] = useState(foodData);

  const filterData = Data.filter((res) => {
              return res.rating > 4.5;
            });

  return (
    <div className="body">
      <div className=" filter">
        <button
          className="filter-btn"
          onClick={() => {
            
            setData(filterData);
          }}
        >
          Top Rated Resturent
        </button>
      </div>

      <div className=" res-container">
        {Data.map((food, index) => (
          <RestauranrCard
            key={index}
            img={food.img}
            resName={food.resName}
            cuisine={food.cuisine}
            location={food.location}
            rating={food.rating}
            distance={food.distance}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
