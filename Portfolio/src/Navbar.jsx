import React from 'react'
import SideBar from './SideBar';

function Navbar() {
    const [sideBar,setSideBar]=React.useState(false);
    const [active , setActive]=React.useState("Home")
    const content=["Home","Experiences","Contact","Skills"]
    const elements=content.map((i,j)=>{
        return(
            <p key={j} onClick={()=>setActive(i)} className={`${active===i?'nav-elements-active':'nav-elements'} rounded-2 mb-0 py-1 px-2`}>{i}</p>
        )
    })

  return (
    <>
        <div className='bg-none d-flex align-items-center justify-content-end p-4 navigation'>
            <button onClick={()=>setSideBar(!sideBar)} className="btn d-block d-md-none ">
                <i className="bi bi-list text-indigo  fw-bolder"></i>
            </button>
            <div className="elements align-items-center d-none d-md-flex px-3 gap-3">
                {...elements}
            </div>
        </div>
        <SideBar open={sideBar} />
    </>
  )
}

export default Navbar