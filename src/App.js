import React from "react";
// import { useState } from "react";
import NavBar from "./component/navbar/NavBar";
import Hero from "./component/hero/Hero";
import About from "./component/About/About";
import Project from "./component/projects/Projects";
import Skill from "./component/skills/Skills";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
import './App.css'

const App = () => {
  

  return (
    <div className="app">
      <NavBar />    
      <Hero />
      <About /> 
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
