import React from 'react'
import './services.css'
import {FaFigma} from 'react-icons/fa'
import {AiOutlineSketch} from 'react-icons/ai'
import {FaRegUser} from 'react-icons/fa'
import {BsPhone} from 'react-icons/bs'
import {TbHierarchy3} from 'react-icons/tb'
import {TbUsersPlus} from 'react-icons/tb'

import {AiFillHtml5} from 'react-icons/ai'
import {BiLogoCss3} from 'react-icons/bi'
import {IoLogoJavascript} from 'react-icons/io'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {BsFiletypeSql} from 'react-icons/bs'
import {SiMongodb} from 'react-icons/si'

import {AiOutlineDatabase} from 'react-icons/ai'
import {BsDatabaseCheck} from 'react-icons/bs'
import {MdModelTraining} from 'react-icons/md'
import {AiOutlineDeploymentUnit} from 'react-icons/ai'
import {MdOutlinePrivacyTip} from 'react-icons/md'
import {TbHeartRateMonitor} from 'react-icons/tb'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>

        <article className='service'>
          <div className='service__head'>
              <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li><FaFigma className='service__list-icon'/> Figma</li>
            <li><AiOutlineSketch className='service__list-icon'/> Sketch</li>
            <li><FaRegUser className='service__list-icon'/> User-Centric Approach</li>
            <li><BsPhone className='service__list-icon'/> Responsive Design</li>
            <li><TbHierarchy3 className='service__list-icon'/> Visual Hierarchy</li>
            <li><TbUsersPlus className='service__list-icon'/> Performance Optimization</li>
          </ul>
        </article>

        {/* END OF UI/UX DESIGN */}

      <article className='service'>
          <div className='service__head'>
              <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li><AiFillHtml5 className='service__list-icon'/> HTML</li>
            <li><BiLogoCss3 className='service__list-icon'/> CSS</li>
            <li><IoLogoJavascript className='service__list-icon'/> Javascript</li>
            <li><BsFillBootstrapFill className='service__list-icon'/> Bootstrap</li>
            <li><FaReact className='service__list-icon'/> React</li>
            <li><FaNodeJs className='service__list-icon'/> Node JS</li>
            <li><BsFiletypeSql className='service__list-icon'/> SQL</li>
            <li><SiMongodb className='service__list-icon'/> MongoDB</li>
          </ul>
        </article>

      {/* END OF WEBD */}

      <article className='service'>
          <div className='service__head'>
              <h3>Machine Learning</h3>
          </div>
          <ul className='service__list'>
            <li><AiOutlineDatabase className='service__list-icon'/> Data Preparation</li>
            <li><BsDatabaseCheck className='service__list-icon'/> Model Selection</li>
            <li><MdModelTraining className='service__list-icon'/> Model Training</li>
            <li><AiOutlineDeploymentUnit className='service__list-icon'/> Model Deployment</li>
            <li><MdOutlinePrivacyTip className='service__list-icon'/> Data Privacy</li>
            <li><TbHeartRateMonitor className='service__list-icon'/> Maintenance</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services