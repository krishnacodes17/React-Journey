import { useState } from "react";


 export const  Useeffect =()=>{


    const [update, setUpdate] = useState ("sign-in")
   
  
    return (
      <div
        className="useeffect-container"
        onClick={() => {
            update === "sign-in" ? setUpdate("sign-up") : setUpdate("sign-in");
        }}
      >
        <div className="useeffect-container1">
          <h1>useeffect</h1>
          <button className="signin-btn">{update}</button>
        </div>
      </div>
    );
 }