import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {RiAwardFill} from 'react-icons/ri'
import {GoProject} from 'react-icons/go'
import {FiUsers} from 'react-icons/fi'


const About = () => {
  return (
    <section id='about'>
       <h5>Get To Know</h5>
       <h2>About Me</h2>

       <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>
          <div className='about_content'>
            <div className='about__cards'>
              <article className='about__card'>
                <RiAwardFill className='about_icon'/>
                <h5>Experience</h5>
                <small>1+ year working</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about_icon'/>
                <h5>Experience</h5>
                <small>0+</small>
              </article>

              <article className='about__card'>
                <GoProject className='about_icon'/>
                <h5>Experience</h5>
                <small>10+ Completed</small>
              </article>
            </div>
            <p>
              Here
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
       </div>
    </section>
  )
}

export default About