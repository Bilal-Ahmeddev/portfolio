import React from 'react'
import Skills from '../Components/Skills'
import Intro from '../Components/Intro'
import Experience from './ExperiencePage'
import ProjectsPage from'./ProjectsPage'
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";




const Sections = () => {


  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether the animation should happen only once
    });
  }, []);
  return (
    < >
    <div >
      <Intro/>
      </div>   
      <div ><Skills/></div>
      <div>
        <ProjectsPage/>
      </div>
      <div>
        <Experience/>
      </div>
    </>
  )
}

export default Sections
