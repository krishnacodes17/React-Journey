import { useEffect, useState } from "react"

export const useResturentMenu =()=>{

    const [resData, setResData] = useState([]);

    useEffect( ()=>{
        fetchData()
    },[] )


    const fetchData = async ()=>{
     const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=21.99740&lng=79.00110&carousel=true&third_party_vendor=1")
     const json = await data.json();
    //  console.log( json?.data?.cards)
     const resturent= json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
     setResData(resturent);
     
    }

    return resData;
}