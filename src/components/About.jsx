import React, { useContext } from 'react'
import { AuthContext } from '../config/AuthProvider'
import { Link } from 'react-router'

const About = () => {

   const {isDark} = useContext(AuthContext)

 return(
    <div className={`${isDark ? 'bg-[#000000f7]' : 
    'bg-[#1f29370e]'} py-12 px-5`}>
      <div className="container mx-auto px-4">
        {/* About Header */}
        <div className="text-center mb-12">
          <h2 className={`text-[26px] md:text-[30px] ${isDark ?
           'text-gray-300' : 'text-[#111827]'}   mb-2 font-[700] 
        nunito-family`}>About</h2>
          <p className={`md:text-[18px] font-[400] ${isDark ? 'text-gray-500' : 'text-[#4b5563]'}  mb-8 roboto-family`}>
            Cultivating community and sustainable gardening practices since 2010.
          </p>
        </div>

        {/* Mission and Images */}
        <div className="flex flex-col lg:flex-row  items-center gap-12 mb-16">
          <div className="lg:w-1/2">
            <h3 className={`text-2xl   mb-4 ${isDark ? 'text-gray-400' : 'text-gray-800'}
            font-[600] nunito-family`}>Our Mission</h3>
            <p className={` mb-6 ${isDark ? 'text-gray-500' : 'text-gray-600'}
               roboto-family`}>
              At GardenHub, we believe everyone deserves access to green spaces that nourish both
              body and soul. We're dedicated to empowering gardeners of all skill levels with
              sustainable practices and quality resources.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <div>
                  <p className={`font-semibold  ${isDark ? 'text-gray-400' : 'text-gray-800'}
                  nunito-family`}>Sustainable Practices</p>
                  <p className={` text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}
                    roboto-family`}>
                    Promoting eco-friendly gardening methods that work with nature, not against it.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <div>
                  <p className={`font-semibold  ${isDark ? 'text-gray-400' : 'text-gray-800'}
                  nunito-family`}>Community Building</p>
                  <p className={` text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}
                    roboto-family`}>
                    Creating spaces for gardeners to connect, share knowledge, and grow together.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <div>
                  <p className={`font-semibold  ${isDark ? 'text-gray-400' : 'text-gray-800'}
                  nunito-family`}>Education & Resources</p>
                  <p className={` text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}
                    roboto-family`}>
                    Providing expert guidance and quality tools for successful gardening journeys.
                  </p>
                </div>
              </li>
            </ul>
           <Link to='/about'> <button className="mt-8 inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md text-base font-medium hover:bg-green-700 transition-colors duration-300 nunito-family cursor-pointer">
              Learn More About Our Story
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </button></Link>
          </div>

          <div className="lg:w-1/2 hidden lg:flex flex-col  justify-center items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1522543558187-768b6df7c25c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8Y29tbXVuaXR5JTI1MjBnYXJkZW4lMjUyMHZpYnJhbnQlMjUyMHN1bmxpdHxlbnwwfDB8fHwxNzQ3NzMzMjUwfDA&ixlib=rb-4.1.0&q=80&w=1080" // Placeholder, replace with actual image
              alt="People gardening"
              className="rounded-lg shadow-lg w-[300px] "
            />
            <img 
              src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8Y29tbXVuaXR5JTI1MjBnYXJkZW4lMjUyMHZpYnJhbnQlMjUyMHN1bmxpdHxlbnwwfDB8fHwxNzQ3NzMzMjUwfDA&ixlib=rb-4.1.0&q=80&w=1080" // Placeholder, replace with actual image
              alt="Community garden"
              className="rounded-lg shadow-lg max-w-[200px] "
            />
          </div>
        </div>

        
      </div>
    </div>
 )
}

export default About
