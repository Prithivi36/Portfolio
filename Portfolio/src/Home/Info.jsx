import React from 'react'
import Prithivi from '../Images/man.svg'
import MoreInfo from './MoreInfo'


function Info() {
  const [viewMore,setViewMore]=React.useState(false)
  return (
    <div>
        <div className=" mt-5 mx-3  info rounded-5 px-3 py-3 bg-trans text-dark-light">
          <div className=" row  d-md-none justify-content-center align-items-center ">
            <img className='profile mt-2 col-5  rounded-circle ' src={Prithivi} alt="500 200"/>
            <h1 className='name col text-start text-nowrap '>Prithivi P</h1>
            <p className=' text-start pt-3 '>
            Software engineer with expertise in web development Technologies • Java • Spring Boot • Amazon AWS (Cloud Computing) • React • Docker • Python
            </p>
          </div>
          <div className="Large-Screen d-md-block d-none">
          <img className='profile w-100 rounded-4 ' src={Prithivi} alt=""/>
            <h1 className='name text-nowrap p-2'>Prithivi P</h1>
            <p className=' p-2 bio'>
            Software engineer with expertise in web development Technologies • Java • Spring Boot • Amazon AWS (Cloud Computing) • React • Docker • Python
            </p>
          </div>
            <div className="py-3 text-center">
                <button onClick={()=>setViewMore(!viewMore)} className={`btn w-100 rounded btn-outline-${viewMore?'secondary':'primary'}`}>View {viewMore?'Less':'More'}</button>
            </div>
            <MoreInfo show={viewMore} />
        </div>
    </div>
  )
}

export default Info