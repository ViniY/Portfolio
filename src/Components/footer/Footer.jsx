import React from 'react'
import'./footer.css'
import {FaFacebook} from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Vini</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/vincent.yu.543908/"><FaFacebook/></a>
        <a href="https://www.instagram.com/vincentyu96/"><FiInstagram/></a>

      </div>
      <div className="footer__copyright">
        <small>&copy; Vini</small>

      </div>
    </footer>
    )
}

export default Footer