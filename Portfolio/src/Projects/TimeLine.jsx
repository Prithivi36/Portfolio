import React from 'react'
import placeholder from './HTMLHint.png'
import Point from './Point'

function TimeLine(props) {
  return (
    <div className="Timeline ps-5 pb-3 mx-md-5 mx-4">
            <Point />
            <h6 className='subhead  fw-bolder'>{props.date}</h6>
            <div className="content d-flex">
              <div className="">
                  <h4 className='text-light fw-bolder text-end me-md-5 me-0 text-underline'>{props.title}</h4>
                  <p className=' me-md-5 me-0 proj-desc mt-3'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.description}</p>
              </div>
                <img className='w-25 d-md-block d-none project-img' src={props.image} alt="" />
            </div>
        </div>
  )
}

export default TimeLine