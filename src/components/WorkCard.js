import "./WorkCardStyles.css"

import React from 'react'
//import pro1 from "../assets/project1.png"
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="work-container">
        <h1 className="project-heading"></h1>
        <div className="project-container">
            <div className="project-card">
                <img src={props.imgsrc} alt="" />
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p> {props.text} </p>
                    <div className="pro-btns">
                        
                        <NavLink to={props.view} className="btn" target
                        ="_blank" >View</NavLink>

                        <NavLink to={props.source} className="btn" target="_blank">Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
};

export default WorkCard
