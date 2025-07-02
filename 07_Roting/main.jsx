import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About.jsx";
import ContectUs from "./Components/ContectUs.jsx";
import Error from "./Components/Error.jsx";
import { Cart } from "./Components/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContectUs />, 
      },
      {
        path: "/Cart",
        element:<Cart/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
