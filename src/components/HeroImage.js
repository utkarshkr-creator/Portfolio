import "./HeroImageStyle.css"

import React from 'react'
import { Link } from "react-router-dom"

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src="https://i.imgur.com/AKHo4Rm.png" alt="IntroImg"/>    
        </div>
        <div className="content">
            <img src="https://i.imgur.com/g58i1ss.png" alt="Avtar" className="avtar"></img>
            <p>HI, I'M A COMPETITIVE PROGRAMMER</p>
            <h1> React Developer.</h1>
            <Link to="/Profile" className="btn">Profile</Link>
            <Link to="/Project" className="btn">Project</Link>
            <Link to="/Contact" className="btn btn-light">Contact</Link>
        </div>
        
    </div>
  )
}

export default HeroImage