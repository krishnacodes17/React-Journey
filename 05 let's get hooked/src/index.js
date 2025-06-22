import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body.js"
import Header from "./Components/Header.js";


const AppLayout = ()=>{
     return <div className ="app">
        <Header/>
        <Body/>       
         
     </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
