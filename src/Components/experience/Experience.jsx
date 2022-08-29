import React from 'react'
import './experience.css'
import {BsCheckCircleFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
    <h5>Skills</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
      <div className='experience_machinelearning'>
        <h3>Machine Learning</h3>
        <div className='experience__content'>
          <article className='experience__details'>      
          <BsCheckCircleFill className='experience__details_icon'/>
          <div>
            <h4>Python</h4>
              <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>      
          <BsCheckCircleFill className='experience__details_icon'/>
          <div>
            <h4>R</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>      
          <BsCheckCircleFill className='experience__details_icon'/>
          <div>
            <h4>Java</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>      
          <BsCheckCircleFill className='experience__details_icon'/>
          <div>
            <h4>Pyspark</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>      
          <BsCheckCircleFill className='experience__details_icon'/>
          <div>
            <h4>Hadoop</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
         </div>
        </div>
       {/*END of MACHINE LEARNING*/}
      <div className='experience_backend'>
      <h3>Backend Development</h3>
        <div className='experience__content'>
          <article className='experience__details'>      
          <BsCheckCircleFill className='experience__details_icon'/>
          <div>
            <h4>Java</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>      
          <BsCheckCircleFill className='experience__details_icon'/>
          <div>
            <h4>MySQL</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>      
          <BsCheckCircleFill className='experience__details_icon'/>
          <div>
            <h4>111</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>      
          <BsCheckCircleFill className='experience__details_icon'/>
          <div>
            <h4>222</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>      
          <BsCheckCircleFill className='experience__details_icon'/>
          <div>
            <h4>333</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
         </div>
       </div>
    </div>
    </section>
  )
}

export default Experience