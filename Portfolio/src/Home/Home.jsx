import Image from './Image';
import resume from './PrithiviPSoftwareDeveloper.pdf'

function Home() {
  return (
    <>
    <div id='Home' style={{ minHeight: '100vh' }} className="d-md-flex mt-5 justify-content-lg-between container-lg gap-5 justify-content-around p-2  align-items-center py-5 bg-none d-block">
      <div className="text-start d-flex">
        <Image />
        <div style={{position: "relative"}} className="p-3">
          <button style={{position:"absolute" , bottom:0}} className='btn d-md-none bg-indigo border-0 text-nowrap btn-primary rounded-3'>Download CV</button>
        </div>
      </div>
      <div className="text-light d-sm-flex flex-column gap-5 my-5 px-2">
        <div className="">
          <h1 className='fw-bolder text-end title text-light'><span className='fw-normal text-lighter'>Hi, I'm </span>Prithivi P</h1>
          <h1 className='fw-bolder m-0 text-end title text-indigo'><span className='text-lighter'>a </span>Software Developer</h1>
        </div>
        <p className='about mt-3 mt-sm-0'>
          &emsp;As a seasoned Software Developer proficient in both front-end
          and back-end development, along with expertise in AWS services, I specialize in delivering end-to-end web solutions.
          From conceptualization to deployment, I have the skills and dedication to bring your ideas to life.
        </p>
        <div className="d-flex gap-3">
          <a href={resume} download="Prithivi_P Software Developer.pdf" className='btn d-none d-md-block bg-indigo border-0 btn-primary rounded-3'>Download CV</a>
        </div>
          <div className="social text-indigo d-flex gap-3 justify-content-end text-indigo">
            <a className='text-indigo' target='_blank' href="https://wa.me/+918220812131"><i className="bi bi-whatsapp fs-3"></i></a>
            <a className='text-indigo' target='_blank' href="mailto:prithivi.work@gmail.com">
            <i className="bi bi-mailbox fs-3"></i>
            </a>
            <a className='text-indigo' target='_blank' href="https://www.linkedin.com/in/prithivi-p-6961a2285/">
            <i className="bi bi-linkedin fs-3"></i>
            </a>
          </div>
      </div>
    </div>
    </>
  );
}

export default Home;
