import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../config/AuthProvider';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import './upce.css'; 
import { apiRequiest } from '../../utils/ApiCall';
import { toast } from 'react-toastify';
import { Link } from 'react-router';


const Upcoming_events = () => {
  
  const [events,setEvents]=useState([]);
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
      const getEvents =async()=>{
        try {
          const data = await apiRequiest('get','/featured/events');
          setEvents(data?.events)
        } catch (error) {
          toast.error(error?.response?.data?.message)
        }finally{
      setLoading(false)
    }
      }
      getEvents()
  },[])
  const {isDark} = useContext(AuthContext)
  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-gray-700">
        Loading...
      </div>
    );
  }
  return (
    <div className={`${isDark ? 'bg-black' : 'bg-[#1f29370e]'} py-12 px-5`}>
      <div className="container mx-auto text-center ">
        <h2 className={`text-[26px] md:text-[30px] ${isDark ? 'text-gray-300' : 'text-[#111827]'}   mb-2 font-[700] 
        nunito-family`}>Upcoming Garden Events</h2>
        <p className={`md:text-[18px] font-[400] ${isDark ? 'text-gray-500' : 'text-[#4b5563]'}  mb-8 roboto-family`}>
          Join our community gardening events and workshops to learn new skills,
           meet <br className='md:block hidden'/>
          fellow gardeners, and grow together.
        </p>

        <div className="flex  flex-col xl:flex-row gap-8">
          <>
      <Swiper
        
        spaceBetween={30}
        className="mySwiper"
        breakpoints={{
        // when window width is >= 0px
        0: {
          slidesPerView: 1,
        },
        // when window width is >= 640px (sm breakpoint)
        640: {
          slidesPerView: 2,
        },
        // when window width is >= 1024px (lg breakpoint)
        1024: {
          slidesPerView: 3,
        },
      }}
      > {events?.map((event, index) => (
            
        <SwiperSlide key={index} className='!h-auto'>
          <div  className={`h-full flex flex-col  rounded-lg 
          ${isDark ? 'bg-[#ffffff06]' : 'bg-white'}
            shadow-sm overflow-hidden `}>
              
              <div className=' h-60  md:h-80 xl:h-60'>
                <img
                  src={event?.image}
                  alt={event?.title}
                  className=" w-full h-60  md:h-80 xl:h-46 object-contain"
                />
              </div>

              <div className="flex flex-col flex-grow justify-between p-4 text-left ">
                <div className="flex items-center text-gray-500 text-sm mb-2 roboto-family">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  {event?.date} • {event?.time}
                </div>
                <div className='flex-grow mb-1'>
                  <h3
      className={`text-xl font-[600] text-left ${isDark ? 'text-gray-400' : 'text-gray-800'} nunito-family`}
    >
      {event?.name?.length > 12 ? event?.name.slice(0, 23) + '...' : event?.name}
                  </h3>
                  <p className="text-gray-700 mt-2 text-sm  text-left
                   font-[400] line-clamp-3 roboto-family">
                    {event?.description?.length > 100
                      ? event?.description.slice(0, 100) + '...'
                      : event?.description}
                  </p>
                </div>
                <div className="mt-auto  flex items-center justify-between">
                  <Link to={`/event-details/${event?._id}`} className='ml-auto'> <button
                    className={`px-4 py-2 rounded-md text-sm font-medium 
                      focus:outline-none transition-colors duration-300 nunito-family
                     bg-green-600 text-white hover:bg-green-700 
                    `}
                  >
                    View Event
                  </button></Link>
                </div>
              </div>

          </div>
        </SwiperSlide>
          ))}
       
      </Swiper>
    </>
         
        </div>

        <div className="mt-12">
        <Link to={'/events'}>  <button className="inline-flex items-center px-6 
          py-3 border border-green-600 text-green-600 rounded-md text-base font-[500]
            transition-colors duration-300 cursor-pointer nunito-family">
            View All Events
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </button></Link>
        </div>
      </div>
    </div>
  );
}

export default Upcoming_events

 