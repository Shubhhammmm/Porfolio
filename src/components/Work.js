//import "./components/WorkStyles.css"
import WorkCard from "./WorkCard"
import WorkCardData from "./WorkCardData"

import "./WorkCardStyles.css"

import React from 'react'
 
 //import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {WorkCardData.map((val, ind) =>{
                return (
                    <WorkCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title ={val.title}
                    text = {val.text}
                    view={val.view}
                    source={val.source}
                    />
                )
            })}

             {/* <div className="project-card">
                <img src="" alt="" />
                <h2 className="projct-title"></h2>
                <div className="pro-details">
                    <p></p>
                     <div className="pro-btns">
                        <NavLink to="url.com" className="btn">View</NavLink>
                        <NavLink to="url.com" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>  */}
        </div>
      
    </div>
  )
};

export default Work
