import React from 'react'
import { AuthContext } from '../../config/AuthProvider';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Navbar = () => {

  const {userInfo,isDark,setIsDark, isLoggedIn,setIsLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isHover,setIsHover] = useState(false)
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
       <input
            type="text"
            placeholder="Search for gardening tips..."
            className={`w-1/2 px-4 py-2 border ${isDark ? 'text-gray-400 border-gray-700' : 'border-gray-300'} rounded-md focus:outline-none`}
          />
          <div className="flex items-center gap-4">
              <label  className={`${isDark ? 'opacity-100' : 'opacity-70'} swap swap-rotate`}>
  
              <input type="checkbox" onClick={handleTheme} className="theme-controller" value="synthwave" />

              {/* sun icon */}
              <svg
                className="swap-off h-7 w-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-7 w-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>



           
            <button className={isDark ? 'opacity-100' : 'opacity-70'}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
            </button>
            
            {isLoggedIn ? <>
             <div onMouseEnter={()=> setIsHover(true)} 
             onMouseLeave={()=> setIsHover(false)} onClick={()=>{
              setIsLoggoutBtnActive(!isLoggoutBtnActive)
              setIsHover(false)
            }}
             className="rounded-3xl w-8  md:w-10 overflow-hidden flex justify-center cursor-pointer  items-center">
          
            <img
              src={userInfo.photoURL || "https://i.ibb.co.com/hRGTZWdX/download.jpg"}
              alt="User"
            />

            {isHover && !isLoggoutBtnActive && <p className='absolute top-15 right-1
            text-sm sm:text-[16px] translate-y-2  transition-translate  
             rounded-lg p-1 border border-[#00000047] bg-white'>{userInfo?.displayName}</p>}
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
    </>
  )
}

export default Navbar
