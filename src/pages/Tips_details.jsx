import React, { useContext } from 'react'
import { AuthContext } from '../config/AuthProvider'

const Tips_details = () => {
    const gardeningTip = 
  {
    id: 1,
    title: "How I Grow Tomatoes Indoors",
    plantType: "Tomato",
    difficulty: "Medium",
    description: "Growing tomatoes indoors requires a sunny windowsill or grow lights, regular watering, and support for the stems. I use containers with proper drainage and fertilize weekly.",
    images: ["https://example.com/images/tomatoes1.jpg"],
    category: "Plant Care",
    availability: "Public"
  }
  const {isDark} = useContext(AuthContext)
  return (
     <section id="tipDetails" className={`page-section min-h-screen ${isDark ? 'bg-black' : 'bg-gray-100'} 
      py-12 px-5 `} >
      <div className="max-w-4xl mx-auto">

        {/* Main Content Card */}
        <div className={`${isDark ? 'bg-black ' : 'bg-white border-gray-200'} 
        rounded-lg shadow-sm overflow-hidden 
        border `}>
          {/* Tip Header */}
          <div className="relative">
            <img src="https://placehold.co/1200x600?text=Tomato+Growing"
             alt="Growing Tomatoes" className="w-full h-64 sm:h-80 object-cover" />
            <div className="absolute top-0 right-0 p-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full 
              text-sm font-medium bg-green-100 text-green-800">{gardeningTip.difficulty}</span>
            </div>
          </div>

          <div className="p-6">
            

            
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className={`text-3xl font-bold  mb-2 sm:mb-0 ${isDark ? 'text-gray-400' : 'text-gray-900'} nunito-family`}>
          Growing Perfect Tomatoes
        </h1>

        <div id="likeButtonContainer" className="flex items-center">
          <button
            id="likeButton"
            className="inline-flex nunito-family items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            Like (248)
          </button>
        </div>
      </div>

      {/* Tip Metadata */}
      <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500 nunito-family">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
            />
          </svg>
          <span>
            Category: <span className="text-green-600 font-medium">Plant Care</span>
          </span>
        </div>

        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <span>248 views</span>
        </div>

        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>Posted: May 15, 2023</span>
        </div>

        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span>
            By: <span className="text-green-600 font-medium">Sarah Johnson</span>
          </span>
        </div>
      </div>

      {/* Plant Type/Topic */}
      <div className="mb-6">
        <h2 className={`text-lg font-medium ${isDark ? 'text-gray-400' : 'text-gray-900'} nunito-family  mb-2`}>Plant Type/Topic</h2>
        <p className={` text-[16px] ${isDark ? 'text-gray-500' : 'text-gray-700'} roboto-family`}>Tomatoes (Solanum lycopersicum)</p>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h2 className={`text-lg font-medium ${isDark ? 'text-gray-400' : 'text-gray-900'} nunito-family  mb-2`}>Description</h2>
        <div className="prose max-w-none text-gray-700">
          <p className={` mb-4 text-[16px] ${isDark ? 'text-gray-500' : 'text-gray-700'} roboto-family`}>
            Growing tomatoes is one of the most rewarding experiences for any gardener...
          </p>

          <h3 className={`text-lg font-medium ${isDark ? 'text-gray-400' : 'text-gray-900'} nunito-family  mb-2`}>Getting Started</h3>
          <p className={`mb-4 text-[16px] ${isDark ? 'text-gray-500' : 'text-gray-700'} roboto-family`}>
            Start with healthy seedlings or quality seeds...
          </p>

          <h3 className={`text-lg font-medium ${isDark ? 'text-gray-400' : 'text-gray-900'} nunito-family  mb-2`}>Soil and Planting</h3>
          <p className={` mb-4 text-[16px] ${isDark ? 'text-gray-500' : 'text-gray-700'} roboto-family`}>
            Tomatoes thrive in well-draining, nutrient-rich soil...
          </p>

          <h3 className={`text-lg font-medium ${isDark ? 'text-gray-400' : 'text-gray-900'} nunito-family  mb-2`}>Watering and Feeding</h3>
          <p className={` mb-4 text-[16px] ${isDark ? 'text-gray-500' : 'text-gray-700'} roboto-family`}>
            Consistent watering is crucial...
          </p>

          <h3 className={`text-lg font-medium ${isDark ? 'text-gray-400' : 'text-gray-900'} nunito-family  mb-2`}>Support and Pruning</h3>
          <p className={` mb-4 text-[16px] ${isDark ? 'text-gray-500' : 'text-gray-700'} roboto-family`}>
            Install stakes, cages, or trellises at planting time...
          </p>

          <h3 className={`text-lg font-medium ${isDark ? 'text-gray-400' : 'text-gray-900'} nunito-family  mb-2`}>
            Common Problems and Solutions
          </h3>
          <ul className="list-disc pl-5 mb-4">
            <li className={`mb-2 text-[16px] ${isDark ? 'text-gray-500' : 'text-gray-700'} roboto-family`}>Blossom end rot: Caused by calcium deficiency...</li>
            <li className={`mb-2 text-[16px] ${isDark ? 'text-gray-500' : 'text-gray-700'} roboto-family`}>Cracking: Results from irregular watering...</li>
            <li className={`mb-2 text-[16px] ${isDark ? 'text-gray-500' : 'text-gray-700'} roboto-family`}>Pests: Use companion planting with basil and marigolds...</li>
          </ul>

          <h3 className={`text-lg font-medium ${isDark ? 'text-gray-400' : 'text-gray-900'} nunito-family  mb-2`}>Harvesting</h3>
          <p className={` text-[16px] ${isDark ? 'text-gray-500' : 'text-gray-700'} roboto-family`}>
            Harvest when fruits are firm and fully colored...
          </p>
        </div>
      </div>

      {/* Author Info */}
      <div className={`border-t ${isDark ? '':'border-gray-200'} pt-6 mt-8`}>
        <div className="flex items-center">
          <img
            src="https://placehold.co/100x100?text=Avatar1"
            alt="Sarah Johnson"
            className="h-12 w-12 rounded-full mr-4"
          />
          <div>
            <h3 className={`text-lg font-medium ${ isDark ? 'text-gray-400' : 'text-gray-900'} nunito-family`}>About the Author</h3>
            <p className={ `${isDark ? 'text-gray-500' : 'text-gray-700'} roboto-family`}>
              Sarah Johnson is an urban gardener specializing in small-space gardening...
            </p>
          </div>
        </div>
      </div>
    
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tips_details
