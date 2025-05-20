import React from 'react'
import Hero from '../components/Hero/Hero'
import Featured_gardeners from '../components/Featured_gardeners'
import Trending_tips from '../components/Trending_tips'
import Upcoming_events from '../components/Upcoming_events'
import About from '../components/About'
import FAQ from '../components/FAQ'
import Stats from '../components/Stats'
const Home = () => {
  return (
   <>
        <Hero /> 
          <Featured_gardeners />
          <Trending_tips />
          <Upcoming_events />
          <About />
          <FAQ />
          <Stats />
  </>
  )
}

export default Home
