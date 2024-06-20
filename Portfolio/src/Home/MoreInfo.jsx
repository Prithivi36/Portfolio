import React from 'react'

function MoreInfo(props) {
    const date =new Date()
  return (
    <div className={`text-start moreInfo ${props.show?'moreInfo-active':''}`} >
        <div className="time py-2">
            <i className="bi bi-clock-fill"></i>
            <p className='d-inline  ps-3'>{date.toLocaleTimeString("en-US",{hour12:false}).substring(0,5)} <span className='text-secondary'>(UTC +5:30)</span></p>
        </div>
        <div className="mail pb-2">
            <i className="bi bi-envelope-fill"></i>
            <a className=' moreinfoList text-light ps-3' href="mailto:prithivi.work@gmail.com">prithivi.work@gmail.com</a>
        </div>
        <div className="linkedin pb-2">
            <i className="bi bi-linkedin"></i>
            <a className=' moreinfoList text-light ps-3' href="https://www.linkedin.com/in/prithivi-p-6961a2285/">Prithivi P</a>
        </div>
        <div className="github pb-2">
            <i className="bi bi-github"></i>
            <a className=' moreinfoList text-light ps-3' href="https://github.com/Prithivi36">Prithivi36</a>
        </div>
        <div className="whatsapp pb-2">
            <i className="bi bi-whatsapp"></i>
            <a className=' moreinfoList text-light ps-3' href="wa.me/+918220812131">8220812131</a>

        </div>
    </div>
  )
}

export default MoreInfo
