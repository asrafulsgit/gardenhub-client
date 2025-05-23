import React, { useContext, useState, useEffect} from 'react'
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

import { AuthContext } from '../config/AuthProvider';
import { apiRequiest } from '../utils/ApiCall';
import { minimizeData } from '../utils/minimizeData';
import Loader from '../utils/Loader';

const Explore_gardener = () => {

    const {isDark} = useContext(AuthContext)

    const [message, setMessage] = useState("Gardeners not found!");
    const [loading, setLoading] = useState(true);
  
   const [gardeners,setGardeners] = useState([])
    const getGardeners = async () => {
    try {
      const data = await apiRequiest(
        "get",
        `/gardeners`
      );
      setGardeners(data?.gardeners)
      setLoading(false)
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setGardeners([]);
      setMessage("Gardeners not found!");
      setLoading(false)
    }
  };

  useEffect(()=>{
      getGardeners()
  },[])

  
 

   if(loading){
    return <><Loader /> </>
  }
  return (
   <>
   <Helmet>
        <title>Explore Gardeners</title>
      </Helmet> <section
      id="gardener-listings"
      className={`py-8 px-5  ${isDark ? 'bg-black' : 'bg-white'}`}
      style={{ display: "block" }}
    >
      <h2 className={`text-[26px] md:text-[30px] ${isDark ? 'text-gray-400' : 'text-[#111827]'} mb-2 
      font-[700] nunito-family`}>
        Gardener Listings
      </h2>

      <div className="mb-6 flex sm:flex-row flex-col gap-2 sm:gap-0 sm:justify-between sm:items-center">
        <p className={`md:text-[18px] font-[400] ${isDark ? 'text-gray-500' :"text-[#4b5563]"}  roboto-family`}>Showing {gardeners.length} gardeners in your area</p>
        <div className="flex items-center">
          <span className={`mr-2 text-sm ${isDark? 'text-gray-500' : 'text-gray-600'}`}>Sort by:</span>
          <select className={`border nunito-family ${isDark ? 'border-gray-700 text-gray-500' : 'border-gray-300 '}  rounded-lg py-1 px-3 focus:ring-2
           focus:ring-green-500 focus:border-green-500 text-sm`}>
            <option>Recommended</option>
            <option>Highest Rated</option>
            <option>Lowest Price</option>
            <option>Highest Price</option>
            <option>Most Experience</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gardeners.map((gardener,index) => (
          <div
            key={index}
            className={`border ${isDark ? 'border-gray-800': 'border-gray-200'} rounded-lg 
            overflow-hidden 
            shadow-sm hover:shadow-md transition duration-300`}
          >
            <div className="relative">
              <img
                src={gardener.image}
                alt={gardener.name}
                className="w-full h-48 sm:h-60 md:h-48 object-cover"
              />
              {gardener.status === 'Active' && (
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Active
                </div>
              )}
            </div>
            <div className="p-2">
              <div className="flex justify-between items-start mb-2 nunito-family">
                <h3 className={` lg:text-[16px] xl:text-lg font-semibold 
                  ${isDark ? 'text-gray-400' :'text-gray-800'} `}>
                    {gardener.name}</h3>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1 text-gray-700 font-medium">
                    {gardener?.rating}</span>
                  <span className="ml-1 text-gray-500 text-sm">
                    ({gardener?.reviews})
                  </span>
                </div>
              </div>
              <p className={`${isDark ? 'text-gray-500': 'text-gray-600'}
               text-sm mb-3 roboto-family lg:h-[52px]`}>
                {gardener.bio.length >  70 ? gardener.bio.slice(0,70)+'...' : gardener.bio}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                
                  <span
                    key={index}
                    className="bg-green-100  text-green-800 text-xs px-2 py-1 rounded-full nunito-family"
                  >
                    {gardener.experties}
                  </span>
               
              </div>
              <div className="flex justify-between items-center">
              <Link to={`/gardener/${gardener._id}`}>  <button
                  className="bg-green-600 cursor-pointer hover:bg-green-700 nunito-family text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-150"
                  
                >
                  View Profile
                </button></Link>
                <span className= "px-2 py-0.5 rounded-sm text-sm  font-[400] text-green-800  bg-green-200  nunito-family">
                  {gardener.experiences} Years
                  </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section></>
  );
}

export default Explore_gardener
