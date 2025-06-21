import React from "react";
import ReactDOM from "react-dom/client";



const Header = ()=>{
    return (
      <div className="header">
        <div className="logo-container">
          <img
            src="https://i.pinimg.com/474x/59/5f/a5/595fa5ffb3d67f62ceabaa0d9a40d1e2.jpg"
            alt="Logo"
          />
        </div>

        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                     
            </ul>
        </div>
      </div>
    );
}


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


const Body = ()=>{
  const foodData = [
    {
      resName: "Megana Foods",
      cuisine: "North Indian",
      location: "Bangalore",
      rating: "4.4",
      distance: "38 minutes",
      img :"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/cvo1djhbwrgfqd64k0tl"
    },
    {
      resName: "KFC",
      cuisine: "American",
      location: "Bangalore",
      rating: "4.5",
      distance: "15 minutes",
      img:"https://content3.jdmagicbox.com/comp/def_content_category/kfc/274744306-5359482000748984-6753959334173458855-n-kfc-1008-6k5wh.jpg"
    },
    {
      resName: "Maggie",
      cuisine: "Chinese",
      location: "Bangalore",
      rating: "4.6",
      distance: "15 minutes",
      img:"https://www.shutterstock.com/image-photo/instant-masala-maggi-noodles-bell-600nw-1823679476.jpg"
    },
  
    {
      resName: "idli dhosa",
      cuisine: "North Indian",
      location: "tamilnadu",
      rating: "4.9",
      distance: "15 minutes",
      img:"https://thumbs.dreamstime.com/b/south-indian-breakfast-idli-dosa-chutney-indian-breakfast-lentil-rice-pancake-also-known-as-dosa-dumplings-known-as-idli-158574513.jpg"
    },
    {
      resName: "khanaman",
      cuisine: "gujrat",
      location: "surat",
      rating: "4.7",
      distance: "15 minutes",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL965HEyVj_t-NI5i5lMklLmyqR5j96udkrg&s"
    },
    {
       resName: "Liti chokha",
      cuisine: "bhihar",
      location: "gopalganj",
      rating: "4.8",
      distance: "15 minutes",
      img:"https://thumbs.dreamstime.com/b/litti-bihar-eastern-uttar-pradesh-also-know-as-bati-elsewhere-india-litti-can-be-enjoyed-chokha-type-158606549.jpg"
    }
  ];

  return (
    <div className="body">
      <div className=" search">search</div>
      <div className=" res-container">
        {foodData.map((food, index) => (
          <RestauranrCard data={foodData}
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
}


const AppLayout = ()=>{
     return <div className ="app">
        <Header/>
        <Body/>
           
         
     </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
