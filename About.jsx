import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>2+ Years Working</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>10+ Worldwide</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>15+ Completed</small>
              </article>
            </div>

            <p>
              Passionate computer science student seeking to expand knowledge, solve complex challenges, and drive innovation in the ever-evolving tech landscape.
              Open to collaboration and exciting opportunities.
            </p>

            <a href='#contact' className='btn btn-primary'> Let's Connect</a>

        </div>
      </div>
    </section>
  )
}

export default About