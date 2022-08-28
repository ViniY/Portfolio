import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target="https://github.com/ViniY"><BsLinkedin/></a>
        <a href="https://github.com" target="https://www.linkedin.com/in/vincent-yu-07184118a/"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials