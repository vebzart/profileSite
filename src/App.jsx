import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer"
 import './App.css'
 import {BrowserRouter ,Routes,Route} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./Components/Home/Home";
import Work from "./Components/Work/Work";
function App() {
  

  return (
    <>
    <BrowserRouter><Navbar />
    <Routes>
    <Route path="/profileSite" element={<Home />}></Route>
    <Route path="/profileSite/work" element={<Work />}></Route>
    </Routes ><Footer />
    </BrowserRouter>
    
      
    </>
  )
}

export default App
