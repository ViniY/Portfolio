import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineWechat} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form= useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8isdprf', 'template_pes7hao', form.current, 'lkEqgp_AYTsJvzqOe')
    alert("Form Submitted Successfully")
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vincentyu9603@gmail.com</h5>
            <a href="mailto:vincentyu9603@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Vincent Yu</h5>
            <a href="https://m.me/vincent.yu.543908" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineWechat className='contact__option-icon'/>
            <h4>WeChat</h4>
            <h5>Vincent Yu</h5>
            <a href="mailto:vincentyu9603@gmail.com" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='subject'placeholder='Subject' required />
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="meesage" rows="4" placeholder='Leave a Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact