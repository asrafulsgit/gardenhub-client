import React from 'react'
import { Helmet } from 'react-helmet';

import Hero from '../components/Hero/Hero'
import Featured_gardeners from '../components/Featured_gardeners'
import Trending_tips from '../components/Trending_tips'
import Upcoming_events from '../components/Upcoming_events'
import About from '../components/About'
import FAQ from '../components/FAQ'
import Stats from '../components/Stats'
import Featured_gardenersTest from '../test/Featured_gardeners';

const Home = () => {
  return (
   <>
        <Helmet>
          <title>Garden Hub | Home</title>
        </Helmet>
        <Hero /> 
          <Featured_gardenersTest />
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
