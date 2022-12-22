import React from 'react'
import AboutSec from '../components/AboutSec.js'
import Achiv from '../components/Achiv.js'
import Footer from '../components/Footer.js'
import HeroImage from '../components/HeroImage.js'
import ImgSlider from '../components/ImgSlider.js'
import Navbar from '../components/Navbar.js'
import Work from '../components/Work.js'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImage/>
      <AboutSec/>
      <Work/>
      <Achiv/>
      <Footer/>
    </div>
  )
}

export default Home