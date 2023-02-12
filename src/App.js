import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Profile from "./routes/Profile";
import Achivements from "./routes/Achivements";
import Contact from "./routes/Contact";
import {Routes, Route } from "react-router-dom";
// import Navbar from './components/Navbar.js'
// import Education from "./components/Education";
import Footer from "./components/Footer";
import Edu from "./routes/Edu";
function App() {
  return (
    <>
     {/* <Navbar/> */}
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Achivement" element={<Achivements/>} />
        <Route path="About" element={<About/>} />
        <Route path="Profile" element={<Profile/>} />
        <Route path="Project" element={<Project/>} />
        <Route path="Contact" element={<Contact/>} />
        <Route path="Education" element={<Edu/>}/>
     </Routes>
     <Footer/>
     
    </>
  );
}

export default App;
