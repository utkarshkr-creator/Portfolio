import React from 'react'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'




const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg heading="Contact" text="If you are looking to get ahold of me, you can send me an email at 2022krutkarsh@gmail.com"/>
      <Skills/>
      <Footer/>
      
    </div>
  )
}

export default Contact