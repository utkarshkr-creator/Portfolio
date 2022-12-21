import React from 'react'
import Footer from '../components/Footer.js'
import HeroImage from '../components/HeroImage.js'
import Navbar from '../components/Navbar.js'


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImage/>
      <Footer/>
    </div>
  )
}

export default Home