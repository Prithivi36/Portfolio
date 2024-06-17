import React from 'react'
import Home from './Home'
import SideBar from './SideBar';

function Navbar() {
    const [sideBar,setSideBar]=React.useState(false);

  return (
    <>
        <div className='bg-dark d-flex justify-content-end p-2 navigation'>
            <button onClick={()=>setSideBar(!sideBar)} className="btn d-block d-md-none btn-dark-less">
                <i className="bi bi-layout-sidebar fw-bolder"></i>
            </button>
            <div class="elements d-none d-md-flex px-3 gap-3">
                <p className='text-light  rounded-2 py-1 px-2'>Home</p>
                <p className='text-light  rounded-2 py-1 px-2'>Experience</p>
                <p className='text-light  rounded-2 py-1 px-2'>Contact</p>
                <p className='text-light  rounded-2 py-1 px-2'>Skills</p>
            </div>
        </div>
        <SideBar open={sideBar} />
    </>
  )
}

export default Navbar