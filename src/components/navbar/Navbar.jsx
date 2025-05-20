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
            <button onClick={handleTheme} className={isDark ? 'opacity-100' : 'opacity-70'}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                </svg>
           </button >
            <button className={isDark ? 'opacity-100' : 'opacity-70'}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
            </button>
            {isLoggedIn ? <>
             <button onMouseEnter={()=> setIsHover(true)} onMouseLeave={()=> setIsHover(false)} className="rounded-3xl w-8  md:w-10 overflow-hidden flex justify-center cursor-pointer  items-center">
            <img
              alt="User"
              src={userInfo.photoURL ||  "https://i.ibb.co.com/hRGTZWdX/download.jpg"}
            />
            {isHover && <p className='absolute text-sm sm:text-[16px] translate-y-2  transition-translate z-100 top-15 rounded-lg p-1 border border-[#00000047] bg-white'>{userInfo?.displayName}</p>}
          </button>
            <button onClick={handleLogout} className="px-7 py-1.5 text-[18px] cursor-pointer bg-green-600 rounded-[5px]  text-white nunito-family">
               Logout
            </button>
            
            </>
            : <Link to='/login-signin'><button className="px-7 py-1.5 text-[18px] cursor-pointer bg-green-600 rounded-[5px]  text-white nunito-family">
              Login
            </button></Link>  }
          </div>
    </>
  )
}

export default Navbar
