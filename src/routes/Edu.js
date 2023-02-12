import React from 'react'
import Navbar from '../components/Navbar'
import Education from '../components/Education'
import HeroImg from '../components/HeroImg'

const Edu = () => {
  return (
    <>
       <Navbar/>
       <HeroImg heading="Education" text="My Journey"/>
       <Education/>
    </>
  )
}

export default Edu