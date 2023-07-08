import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {AiOutlineHtml5} from 'react-icons/ai'
import {BiLogoCss3} from 'react-icons/bi'
import {BiLogoJavascript} from 'react-icons/bi'
import {FaBootstrap} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {BsFiletypeSql} from 'react-icons/bs'
import {BiLogoMongodb} from 'react-icons/bi'
import {FaPhp} from 'react-icons/fa'
import {BiLogoNodejs} from 'react-icons/bi'
import {TbBrandJavascript} from 'react-icons/tb'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
          <div className="experience__frontend">
              <h3>Frontend Development</h3>
              <div className="experience__content">
                <article className='experience__details'>
                <AiOutlineHtml5 className='experience__details-logo'/>
                    <h4> HTML <BsPatchCheckFill className="experience__details-icon" /></h4>
                    <small className='text-light'>Experienced</small>
                </article>

                <article className='experience__details'>
                <BiLogoCss3 className='experience__details-logo'/>
                    <h4> CSS <BsPatchCheckFill className="experience__details-icon" /></h4>
                    <small className='text-light'>Experienced</small>
                </article>


                <article className='experience__details'>
                <BiLogoJavascript className='experience__details-logo'/>
                    <h4> JavaScript <BsPatchCheckFill className="experience__details-icon" /></h4>
                    <small className='text-light'>Intermediate</small>
                </article>


                <article className='experience__details'>
                <FaBootstrap className='experience__details-logo'/>
                   <h4> Bootstrap <BsPatchCheckFill className="experience__details-icon" /></h4>
                    <small className='text-light'>Intermediate</small>
                </article>


                <article className='experience__details'>
                <SiTailwindcss className='experience__details-logo'/>
                    <h4> Tailwind <BsPatchCheckFill className="experience__details-icon" /></h4>
                    <small className='text-light'> Beginner </small>
                </article>

                <article className='experience__details'>
                <FaReact className='experience__details-logo'/>
                    <h4> React <BsPatchCheckFill className="experience__details-icon" /></h4>
                    <small className='text-light'> Beginner </small>
                </article>

              </div>
          </div>

        {/**************  END OF FRONTEND DEVELOPMENT **************/} 
          
          <div className="experience__backend">
              <h3>Backend Development</h3>
              <div className="experience__content">
                <article className='experience__details'>
                <FaNodeJs className='experience__details-logo'/>
                    <h4> Node JS <BsPatchCheckFill className="experience__details-icon" /></h4>
                    <small className='text-light'>Experienced</small>
                </article>

                <article className='experience__details'>
                <BsFiletypeSql className='experience__details-logo'/>
                    <h4> SQL <BsPatchCheckFill className="experience__details-icon" /></h4>
                    <small className='text-light'>Experienced</small>
                </article>

                <article className='experience__details'>
                <BiLogoMongodb className='experience__details-logo'/>
                    <h4> MongoDB <BsPatchCheckFill className="experience__details-icon" /></h4>
                    <small className='text-light'>Intermediate</small>
                </article>

                <article className='experience__details'>
                <FaPhp className='experience__details-logo'/>
                    <h4> PHP <BsPatchCheckFill className="experience__details-icon" /></h4>
                    <small className='text-light'>Intermediate</small>
                </article>

                <article className='experience__details'>
                <BiLogoNodejs className='experience__details-logo'/>
                    <h4> EJS <BsPatchCheckFill className="experience__details-icon" /></h4>
                    <small className='text-light'> Beginner </small>
                </article>

                <article className='experience__details'>
                <TbBrandJavascript className='experience__details-logo'/>
                    <h4> Express JS <BsPatchCheckFill className="experience__details-icon" /></h4>
                    <small className='text-light'> Beginner </small>
                </article>

              </div>
          </div>

      </div>
    </section>
  )
}

export default Experience