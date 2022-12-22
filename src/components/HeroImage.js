import "./HeroImageStyle.css"

import React from 'react'
import { Link } from "react-router-dom"

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src="https://img.freepik.com/free-vector/flat-abstract-wireframe-background_23-2149002713.jpg?w=1060&t=st=1671703397~exp=1671703997~hmac=0abb50926d3b74b8ccd80f3f90949fcdfa1113566c10c5ca90b01334d340b24d" alt="IntroImg"/>    
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