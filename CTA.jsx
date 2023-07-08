import React from 'react'
import CV from '../../assets/cv.pdf'
import {TfiDownload} from 'react-icons/tfi'
import {LiaHandsHelpingSolid} from 'react-icons/lia'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'><TfiDownload className='start'/> Download CV</a>
        <a href="#contact" className='btn btn-primary'><LiaHandsHelpingSolid className='start'/> Let's Connect</a>
    </div>
  )
}

export default CTA