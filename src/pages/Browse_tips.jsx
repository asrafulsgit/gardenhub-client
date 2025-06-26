import React, { useContext,useState,useEffect } from 'react'
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';

import { AuthContext } from '../config/AuthProvider'
import { apiRequiest } from '../utils/ApiCall';
import Loader from '../utils/Loader';

const Browse_tips = () => {
  const {isDark} = useContext(AuthContext)
  const [browseTips, setBrowseTips] = useState([]);
  const [message, setMessage] = useState("tips not found!");
  const [loading,setLoading] = useState(true)
  
   
    const getBrowseTips = async () => {
      try {
        const data = await apiRequiest(
          "get",
          '/browse-tips'
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
 

    const handleFilter =async(level)=>{
      if(level === 'All'){
        getBrowseTips()
        return;
      }
      try {
        const data = await apiRequiest(
          "get",
          `/filter-tips?level=${level}`
        );
        setBrowseTips(data?.tips);
      } catch (error) {
        console.log(error);
        toast.error(error.message);
        setMessage("tips not found!");
      }
    }

   const [activeLevel,setActiveLevel] = useState('All')
   const levels = ['All','Easy','Medium','Hard']
   if(loading){
    return <> <Loader /> </>
   }

  return (
   <> 
        <Helmet>
           <title>Browse Tips</title>
         </Helmet>
   <section className={`page-section min-h-screen 
    ${isDark ? 'bg-black' :'bg-gray-100'} py-12 px-5 `}>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className={`text-[26px] md:text-[30px] ${isDark ? 'text-gray-400' : 'text-[#111827]'} mb-2 
      font-[700] nunito-family`}>Browse Tips</h2>
          <p className={`md:text-[18px] font-[400] ${isDark ? 'text-gray-500'
             :"text-[#4b5563]"}  roboto-family`}>Explore gardening tips shared by our community</p>
        </div>

        <div className={`mb-8 ${isDark ? 'bg-black border-gray-700' : 'bg-white border-gray-200'} p-4 rounded-lg shadow-xs border `}>
      
            <div className="mb-4 md:mb-0">
              <h3 className={`text-lg font-medium ${isDark ? 'text-gray-400' : 'text-gray-900'} mb-2 nunito-family`}>Filter by Difficulty Level</h3>
             <div className='flex flex-col gap-2 md:gap-0 md:flex-row md:justify-between'>
              <div className="flex flex-wrap gap-2">
                {levels.map((item,index)=>(
                  <button key={index}
                  onClick={()=>{
                    handleFilter(item)
                    setActiveLevel(item)
                  }}
                  className={`px-2 py-1  sm:px-4 sm:py-2 rounded-lg 
                  ${activeLevel === item && 'bg-[#2BC854] text-white'}
                  cursor-pointer ${isDark ? 'text-gray-400 border border-gray-700' : 
                  'border border-gray-400'} focus:outline-none 
                   nunito-family `}> 
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
      </div>
    </section>
    </>
  
  )
}

export default Browse_tips
