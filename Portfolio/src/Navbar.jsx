import React from 'react'
import SideBar from './SideBar';

function Navbar() {
    const [sideBar,setSideBar]=React.useState(false);
    const [active , setActive]=React.useState("Home")
    const content=["Home","Experience","Contact","Skills"]
    const elements=content.map((i,j)=>{
        return(
            <a href={`#${i}`} key={j} onClick={()=>setActive(i)} className={`${active===i?'nav-elements-active':'nav-elements'} rounded-2 text-decoration-none mb-0 py-1 px-2`}>{i}</a>
        )
    })

  return (
    <>
        <div className='bg-black d-flex align-items-center justify-content-end p-2 navigation'>
            <button onClick={()=>setSideBar(!sideBar)} className="btn d-block d-md-none ">
                <i className="bi bi-list text-indigo nav-togg fw-bolder"></i>
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