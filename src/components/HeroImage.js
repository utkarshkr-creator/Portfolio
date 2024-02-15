import "./HeroImageStyle.css"

import React from 'react'
import { Link } from "react-router-dom"
import pipo from './Assest/img.jpg'
import avtar from  './Assest/avtar.png'


const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={pipo} alt="IntroImg"/>    
        </div>
        <div className="content">
            <img src={avtar} alt="Avtar" className="avtar"></img>
            <p>HI, I'M A COMPETITIVE PROGRAMMER</p>
            <h1>MERN Developer</h1>
            {/* <Link to="/Achivement" className="btn">Achivement</Link> */}
            {/* <Link to="/Project" className="btn">Project</Link> */}
            <a href="https://drive.google.com/file/d/1tfGsBwGhoXp4Hbn5IoL5nMrs_uXc0BSg/view?usp=drive_link" target="_blank" className="btn" rel="noopener noreferrer">Resume</a>

            {/* <Link to="/Contact" className="btn btn-light">Contact</Link> */}

        </div>
        
    </div>
  )
}

export default HeroImage
