import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import App from './App.jsx'
import { Useeffect } from './Components/Useeffect-prc.jsx'

createRoot(document.getElementById("root")).render(
  <>
    <Useeffect />
    <App />
  </>
);
