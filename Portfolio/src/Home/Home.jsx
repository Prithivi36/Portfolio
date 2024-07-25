import Snowfall from 'react-snowfall';
import Info from './Info';

function Home() {
  return (
    <>
    <div className="snow">
      <Snowfall snowflakeCount={50}  color='gray' />
    </div>
    <div style={{ minHeight: '100vh', position: 'relative' }} className="d-md-flex justify-content-lg-center gap-5 justify-content-around p-2  align-items-center py-5 bg-none d-block">
      <div className="text-center d-flex justify-content-center">
        <Info />
      </div>
      <div className="text-light d-flex flex-column gap-5 my-5 px-2">
        <h1 className='fw-bolder text-md-center title'>I'm a Software Developer,</h1>
        <p className='about'>
          &emsp;As a seasoned Software Engineer proficient in both front-end 🖼️
          and back-end development ⚙️, along with expertise in AWS services ☁️, I specialize in delivering end-to-end 🌍 web solutions.
          <br /><br />
          &emsp;From conceptualization to deployment, I have the skills and dedication to bring your ideas to life on the global stage of the internet. Let's collaborate to create a robust, scalable website that resonates with your audience and drives business growth.
        </p>
        <div className="d-flex gap-3">
          <button className='btn btn-primary'>View my Work</button>
          <button className='btn btn-outline-secondary'>Download Resume</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
