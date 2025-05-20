import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './hero.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, EffectFade } from 'swiper/modules';

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
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper  max-h-[90vh]"
      >
       { slides.map((slide,index)=>(
                <SwiperSlide key={index} className='relative'>
                    <img src={slide.banner} />
                    <div className='absolute  pt-50 border-white top-0 
                    left-0 right-0 bottom-0 z-10 text-center bg-[#00000082]'>
                        <h1 className='text-[60px] font-[700] text-white nunito-family'>{slide.title}</h1>
                        <p className='text-[20px] font-[400] mb-5 text-white  roboto-family'>{slide.subtitle}</p>
                        <p className='text-[18px] font-[400] mb-5 text-white  nunito-family'>{slide.date}</p>
                        <button className='py-3 px-10 rounded-lg    text-[18px]  
                        font-[500] text-white cursor-pointer  bg-[#16a34a] nunito-family'>{slide.button}</button>
                    </div>
                </SwiperSlide>
       )) }
      </Swiper>
    </>
  )
}

export default Hero
