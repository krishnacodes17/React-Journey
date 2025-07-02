import { useEffect, useState} from "react"


const ResturentMenu = ()=>{

   const [resData, setResData] = useState([]);

     const fatchData= async ()=>{

        const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=21.99740&lng=79.00110&carousel=true&third_party_vendor=1")
        const json= await data.json(); 
      const resturent= json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setResData(resturent);
        console.log(resturent)
    }


    useEffect( ()=>{
        fatchData()
    } ,[])

    return (
    <div className="Resturent-Container">
      {resData.map((item) => {
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
    </div>
  );

        
} 


export default ResturentMenu;