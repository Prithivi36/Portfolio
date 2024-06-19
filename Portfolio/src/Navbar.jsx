import React from 'react'
import Home from './Home'
import SideBar from './SideBar';

function Navbar() {
    const [sideBar,setSideBar]=React.useState(false);
    const [active , setActive]=React.useState("Home")
    const content=["Home","Experiences","Contact","Skills"]
    const elements=content.map((i,j)=>{
        return(
            <p key={j} onClick={()=>setActive(i)} className={`${active===i?'nav-elements-active':'nav-elements'} rounded-2 py-1 px-2`}>{i}</p>
        )
    })

  return (
    <>
        <div className='bg-dark d-flex justify-content-end p-2 navigation'>
            <button onClick={()=>setSideBar(!sideBar)} className="btn d-block d-md-none btn-dark-less">
                <i className="bi bi-layout-sidebar fw-bolder"></i>
            </button>
            <div className="elements d-none d-md-flex px-3 gap-3">
                {...elements}
            </div>
        </div>
        <SideBar open={sideBar} />
    </>
  )
}

export default Navbar