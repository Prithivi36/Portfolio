import React from 'react'
import Info from './Info'

function SideBar(props) {
  return (
    <div className={`sidebar no-wrap bg-dark ${props.open?'sidebar-open   ':''}`}>
        {/* <Info /> */}
        <div class="elements text-center px-3 gap-3">
            <p className='text-light  rounded-2 py-1 px-2'>Home</p>
            <p className='text-light  rounded-2 py-1 px-2'>Experience</p>
            <p className='text-light  rounded-2 py-1 px-2'>Contact</p>
            <p className='text-light  rounded-2 py-1 px-2'>Skills</p>
        </div>

    </div>
  )
}

export default SideBar