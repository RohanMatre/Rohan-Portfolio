import React from 'react'
import './coursecertification.css'
import CO1 from '../../assets/Course1.jpg'
import CO2 from '../../assets/Course2.jpg'
import CO3 from '../../assets/Course3.jpg'
import CO4 from '../../assets/Course4.jpg'
import CO5 from '../../assets/Course5.jpg'
import CO6 from '../../assets/Course6.jpg'
import CO7 from '../../assets/Course7.jpg'
import CO8 from '../../assets/Course8.jpg'
import CO9 from '../../assets/Course9.jpg'
import CO10 from '../../assets/Course10.jpg'
import CO11 from '../../assets/Course11.jpg'
import CO12 from '../../assets/Course12.jpg'


import { useRef, useState } from 'react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
{
  course: CO1,
},
{
  course: CO2,
},
{
  course: CO3,
},
{
  course: CO4,
},
{
  course: CO5,
},
{
  course: CO6,
},
{
  course: CO7,
},
{
  course: CO8,
},
{
  course: CO9,
},
{
  course: CO10,
},
{
  course: CO11,
},
{
  course: CO12,
},
]

const Coursecertification = () => {
  return (
    <section id='coursecertification'>
      <h5>Evidence in My Possession</h5>
      <h2>Courses Certifications</h2>

      <Swiper className='container coursecertification__continer'
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      spaceBetween={40}
      slidesPerView={1}
      cssMode={true}
      navigation={true}
      pagination={{ clickable: true }}
      mousewheel={true}
      keyboard={true}
      >
       {
        data.map(({course}, index) => {
          return (
            <SwiperSlide key={index} className='course'>
          <div className='course__img'>
            <img src={course}/>
          </div>
        </SwiperSlide>
          )
        })
       }

      </Swiper>

    </section>
  )
}

export default Coursecertification