import React from 'react'
import Prithivi from './Prithivi P prof.jpg'


function Info() {
  return (
    <div>
        <div className=" mt-5  info rounded-5 px-3 py-3 bg-dark-less">
            <img className='profile rounded-4 ' src={Prithivi} alt=""/>
            <h1 className='name text-nowrap p-2'>Prithivi P</h1>
            <p className=' p-2'>
            Software engineer with expertise in web development Technologies • Java • Spring Boot • Amazon AWS (Cloud Computing) • React • Docker • Python
            </p>
            <div className="pb-5 text-center">
                <button class="btn w-100 rounded btn-outline-primary">View More</button>
            </div>
        </div>
    </div>
  )
}

export default Info