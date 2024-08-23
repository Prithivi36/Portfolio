import React from 'react'
import placeholder from './HTMLHint.png'
import Point from './Point'

function TimeLine() {
  return (
    <div className="Timeline ps-5 pb-3 mx-5">
            <Point />
            <h6 className='subhead  fw-bolder'>JUN 2024-PRESENT</h6>
            <div className="content d-flex">
                <p className='text-light me-md-5 me-0 proj-desc mt-3'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur tempora earum, quae suscipit voluptates, accusantium aspernatur, temporibus ex aut culpa omnis ad consectetur quasi? Error corporis illo aspernatur ducimus soluta ratione eaque ipsa porro enim est eos libero sunt et cumque, nulla rem alias expedita cupiditate asperiores magni odit cum ullam quod. Voluptates beatae enim libero delectus, sint vero quisquam doloremque dolorem fuga doloribus laudantium et quidem officiis odit?</p>
                <img className='w-25 d-md-block d-none project-img' src={placeholder} alt="" />
            </div>
        </div>
  )
}

export default TimeLine