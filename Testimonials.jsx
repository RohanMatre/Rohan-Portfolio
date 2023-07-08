import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
{
  avatar: AVTR1,
  name: 'Vipul Chaudhary',
  review: "We work together at Flare23 website. In my opinion, Rohan possesses great skills. Our collaboration is focused on achieving success in our endeavors!"
},
{
  avatar: AVTR2,
  name: 'Shivani Chopra',
  review: "He has worked with me at Excellent Technologies website. We are thoroughly impressed by his exceptional work and dedication to excellence in our projects."
},
{
  avatar: AVTR3,
  name: 'Anand Shah',
  review: 'He is an invaluable asset at Stellar Solutions, demonstrating skills and dedication to excellence. We greatly value his contributions to the team success and his teamwork skills.'
},
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review},index) => {
            return (
          <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar}/>
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials