import React from 'react'
import { AuthContext } from '../../config/AuthProvider';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Logo from '../asidebar/Logo';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {

  const {userInfo,isDark,setIsDark,isMobileNav,setIsMobileNav, isLoggedIn,setIsLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoggoutBtnActive,setIsLoggoutBtnActive] = useState(false)
  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully!');
      navigate('/login-signin');
    } catch (err) {
      toast.error(err.message);
    }finally{
      setIsLoggedIn(false)
    }
  };
  
  
  
  const handleTheme = ()=>{
    setIsDark(!isDark)
    localStorage.setItem('isDark',JSON.stringify(!isDark))
  }

 
  
  return (
    <>
      
        <div className='flex justify-between w-[100%]'>
        <div className='lg:hidden flex gap-0 items-center'>
          <button
        type="button"
        className="lg:hidden cursor-pointer 
        top-4 left-4 z-20 p-2 rounded-md bg-green-800
          text-white hover:text-white 
          focus:outline-none"
        onClick={() => {
          setIsMobileNav(!isMobileNav)
        }}
        aria-controls="mobile-menu"
        aria-expanded={isMobileNav}
      >
        <span className="sr-only">Open main menu</span>
        {!isMobileNav ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
          </button>
          <div className='lg:hidden'>
            <Logo />
          </div>
        </div>


       <div>
             <input
                  type="text"
                  placeholder="Search for gardening tips..."
                  className={`px-4 py-2 border 
                    ${isDark ? 'text-gray-400 border-gray-700' : 
                      'border-gray-300'} hidden sm:block rounded-md focus:outline-none`}
                />
       </div>
          <div className="flex items-center gap-4">
             
                <button className={`sm:hidden  flex items-center`}>
                <svg class={`h-6 w-6 ${isDark && 'text-gray-500'} `} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                    </svg>
              </button>
              
              <label data-tooltip-id="my-tooltip" 
              data-tooltip-content={isDark ? 'Light' : 'Black'}  className={` swap swap-rotate`}>
  
              <input type="checkbox" onClick={handleTheme} className="theme-controller" value="synthwave" />

              {/* sun icon */}
              <svg
                className={`swap-off h-7 w-7 fill-current text-gray-500`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className={`swap-on h-7 w-7 fill-current text-gray-500`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
               </label>
            
            {isLoggedIn ? <>
             <div 
             className="rounded-3xl w-8  md:w-10 overflow-hidden flex justify-center cursor-pointer  items-center">
          
            <img
              data-tooltip-id="my-tooltip" 
              data-tooltip-content={!isLoggoutBtnActive ? userInfo.displayName : ''}
              onClick={()=>{
              setIsLoggoutBtnActive(!isLoggoutBtnActive)
            }}
              src={userInfo.photoURL || "https://i.ibb.co.com/hRGTZWdX/download.jpg"}
              alt="User"
            />
            <Tooltip id="my-tooltip" place="bottom" />
            {isLoggoutBtnActive && <button onClick={handleLogout} 
            className="absolute top-18 right-1 px-7 py-1.5 text-[18px] cursor-pointer bg-green-600 rounded-[5px]  text-white nunito-family">
               Logout
            </button>} 
             </div>
            
            
            </>
            : <Link to='/login-signin'><button className="px-7 py-1.5 text-[18px] cursor-pointer bg-green-600 rounded-[5px]  text-white nunito-family">
              Login
            </button></Link>  }
          </div>
        </div>
        
    </>
  )
}

export default Navbar
