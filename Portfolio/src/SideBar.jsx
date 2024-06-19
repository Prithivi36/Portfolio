import React from 'react'
import Info from './Info'

function SideBar(props) {
  return (
    <div className={`sidebar align-items-center justify-content-center d-flex bg-dark ${props.open?'sidebar-open   ':''}`}>
        <div className="elements d-flex flex-column px-3 gap-3">
            <button className='btn btn-outline-light d-block rounded-2 py-1 px-2'>Home</button>
            <button className='btn btn-outline-light d-block rounded-2 py-1 px-2'>Experience</button>
            <button className='btn btn-outline-light d-block rounded-2 py-1 px-2'>Contact</button>
            <button className='btn btn-outline-light d-block rounded-2 py-1 px-2'>Skills</button>
        </div>
    </div>
  )
}

export default SideBar