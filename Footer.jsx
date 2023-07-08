import React from 'react'
import './footer.css'
import LOGO1 from '../../assets/logo1.png';
import {FaFacebookSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
    <div className='footer__img'>
    <a href='#'><img src={LOGO1} alt='logo'/></a>
    </div>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#coursecertification'>Courses Certification</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com' target='_blank'><FaFacebookSquare /></a>
        <a href='https://instagram.com' target='_blank'><BsInstagram /></a>
        <a href='https://twitter.com' target='_blank'><BsTwitter /></a>
      </div>

      <div className='footer__copyright'>
         <small>&copy; Rohan Matre. All rights reserved.</small> 
      </div>
    </footer>
  )
}

export default Footer