import { useState } from 'react'
import Home from './Home/Home'
import Navbar from './Navbar'
import ProjectsDetails from './Projects/ProjectsDetails'
import Skills from './Skills/Skills'


function App() {
  alert("Under Development Haven't Completed, Just use to download Resume :)")
  return (
    <>
    <Navbar/>
    <Home  />
    <div className="border-bottom"></div>
    <ProjectsDetails />
    <div className="border-bottom"></div>
    <Skills/>
    </>
  )
}

export default App
