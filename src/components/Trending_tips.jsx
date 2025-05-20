import React from 'react'
import { NavLink } from 'react-router';

const Trending_tips = () => {
  const tips = [
    {
      title: 'Tomato Growing',
      topic: 'Growing Perfect Tomatoes',
      level: 'Easy',
      description:
        'Learn the secrets to growing juicy, flavorful tomatoes in any space, from containers to garden beds.',
      likes: 248,
      link: '#',
    },
    {
      title: 'Composting',
      topic: 'Composting for Beginners',
      level: 'Medium',
      description:
        'Start your composting journey with this simple guide to turning kitchen scraps into garden gold.',
      likes: 215,
      link: '#',
    },
    {
      title: 'Herb Garden',
      topic: 'Year-Round Herb Garden',
      level: 'Easy',
      description:
        'Create a thriving indoor herb garden that provides fresh flavors for your kitchen all year long.',
      likes: 189,
      link: '#',
    },
    {
      title: 'Tomato Growing',
      topic: 'Growing Perfect Tomatoes',
      level: 'Easy',
      description:
        'Learn the secrets to growing juicy, flavorful tomatoes in any space, from containers to garden beds.',
      likes: 248,
      link: '#',
    },
    {
      title: 'Composting',
      topic: 'Composting for Beginners',
      level: 'Medium',
      description:
        'Start your composting journey with this simple guide to turning kitchen scraps into garden gold.',
      likes: 215,
      link: '#',
    },
    {
      title: 'Herb Garden',
      topic: 'Year-Round Herb Garden',
      level: 'Easy',
      description:
        'Create a thriving indoor herb garden that provides fresh flavors for your kitchen all year long.',
      likes: 189,
      link: '#',
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-5">
      <div className="container mx-auto text-center">
        <h2 className="text-[30px] text-[#111827] mb-2 font-[700] nunito-family">Top Trending Tips</h2>
        <p className="text-[18px] font-[400] text-[#4b5563] mb-8 roboto-family">
          Discover our community's most popular gardening advice and techniques
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white border border-[#e5e7eb] rounded-lg  overflow-hidden flex flex-col"
            >
              <div className="bg-gray-200 h-32 flex items-center justify-center text-gray-500 text-xl font-semibold">
                {tip.title}
              </div>
                <div className='px-2 py-3'>
                    <div className='flex justify-between items-center mb-3'>
                    <h3 className="text-xl font-[600] text-left text-gray-800 nunito-family">{tip.topic}</h3>
                    <p className=" bg-green-100 text-green-700 rounded-full px-2 py-1 text-xs  font-medium roboto-family">
                        {tip.level}
                    </p>
                    </div>
                    <p className="text-gray-700 text-[16px] mb-4 text-left font-[400] roboto-family">{tip.description}</p>
               <div className="py-3 flex items-center justify-between border-t border-gray-200">
                    <div className="flex  gap-1 text-gray-600   text-[16px] text-left font-[400] roboto-family">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
              </svg>
                    {tip.likes} likes
                    </div>
                   <div> <NavLink
                    href={tip.link}
                    className="text-green-600 hover:text-green-700 text-[16px] font-medium  flex items-center"
                    >
                    Read More
                    <svg
                        className="w-4 h-4 ml-1 fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </NavLink></div>
                </div>
                </div>
            </div>
          ))}
        </div>
        
        <button className="inline-flex items-center px-6 py-3 bg-green-600 mt-10 text-white rounded-lg text-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors cursor-pointer duration-300 nunito-family">
      Browse All Tips
      <svg
        className="ml-2 w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
      </svg>
    </button>

      </div>
    </div>
  );
}

export default Trending_tips
