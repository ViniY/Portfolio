import React from 'react'
import './nav.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BsJournalBookmark} from 'react-icons/bs'
import {FcServices} from 'react-icons/fc'
import {MdContactPhone} from 'react-icons/md'
import { useState } from 'react'


const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#"  onClick={() => setActiveNav('#')} className={activeNav ==='#' ? 'active' : ''}><AiTwotoneHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav ==='#about' ? 'active' : ''}><BiUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav ==='#experience' ? 'active' : ''}><BsJournalBookmark/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav ==='#services' ? 'active' : ''}><FcServices/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active' : ''}><MdContactPhone/></a>
    </nav>
  )
}

export default Nav