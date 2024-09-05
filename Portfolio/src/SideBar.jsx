import React from 'react'
function SideBar(props) {
  const content=["Home","Experience","Contact","Skills"]
  const [active,setActive]=React.useState("Home")
    const elements=content.map((i,j)=>{
        return(
          <>
          <a href={'#'+i}  key={j} onClick={()=>{setActive(i)}} className={`${active===i?'nav-elements-active':'nav-elements'} rounded-2 sidebar-elements text-decoration-none py-1 px-2`}>{i}</a>
          </>
        )
    })
  return (
    <div className={`sidebar align-items-center justify-content-center d-flex bg-dark ${props.open?'sidebar-open   ':''}`}>
        <div className="elements d-flex flex-column px-3 gap-3">
            {...elements}
        </div>
    </div>
  )
}

export default SideBar