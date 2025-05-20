import React from 'react'

const My_tips = () => {
  const tableHeader=['Image', 'Title', 'Category', 'Difficulty', 'Status', 'Likes', 'Actions']
  const allTips=[ 
                  {
                    id: 1,
                    title: 'Growing Perfect Tomatoes',
                    date: 'May 15, 2023',
                    category: 'Plant Care',
                    difficulty: 'Easy',
                    status: 'Public',
                    likes: 248,
                    image: 'https://placehold.co/100x100?text=Tomatoes'
                  },
                  {
                    id: 2,
                    title: 'Year-Round Herb Garden',
                    date: 'June 3, 2023',
                    category: 'Indoor Gardening',
                    difficulty: 'Easy',
                    status: 'Hidden',
                    likes: 0,
                    image: 'https://placehold.co/100x100?text=Herbs'
                  },
                  {
                    id: 3,
                    title: 'Composting for Beginners',
                    date: 'July 12, 2023',
                    category: 'Composting',
                    difficulty: 'Easy',
                    status: 'Public',
                    likes: 97,
                    image: 'https://placehold.co/100x100?text=Compost'
                  }
                ]
  return (
    <section id="myTips" className="page-section min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8" style={{ display: 'block' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">My Tips</h2>
          <p className="mt-2 text-lg text-gray-600">Manage your gardening tips and contributions</p>
        </div>

        {/* Action Buttons */}
        <div className="mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="mb-4 sm:mb-0">
            <a
              href="#shareTip"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add New Tip
            </a>
          </div>
          <div className="flex items-center">
            <label htmlFor="filter-status" className="mr-2 text-sm font-medium text-gray-700">Filter by:</label>
            <select
              id="filter-status"
              className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            >
              <option value="all">All Tips</option>
              <option value="public">Public Only</option>
              <option value="hidden">Hidden Only</option>
            </select>
          </div>
        </div>

        {/* Tips Table */}
        <div className="bg-white shadow-sm overflow-hidden border border-gray-200 sm:rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {tableHeader.map((header) => (
                    <th
                      key={header}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {allTips.map((tip) => (
                  <tr key={tip.id} className="tip-row" data-status={tip.status.toLowerCase()}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="h-16 w-16 rounded-md overflow-hidden">
                        <img src={tip.image} alt={tip.title} className="h-full w-full object-cover" />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{tip.title}</div>
                      <div className="text-sm text-gray-500">Added on {tip.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {tip.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {tip.difficulty}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${tip.status === 'Public' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                        {tip.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tip.likes}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <a href="#tipDetails" className="text-green-600 hover:text-green-900">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </a>
                        <a href="#updateTip" className="text-indigo-600 hover:text-indigo-900">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </a>
                        <button type="button" className="text-red-600 hover:text-red-900" onClick={() => console.log(`Open delete modal for ${tip.title}, ${tip.id}`)}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default My_tips
