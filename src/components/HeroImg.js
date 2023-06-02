import "./HeroImgStyles.css";

import React from 'react'
import intro from "../assets/intro-bg.jpg"
import {Link} from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={intro} alt="" />
        </div>
        <div className="content">
            <p>Hey, I am a Software Engineer.</p>
            <h1>React Developer.</h1>
            <div>
                <Link to ="/project" className="btn">Projects</Link>
                <Link to ="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>

      
    </div>
  )
}

export default HeroImg
