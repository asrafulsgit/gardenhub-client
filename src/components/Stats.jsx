import React, { useContext } from 'react'
import { AuthContext } from '../config/AuthProvider'

const Stats = () => {
  const {isDark} = useContext(AuthContext)
  return (
    <div className={`${isDark ? 'bg-black' : 'bg-white'}  py-10`}>
    <div className={` ${isDark ? 'bg-[#ffffff07]': 'bg-green-200 border-[#f3f4f6]'} mx-5 border
      rounded-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center`}>
          <div className=''>
            <p className="text-3xl md:text-4xl font-bold text-green-700 nunito-family">12+</p>
            <p className="text-gray-700 text-[17px] md:text-lg roboto-family">Years Experience</p>
            <p className="text-gray-500 text-sm roboto-family">Serving gardeners since 2010</p>
          </div>
          <div className=''>
            <p className="text-3xl md:text-4xl font-bold text-green-700 nunito-family">50k+</p>
            <p className="text-gray-700 text-[17px] md:text-lg  roboto-family">Community Members</p>
            <p className="text-gray-500 text-sm roboto-family">Growing together worldwide</p>
          </div>
          <div className=''>
            <p className="text-3xl md:text-4xl font-bold text-green-700 nunito-family">100+</p>
            <p className="text-gray-700 text-[17px] md:text-lg roboto-family">Garden Workshops</p>
            <p className="text-gray-500 text-sm roboto-family">Educating and inspiring</p>
          </div>
    </div></div>
  )
}

export default Stats
