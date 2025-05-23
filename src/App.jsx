import React, { useContext, useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Asidebar from './components/asidebar/Asidebar'
import { Outlet } from 'react-router'
import Footer from './components/Footer'

import { AuthContext } from './config/AuthProvider'
import Toastify from './config/Toastify'
import Lottie from 'lottie-react';
import loadingAnimation from '../public/loader.json'
const App = () => {
  const {loading,isDark,isMobileNav,setIsMobileNav}=useContext(AuthContext)
   
  
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
    <div className="flex   w-[100%] ">
      {/* Sidebar  */}
      <aside className="hidden lg:w-[20%]  h-screen text-white bg-[#166534] 
      lg:flex flex-col justify-between fixed bottom-0 top-0 z-10">
        <Asidebar />
      </aside>
  
        {isMobileNav && <aside className="lg:hidden w-[100%]  h-screen text-white bg-[#166534] 
        flex flex-col justify-between fixed bottom-0 top-0 z-10">
          <Asidebar/>
        </aside>}
       
 
      {/* Main Content Wrapper (with margin-left to account for sidebar width) */}
      <div className="w-[100%]  lg:w-[calc(100%-20%)]  lg:ml-[20%] flex flex-col">
        {/* Topbar */}
        <header className={`${isDark ? 'bg-black border-b' : 'bg-white '} 
        px-6 py-4 w-[100%]  lg:w-[calc(100%-20%)] shadow flex 
        justify-between items-center fixed left-0 lg:left-[20%] top-0 right-0  z-10`}>
         <Navbar />
        </header>

        {/* Scrollable Content */}
        <main className="pt-15">
            
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

const MenuItem = ({ icon, label, active }) => (
  <div className={`flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer ${active ? 'bg-green-800' : 'hover:bg-green-800'}`}>
    <span>{icon}</span>
    <span>{label}</span>
  </div>
);


export default App
