import React from 'react'

const Navbar = () => {
  const isLoggedIn = false;
  return (
    <>
       <input
            type="text"
            placeholder="Search for gardening tips..."
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
          <div className="flex items-center gap-4">
            <button  className='opacity-70'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                </svg>
           </button >
            <button className='opacity-70'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
            </button>
            {isLoggedIn ?<>
            <button className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
            </button>
            <button className="px-7 py-1.5 text-[18px] cursor-pointer bg-green-600 rounded-[5px]  text-white nunito-family">
               Logout
            </button>
            
            </>
            : <button className="px-7 py-1.5 text-[18px] cursor-pointer bg-green-600 rounded-[5px]  text-white nunito-family">
              Login
            </button> }
          </div>
    </>
  )
}

export default Navbar
