


export const BodyCard =({item})=>{

  const  {name,avgRating,areaName,cuisines,sla,cloudinaryImageId}= item.info
  
    return(
        <div className="Bodycard-container">
            <div className="item-img">
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="image" />
            </div>
            <div className="item-info">
                <h2>{name}</h2>
                <p>{cuisines.join(",")}</p>
                <p className="highlight">{avgRating}⭐</p>
                <p>{sla?.slaString}</p>
                <p>{areaName}</p>
            </div>
        </div>
    )
}