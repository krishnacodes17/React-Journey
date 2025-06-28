import React from "react";



const RandomUser = ({userData})=>{
  

  
     if (!userData){
        return <h1>Loading...</h1>;
     }
     
  //  console.log(userData)
    const {name ,email,gender,dob,location,picture,phone} = userData;




       return (
         <>

           <div className="RandomUser-container">
            
           <div className="RandomUser-image">
             <img src={picture?.large} />
           </div>
           <div className="RandomUser-info">
             <h2>
               {" "}
               {name?.title} {name?.first} {name?.last}
             </h2>
             <h4>{email}</h4>
             <h3>Ph: {phone} :</h3>
             <div className="RandomUser-other">
               <h3 className="dob">Dob: {dob?.date}</h3>
               <h3>Gender: {gender}</h3>
             </div>
             <h2>Loc: {location?.city}</h2>
           </div>
         </div>
         </>
       );
    }

export default RandomUser;