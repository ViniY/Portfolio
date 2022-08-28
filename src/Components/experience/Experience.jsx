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
            <BsCheckCircleFill/>
        </div>
      </div>
      <div className='experience_backend'>
      </div>

    </div>
    </section>
  )
}

export default Experience