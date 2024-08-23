import { useState } from 'react'
import Home from './Home/Home'
import Navbar from './Navbar'
import ProjectsDetails from './Projects/ProjectsDetails'


function App() {

  return (
    <>
    <Navbar/>
    <Home />
    <div className="border-bottom"></div>
    <ProjectsDetails />
    <div className="border-bottom"></div>
    </>
  )
}

export default App
