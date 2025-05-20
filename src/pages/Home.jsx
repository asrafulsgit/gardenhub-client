import React from 'react'
import Hero from '../components/Hero/Hero'
import Featured_gardeners from '../components/Featured_gardeners'
import Trending_tips from '../components/Trending_tips'
const Home = () => {
  return (
   <>
        <Hero /> 
      <div className='px-5'>
          <Featured_gardeners />
          <Trending_tips />
      </div>
  </>
  )
}

export default Home
