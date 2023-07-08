import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {FiSend} from 'react-icons/fi'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b8rqu1u', 'template_60jyanm', form.current, '3HyslCwAghIfhPh1w')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  }; 

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
            <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>rohan.matre11@gmail.com</h5>
              <a href='mailto:rohan.matre11@gmail.com' target='_blank'>Send a message</a>
            </article>
            <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Rohan Matre</h5>
              <a href='https://www.facebook.com/rohan.matre.12/' target='_blank'>Send a message</a>
            </article>
            <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+919687552297</h5>
              <a href="https://wa.me/919687552297" target="_blank">Send a message</a>
            </article>
        </div>
        {/* END OF CONTACT OPTONS  */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea type="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'><FiSend className='send-icon'/> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact