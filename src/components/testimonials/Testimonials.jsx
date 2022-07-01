import React from 'react'
import './testimonials.css'
import avtr1 from "../../assets/avatar1.jpg"
import avtr2 from "../../assets/avatar2.jpg"
import avtr3 from "../../assets/avatar3.jpg"
import avtr4 from "../../assets/avatar4.jpg"

import { Pagination , Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
//import 'swiper/css/navigation';
import 'swiper/css/pagination';


const data=[
  {
    key: 1,
    avatar: avtr1,
    name: 'Ernest Achiever',
    review: 'Review Achiever jbsjdbfj jab b tero yaad aaygi terigaaliyp se gukra krunga ai tu jo v=chahe dunia sr jhuka le '
  },
  {
    key: 2,
    avatar: avtr2,
    name: 'SKylight',
    review: 'Review Achiever jbsjdbfj jab b tero yaad aaygi terigaaliyp se gukra krunga ai tu jo v=chahe dunia sr jhuka le '
  },
  {
    key: 3,
    avatar: avtr3,
    name: 'william butucher',
    review: 'Review Achiever jbsjdbfj jab b tero yaad aaygi terigaaliyp se gukra krunga ai tu jo v=chahe dunia sr jhuka le '
  },
  {
    key: 4,
    avatar: avtr4,
    name: 'homelander',
    review: 'Review Achiever jbsjdbfj jab b tero yaad aaygi terigaaliyp se gukra krunga ai tu jo v=chahe dunia sr jhuka le '
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>  

      <Swiper className="container testimonials-container"
      modules={[ Pagination, Autoplay]}
      spaceBetween={250}
      slidesPerView={1}
      navigation
      autoplay
      pagination={{ clickable: true }}
      >
        {
          data.map((item)=>{
          return (
            <SwiperSlide key={item.key} className="testimonial">
          <div className="client-avatar">
            <img src={item.avatar}  />
          </div>
            <h5>{item.name}</h5>
            <small className="client-review">
              {item.review}
            </small>
        </SwiperSlide>
        )
        })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials