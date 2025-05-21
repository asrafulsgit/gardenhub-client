import React, { useContext } from 'react'
import { AuthContext } from '../config/AuthProvider'

const Share_garden_tip = () => {
  const {isDark} = useContext(AuthContext)
  return (
    <section
      className={`page-section min-h-screen ${isDark ? 'bg-black' : 'bg-gray-100'} 
      py-12 px-5 `}
    >
      <div className={`max-w-3xl mx-auto ${isDark ? 'bg-black border-gray-800':'bg-white border-gray-100'} rounded-lg shadow-xs
       overflow-hidden border `}>
        <div className="px-6 py-8">
          <div className="text-center mb-8">
            <h2 className={`text-[30px] ${isDark ? 'text-gray-400' : 'text-[#111827]'} mb-2 
      font-[700] nunito-family`}>Share a Garden Tip</h2>
            <p className={`text-[18px] font-[400] ${isDark ? 'text-gray-500' :"text-[#4b5563]"}  roboto-family`}>
              Share your gardening knowledge with our community
            </p>
          </div>

          <form id="shareTipForm">
            <div className="mb-6">
              <label htmlFor="title" className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="e.g., How I Grow Tomatoes Indoors"
                className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="plantType" className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>
                Plant Type/Topic
              </label>
              <input
                type="text"
                id="plantType"
                name="plantType"
                placeholder="e.g., Tomatoes, Succulents, Composting"
                className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="difficultyLevel" className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>
                Difficulty Level
              </label>
              <select
                id="difficultyLevel"
                name="difficultyLevel"
                className={`w-full px-3 py-2 border ${isDark ? 'text-gray-700 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select difficulty level
                </option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="description" className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="6"
                placeholder="Share your detailed gardening tip here..."
                className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
                required
              ></textarea>
            </div>

            <div className="mb-6">
              <label htmlFor="imageUrl" className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>
                Image URL
              </label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                placeholder="https://example.com/your-garden-image.jpg"
                className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
                required
              />
              <p className="mt-1 text-sm text-gray-500 nunito-family">
                Add a URL to an image that illustrates your gardening tip
              </p>
            </div>

            <div className="mb-6">
              <label htmlFor="category" className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>
                Category
              </label>
              <select
                id="category"
                name="category"
                className={`w-full px-3 py-2 border ${isDark ? 'text-gray-700 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="Composting">Composting</option>
                <option value="Plant Care">Plant Care</option>
                <option value="Vertical Gardening">Vertical Gardening</option>
                <option value="Hydroponics">Hydroponics</option>
                <option value="Indoor Gardening">Indoor Gardening</option>
                <option value="Organic Gardening">Organic Gardening</option>
                <option value="Container Gardening">Container Gardening</option>
                <option value="Pest Control">Pest Control</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="availability" className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>
                Availability
              </label>
              <select
                id="availability"
                name="availability"
                className={`w-full px-3 py-2 border ${isDark ? 'text-gray-700 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select availability
                </option>
                <option value="Public">Public</option>
                <option value="Hidden">Hidden</option>
              </select>
              <p className="mt-1 text-sm text-gray-500 nunito-family">
                Public tips will be visible to all users, hidden tips are only visible to you
              </p>
            </div>

            <div className={`mb-8 p-4  ${isDark ? 'border border-gray-700' : 'bg-gray-50'} rounded-md`}>
              <h3 className={`text-sm font-medium nunito-family ${isDark ?'text-gray-400' :'text-gray-700'} mb-3 `}>Author Information (Read-only)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
                   
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>Email</label>
                  <input
                    type="email"
                    placeholder="john.doe@example.com"
                    className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
                    
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                id="submitTipBtn"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Submit Garden Tip
              </button>
            </div>
          </form>
        </div>
      </div>

      
    </section>
  )
}

export default Share_garden_tip
