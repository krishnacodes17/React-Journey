

const RestauranrCard = (props)=>{
     
    //  console.log(props)
    const { img, resName, cuisine, location, rating, distance } = props;
    
     return(
        <div className =" res-card">
            <img src={props.img} alt="Restaurant" />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{location}</h4>
            <div>
                <h4>{rating}</h4>
                <h4>{distance}</h4>
            </div>
        </div>
     ) 
}

export default RestauranrCard;