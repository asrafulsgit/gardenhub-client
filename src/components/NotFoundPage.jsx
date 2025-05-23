import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../config/AuthProvider'
import errorImage from '../assets/error.png'

const NotFoundPage = () => {

    const {isDark} =useContext(AuthContext)
    
  return (
      <> 
      <div className={`nonito-family ${isDark ? 'bg-black' : ''} h-[100vh] w-[100%] flex flex-col gap-1.5 
      justify-center items-center`}>
      <img src={errorImage} alt="" width={300} height={300} />
      <p className={`font-medium opacity-80 ${isDark ? 'text-gray-500': ''}
       roboto-family text-center px-5`}>Oops! The page you're looking for doesn't exist.</p>
      <Link to='/'>
      <button className="mt-3 px-5 cursor-pointer py-2 border-none rounded-[3px]
       bg-green-900 text-white font-bold text-[16px] nunito-family">
              Go Back Home
            </button></Link>
    </div>
      </>
  )
}

export default NotFoundPage
