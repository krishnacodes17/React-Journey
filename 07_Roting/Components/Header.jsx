 
 import { Link } from "react-router-dom";
 
 
 
 const header = ()=>{
    return(
        
         <div className="header">
            <div className="logo">
                <img  alt="logo" />
            </div>
            <div className="routes">
                <h4>
                    <Link to="/">Home</Link>
                </h4>
                <h4>
                     <Link to="/about" >About us</Link>
                </h4>
                <h4>
                    <Link to="/Contact">Contect Us</Link>
                </h4>
                <h4>
                    <Link to="/Cart"> Cart</Link>
                </h4>
            </div>
        </div>
    )
}

export default header;