import "./App.css";
import About from "./Components/About";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {RouterProvider,} from "react-router-dom";
import { Outlet } from "react-router-dom";
import ResturentMenu  from "./Components/ResturentMenu";

function App() {
 return (
   <>
   
   <Header/>
   <Outlet/>
   <ResturentMenu/>
  </>


  
)
}

export default App;
