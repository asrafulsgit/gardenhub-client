import React, { useContext } from 'react'
import {NavLink} from 'react-router-dom'

import './aside.css'
import { AuthContext } from '../../config/AuthProvider'
import Logo from './Logo'


const Asidebar = () => {
    const {setIsMobileNav,isLoggedIn,userInfo} = useContext(AuthContext)
    const asideItems =[
        {
            name : "Home",
            icon : <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>,
            path : '/'
        },
        {
            name : "Explore Gardeners",
            icon :<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>,
            path : '/explore-gardeners'
        },
        {
            name : "Browse Tips",
            icon : <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>,
            path : '/browse-tips'
        },
        {
            name : "Share a Garden Tip",
            icon : <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>,
            path : '/share-garden-tip'
        },
        {
            name : "My Tips",
            icon : <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>,
            path : '/my-tips'
        },
]
  return (
    <>
        <div>
          <Logo />
          <nav className="space-y-2 pt-15 lg:pt-0 mt-6 px-2 flex flex-col aiside-items">
           {asideItems.map((item,index)=>(
                <NavLink key={index} onClick={()=>setIsMobileNav(false)} to={item.path}
                className='text-[15px] xl:text-[16px] font-[400]  rounded-lg px-[.5rem] xl:px-[1rem] py-[0.6rem] xl:py-[0.75rem] 
                flex   roboto-family '>
                  <span>{item.icon}</span> {item.name}</NavLink> 
           ))}
           
          </nav>
        </div> 

      {isLoggedIn &&  <div className="p-4 bg-green-800 flex items-center gap-3">
          <div className="w-[40px] h-[40px] bg-green-600 
          flex items-center justify-center text-xl 
          rounded-[50%] overflow-hidden">
            <img src={userInfo.photoURL ||
               "https://i.ibb.co.com/hRGTZWdX/download.jpg"} alt="user image" 
               className='w-[40px] h-[40px]'/>
          </div>
          <div>
            <div className=" nunito-family
            text-xs font-semibold">{userInfo.displayName}</div>
            <div className="text-[10px]
            roboto-family text-gray-300">{userInfo.email}</div>
          </div>
        </div>}
    </>
  )
}

export default Asidebar
