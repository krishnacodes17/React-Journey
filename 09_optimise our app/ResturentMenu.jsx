// import { useEffect, useState} from "react"
import { useResturentMenu } from "../utils/useResturentMenu";

const ResturentMenu = ()=>{
 
  const resData = useResturentMenu()

    if (!resData || resData.length === 0) {
    return <h1>Loading...</h1>; // Data aane tak sirf ye dikhega
  }

    return (
    <div className="Resturent-Container">
      {resData?.map((item) => {
        return (
          <div className="content" key={item.info.id}>
            <h1>{item.info.name}</h1>
            <div className="content-item">
              <h4>⭐ {item.info.avgRating}</h4>
              <h4>{item.info.cuisines.join(", ")}</h4>
              <h4>{item.info.locality}</h4>
            </div>
          </div>
        );
      })}

    <h1>hellow</h1>

    </div>
  );

        
} 


export default ResturentMenu;