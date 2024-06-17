import React from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'
import Info from './Info'


function Home() {
  return (
    <div className=" d-sm-flex justify-content-center align-items-center py-5 px-4 bg-dark d-block gap-5 ">
        <Info />
        <div class="text-light my-5 px-2">
          <h1 className='fw-bolder title'>I'm a Software Developer,</h1>
          <p className='about'>&emsp;As a seasoned Software Engineer proficient in both front-end and back-end development, along with expertise in AWS services, I specialize in delivering end-to-end web solutions. <br></br> <br></br> &emsp; From conceptualization to deployment, I have the skills and dedication to bring your ideas to life on the global stage of the internet. Let's collaborate to create a robust, scalable website that resonates with your audience and drives business growth</p>
          <button className='btn btn-primary'>Contact</button>
        </div>
    </div>
  )
}

export default Home