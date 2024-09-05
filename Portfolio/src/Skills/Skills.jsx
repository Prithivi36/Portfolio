import React from 'react'
import java from '../Images/Skills/Java.png'
import spring from '../Images/Skills/SpringBoot.png'
import aws from '../Images/Skills/AWS.png'
import react from '../Images/Skills/React.png'
import docker from '../Images/Skills/Docker.png'
import jenkins from '../Images/Skills/Jenkins.png'
import sql from '../Images/Skills/MySql.png'
import mongo from '../Images/Skills/MongoDb.png'


function Skills() {
    const skillsLogos=[java,spring,react,aws,docker,jenkins,sql,mongo]
  return (
    <>
    <div id='Skills'>
        <h1 className=' ms-4  text-indigo fw-bolder title text-start ps-md-5 ps-2 mt-5'>Skills</h1>
    </div>
    <div className='row p-5 gap-md-0 gap-xl-5'>
        {skillsLogos.map((logo,index)=>{
            return(
                <div className="col-md col-3 " key={index}>
                    <img className='skill-img img-fluid' src={logo} alt="" />
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Skills