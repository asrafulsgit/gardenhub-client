import React, { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Toastify from './config/Toastify'
import Lottie from 'lottie-react';

import Navbar from './components/navbar/Navbar'
import Asidebar from './components/asidebar/Asidebar'
import Footer from './components/Footer'

import loadingAnimation from '../public/loader.json'
import ScrollVehaviour from './utils/ScrollVehaviour'
import { AuthContext } from './config/AuthProvider'
import Nav from './test/nav';

const App = () => {

  const {loading,isDark,isMobileNav}=useContext(AuthContext)
  const [showLoader, setShowLoader] = useState(true)

   
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (loading || showLoader) {
    return (
      <div className={`w-full h-screen flex justify-center items-center
      ${isDark ? 'bg-black' : ''}`}>
        <div className='w-60 h-60'>
          <Lottie animationData={loadingAnimation} loop={true} />
        </div>
      </div>
    )
  }

  return (
    <> 
    <Toastify /> 
    <ScrollVehaviour />

    <Nav />
    <div className="flex   w-[100%] ">

      {/* Sidebar  */}
      {/* <aside className="hidden lg:w-[20%]  h-screen text-white bg-[#166534] 
      lg:flex flex-col justify-between fixed bottom-0 top-0 z-10">
        <Asidebar />
      </aside> */}

      {/* Sidebar  mobile*/}
        {/* {isMobileNav && <aside className="lg:hidden w-[100%]  h-screen text-white bg-[#166534] 
        flex flex-col justify-between fixed bottom-0 top-0 z-10">
          <Asidebar/>
        </aside>} */}
       
 
      {/* Main Content */}


      <div className="w-[100%] flex flex-col">
        
        {/* navabar */}
        {/* <header className={`${isDark ? 'bg-black border-b' : 'bg-white '} 
        px-6 py-4 w-[100%]  lg:w-[calc(100%-20%)] shadow flex 
        justify-between items-center fixed left-0 lg:left-[20%] top-0 right-0  z-10`}>
         <Navbar />
        </header> */}

        {/* Scrollable Content */}
        <main>
              <Outlet />     
        </main>
        <div>
          <Footer />
        </div>
      </div>

      
    </div>   
    </>
    
  )
}

export default App
