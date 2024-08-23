import React from 'react'
import placeholder from './HTMLHint.png'
import TimeLine from './TimeLine'

function ProjectsDetails() {
  return (
    <>
    <div>
        <h1 className=' ms-4  text-indigo fw-bolder title text-center mt-5'>Projects</h1>
    </div>
    <div className="my-5">
        <TimeLine />
        <TimeLine />
        <TimeLine />
    </div>
    </>
  )
}

export default ProjectsDetails