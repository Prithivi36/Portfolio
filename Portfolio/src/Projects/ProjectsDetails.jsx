import React from 'react'
import placeholder from './HTMLHint.png'
import TimeLine from './TimeLine'
import {projects} from './Projects.js'

function ProjectsDetails() {
  return (
    <>
    <div>
        <h1 className=' ms-4  text-indigo fw-bolder title text-center mt-5'>Projects</h1>
    </div>
    <div className="my-5">
      {projects.map((project, index) => (
        <TimeLine
          key={index}
          date={project.date}
          title={project.name}
          description={project.description}
          image={project.image}
        />
      ))}
    </div>
    </>
  )
}

export default ProjectsDetails