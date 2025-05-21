import React, { useContext, useState } from 'react'
import { AuthContext } from '../config/AuthProvider';

const Update_tips = () => {
  const [formData, setFormData] = useState({
    title: 'Growing Perfect Tomatoes',
    plantType: 'Tomatoes (Solanum lycopersicum)',
    difficultyLevel: 'Easy',
    description: `Growing tomatoes is one of the most rewarding experiences for any gardener. These versatile fruits are perfect for containers, raised beds, or traditional garden plots, making them accessible to everyone regardless of space limitations.

Start with healthy seedlings or quality seeds. For beginners, I recommend starting with seedlings from a reputable nursery. Choose determinate varieties for containers (they stay compact) or indeterminate for gardens (they grow taller and produce longer).

Tomatoes thrive in well-draining, nutrient-rich soil with a pH between 6.0 and 6.8. Mix in compost or aged manure before planting. Plant seedlings deeper than they were in their containers – bury them up to their first set of true leaves to encourage strong root development.`,
    imageUrl: 'https://placehold.co/1200x600?text=Tomato+Growing',
    category: 'Plant Care',
    availability: 'Public',
  });

  const [successModal, setSuccessModal] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setSuccessModal(true);
  };
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
      font-[700] nunito-family`}>Update Garden Tip</h2>
            <p className={`text-[18px] font-[400] ${isDark ? 'text-gray-500' :"text-[#4b5563]"}  roboto-family`}>Edit your gardening tip information</p>
          </div>

          <form onSubmit={handleSubmit}>
            {[
              ['Title', 'title', 'text'],
              ['Plant Type/Topic', 'plantType', 'text'],
              ['Image URL', 'imageUrl', 'url']
            ].map(([label, name, type]) => (
              <div className="mb-6" key={name}>
                <label htmlFor={name} className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>{label}</label>
                <input
                  type={type}
                  id={name}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
                />
              </div>
            ))}

            <div className="mb-6">
              <label htmlFor="difficultyLevel" className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>Difficulty Level</label>
              <select
                id="difficultyLevel"
                name="difficultyLevel"
                value={formData.difficultyLevel}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="description" className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>Description</label>
              <textarea
                id="description"
                name="description"
                rows={6}
                value={formData.description}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
              />
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-500 nunito-family">Current image:</p>
              <div className="mt-1 h-32 w-full overflow-hidden rounded-md ">
                <img src={formData.imageUrl} alt="Current tip" 
                className="h-full w-auto rounded-md object-cover" />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="category" className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
              >
                {[
                  'Plant Care', 'Composting', 'Vertical Gardening', 'Hydroponics',
                  'Indoor Gardening', 'Organic Gardening', 'Container Gardening', 'Pest Control'
                ].map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="availability" className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>Availability</label>
              <select
                id="availability"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`}
              >
                <option value="Public">Public</option>
                <option value="Hidden">Hidden</option>
              </select>
              <p className="mt-1 text-sm text-gray-500">
                Public tips will be visible to all users, hidden tips are only visible to you
              </p>
            </div>

            {/* Read-only author info */}
            <div className={`mb-8 p-4  ${isDark ? 'border border-gray-700' : 'bg-gray-50'} rounded-md`}>
              <h3 className={`text-sm font-medium nunito-family ${isDark ?'text-gray-400' :'text-gray-700'} mb-3 `}>Author Information (Read-only)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>Name</label>
                  <input type="text" value="John Doe" readOnly 
                  className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`} />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>Email</label>
                  <input type="email" value="john.doe@example.com" readOnly 
                  className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`} />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <button type="button" className="mb-3 sm:mb-0 inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                <svg className="h-5 w-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Cancel
              </button>
              <button type="submit" className="inline-flex justify-center items-center px-6 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Update Tip
              </button>
            </div>
          </form>
        </div>
      </div>

      {successModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={() => setSuccessModal(false)} />
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full z-10">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg font-medium text-gray-900">Success!</h3>
                  <p className="text-sm text-gray-500 mt-2">Your garden tip has been successfully updated. The changes are now live.</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full sm:w-auto inline-flex justify-center rounded-md px-4 py-2 bg-green-600 text-white font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                View Tip
              </button>
              <button
                type="button"
                onClick={() => setSuccessModal(false)}
                className="mt-3 w-full sm:w-auto inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Update_tips
