import React from 'react'

const Stats = () => {
  return (
    <div className=" bg-green-200 mx-5 border border-[#f3f4f6] rounded-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className=''>
            <p className="text-4xl font-bold text-green-700 nunito-family">12+</p>
            <p className="text-gray-700 text-lg roboto-family">Years Experience</p>
            <p className="text-gray-500 text-sm roboto-family">Serving gardeners since 2010</p>
          </div>
          <div className=''>
            <p className="text-4xl font-bold text-green-700 nunito-family">50k+</p>
            <p className="text-gray-700 text-lg  roboto-family">Community Members</p>
            <p className="text-gray-500 text-sm roboto-family">Growing together worldwide</p>
          </div>
          <div className=''>
            <p className="text-4xl font-bold text-green-700 nunito-family">100+</p>
            <p className="text-gray-700 text-lg roboto-family">Garden Workshops</p>
            <p className="text-gray-500 text-sm roboto-family">Educating and inspiring</p>
          </div>
    </div>
  )
}

export default Stats
