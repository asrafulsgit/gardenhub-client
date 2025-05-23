import React, { useContext } from 'react'
import { AuthContext } from '../config/AuthProvider'
import { apiRequiest } from '../utils/ApiCall';
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from '../utils/Loader';
import { Link } from 'react-router';

const Browse_tips = () => {
  const {isDark} = useContext(AuthContext)
  const [browseTips, setBrowseTips] = useState([]);
  const [message, setMessage] = useState("");
  const [loading,setLoading] = useState(true)
  
   
    const getBrowseTips = async () => {
      try {
        const data = await apiRequiest(
          "get",
          '/api/v1/browse-tips'
        );
        setBrowseTips(data?.tips);
        setLoading(false)
      } catch (error) {
        console.log(error);
        toast.error(error.message);
        setMessage("tips not found!");
        setLoading(false)
      }
    };
  
    useEffect(() => {
      getBrowseTips();
    }, []);
 
   if(loading){
    return <> <Loader /> </>
   }

  return (
    <section className={`page-section min-h-screen 
    ${isDark ? 'bg-black' :'bg-gray-100'} py-12 px-5 `}>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className={`text-[26px] md:text-[30px] ${isDark ? 'text-gray-400' : 'text-[#111827]'} mb-2 
      font-[700] nunito-family`}>Browse Tips</h2>
          <p className={`md:text-[18px] font-[400] ${isDark ? 'text-gray-500' :"text-[#4b5563]"}  roboto-family`}>Explore gardening tips shared by our community</p>
        </div>

        <div className={`mb-8 ${isDark ? 'bg-black border-gray-700' : 'bg-white border-gray-200'} p-4 rounded-lg shadow-xs border `}>
      
            <div className="mb-4 md:mb-0">
              <h3 className={`text-lg font-medium ${isDark ? 'text-gray-400' : 'text-gray-900'} mb-2 nunito-family`}>Filter by Difficulty Level</h3>
             <div className='flex flex-col gap-2 md:gap-0 md:flex-row md:justify-between'>
              <div className="flex flex-wrap gap-2">
                {['All','Easy','Medium','Hard'].map((item,index)=>(
                  <button key={index} id="filter-all" 
                  className={`px-2 py-1  sm:px-4 sm:py-2 rounded-lg 
                  cursor-pointer ${isDark ? 'text-gray-400 border border-gray-700' : 
                  ' border border-gray-400'} focus:outline-none focus:ring-2 nunito-family `}> 
                  {item}
                </button>
                ))}
              </div>
              <div className="w-full md:w-64">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <input id="search-tips" type="text" placeholder="Search tips..." 
                className={`w-full pl-10 pr-3 py-2 border  rounded-md 
                leading-5 ${isDark ? 'border-gray-700 text-gray-400' : 'bg-white'} placeholder-gray-500 focus:outline-none 
                focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 
                focus:border-green-500 sm:text-sm nunito-family`} />
              </div>
            </div></div> 
            </div>
          
        </div>

        <div className={` shadow-xs overflow-hidden border
          ${isDark ? 'bg-black' : 'bg-white border-gray-200'} sm:rounded-lg`}>
          <div className="overflow-x-auto">
            <table className={`min-w-full divide-y ${isDark ? 'divide-gray-900' : 'divide-gray-200'} `}>
              <thead className={isDark ? 'bg-black' :  "bg-gray-50"}>
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Difficulty
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Likes
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className={`${isDark ? "bg-black divide-gray-900": 'bg-white divide-gray-200' } divide-y nunito-family`}>
          
              {browseTips.map((tip,index)=>{
                return(
                  <tr className="tip-row" key={index} data-difficulty="Easy">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-16 w-16 rounded-md overflow-hidden">
                      <img src={tip.image} 
                      alt="Growing Tomatoes" 
                      className="h-full w-full object-cover" />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm font-medium ${isDark ? ' text-gray-400' : 
                      ' text-gray-900'}`}>{tip.title}</div>
                    <div className="text-sm text-gray-500 roboto-family">
                      {tip?.user?.name}</div>
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
                  <td className={`px-6 py-4 
                    whitespace-nowrap text-sm ${isDark 
                    ? 'text-gray-400' : 
                    'text-gray-500'}`}>
                    {tip.likes}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                   <Link to={`/tip-details/${tip._id}`}> <button  
                    className="text-green-600 hover:text-green-900 cursor-pointer inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      View
                    </button></Link>
                  </td>
                </tr>
                )
              })}   
              </tbody>
            </table>
          </div>
        </div>

        {/* <div className={` ${isDark ? 'bg-black border-gray-700' : 'bg-white border-gray-200'} px-4 py-3 flex items-center 
        justify-between border  sm:px-6 mt-4 rounded-lg shadow-xs`}>
          
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-700'} nunito-family`}>
                Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of <span className="font-medium">24</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" aria-current="page" className="z-10 bg-green-50 border-green-500 text-green-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  1
                </a>
                <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  2
                </a>
                <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                  ...
                </span>
                <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  8
                </a>
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </nav>
            </div>
          </div>
          
        </div> */}
      </div>
    </section>
  
  )
}

export default Browse_tips
