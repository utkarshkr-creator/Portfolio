import React from 'react'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import Navbar from '../components/Navbar'





const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg  className="contact_header_page"  heading="Contact" text="If you are looking to get ahold of me, you can send me an email at 2016krutkarsh@gmail.com"/>
      
      {/* <Footer/> */}
      
    </div>
  )
}

export default Contact