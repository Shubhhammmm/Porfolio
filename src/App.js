import React from "react";
import "./index.css";
import Home from './route/Home'
import Contact from './route/Contact'
import Project from './route/Project'
import About from './route/About'
import {Route  , Routes} from "react-router-dom";
 import Navbar from "./components/Navbar";
//import HeroImg from "./components/HeroImg";
  // import Footer from "./components/Footer";


function App() {
  return (
    <>
     {/* <HeroImg/>  */}
       <Navbar/>  
        
    <Routes>
      
     <Route path = "/" element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/project' element={<Project/>}/>
     </Routes> 
     {/* <Footer/> */}
    </>
  );
}

export default App;
