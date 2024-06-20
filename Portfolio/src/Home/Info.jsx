import React from 'react'
import Prithivi from '../Images/Prithivi P prof.jpg'
import MoreInfo from './MoreInfo'


function Info() {
  const [viewMore,setViewMore]=React.useState(false)
  return (
    <div>
        <div className=" mt-5  info rounded-5 px-3 py-3 bg-dark-less">
            <img className='profile rounded-4 ' src={Prithivi} alt=""/>
            <h1 className='name text-nowrap p-2'>Prithivi P</h1>
            <p className=' p-2 bio'>
            Software engineer with expertise in web development Technologies • Java • Spring Boot • Amazon AWS (Cloud Computing) • React • Docker • Python
            </p>
            <div className="pb-3 text-center">
                <button onClick={()=>setViewMore(!viewMore)} className={`btn w-100 rounded btn-outline-${viewMore?'secondary':'primary'}`}>View {viewMore?'Less':'More'}</button>
            </div>
            <MoreInfo show={viewMore} />
        </div>
    </div>
  )
}

export default Info