import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import './hero.css';

// import required modules
import { Navigation, Pagination, EffectFade,Autoplay } from 'swiper/modules';
import { Link } from 'react-router';

const Hero = () => {
  const slides =[
    {   banner : 'https://i.ibb.co/rKwj6snR/photo-1432958576632-8a39f6b97dc7.jpg', 
        title : 'Garden Design Masterclass',
        subtitle : 'Learn how to create enchanting garden spaces from professional designers',
        date : 'July 22, 2024 • 1:00 PM - 5:00 PM',
        button : 'Register Now',
        link:'' 
    },
    {   banner : 'https://i.ibb.co/gM9bZhbq/photo-1460533893735-45cea2212645.jpg', 
        title : 'Spring Greenhouse Workshop',
        subtitle : 'Join us for a hands-on experience in greenhouse gardening techniques',
        date : 'May 15, 2024 • 10:00 AM - 2:00 PM',
        button : 'Volunteer Now',
        link:'' 
    },
    {   banner : 'https://i.ibb.co/0RQT1HRv/photo-1416879595882-3373a0480b5b.jpg', 
        title : 'Community Garden Planting Day',
        subtitle : 'Help us transform our community garden with seasonal vegetables and flowers',
        date : 'June 5, 2024 • 9:00 AM - 3:00 PM',
        button : 'Book Your Spot',
        link:'' 
    }
  ]
  return (

    <div className='relative'>
    <div className="absolute z-20 top-1/2 -translate-y-1/2 w-full px-4 flex justify-between">
        <button className="custom-prev text-white text-3xl bg-black/30 p-2 rounded-full hover:bg-black/50">
           <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" id="el-41bxzerp">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" id="el-aw6gmd76"></path>
      </svg>
        </button>
        <button className="custom-next text-white text-3xl bg-black/30 p-2 rounded-full hover:bg-black/50">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" id="el-9nyq6zl0">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" id="el-fmid0vs8"></path>
        </svg>
        </button>
      
    </div>
    <div className='h-[90vh] '>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
          delay: 3000,  
          disableOnInteraction: false
        }}
        navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
        modules={[EffectFade, Navigation,Autoplay]}
        className="mySwiper"
      >
       { slides.map((slide,index)=>(
                <SwiperSlide key={index} className='relative'>
                    <img className='h-[100%] object-cover' src={slide.banner} />
                    <div className='absolute w-[100%] 
                    pt-13  flex flex-col justify-center items-center px-10   
                    md:px-20  top-0 
                    left-0 right-0 bottom-0 z-10 text-center bg-[#00000082]'>
                        <h1 className='text-[32px] sm:text-[36px] md:text-[46px] xl:text-[60px] font-[700] leading-12 text-white nunito-family'>{slide.title}</h1>
                        <p className=' xl:text-[20px] lg:font-[300] xl:font-[400] px-10  mb-5 mt-3 text-gray-300  roboto-family'>{slide.subtitle}</p>
                        <p className='xl:text-[18px] lg:font-[300] xl:font-[400] mb-5 text-gray-300  nunito-family'>{slide.date}</p>
                       <Link to={'/events'}> <button className='py-3 px-6  lg:px-10 lg:text-[18px] rounded-lg      
                        font-[500] text-white cursor-pointer  bg-[#16a34a] nunito-family'>Book Event</button></Link>
                    </div>
                </SwiperSlide>
       )) }
      </Swiper>
    </div>
    </div>
  )
}

export default Hero
