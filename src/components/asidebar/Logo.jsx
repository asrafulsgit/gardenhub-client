import React, { useContext } from 'react'
import { AuthContext } from '../../config/AuthProvider'

const Logo = () => {
    const {isDark} = useContext(AuthContext)
  return (
    <div className=" lg:h-[74px] pl-[14px] 
              lg:border-b border-[#15803d] text-2xl 
              font-bold flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" 
                className="h-7 w-7 xl:h-8 xl:w-8 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
                <h1 className={` text-[21px] xl:text-[22px] font-[700] 
                ${isDark ? 'text-gray-100' : ''}
                nunito-family`}>Garden Hub</h1>
    
    </div>
  )
}

export default Logo
