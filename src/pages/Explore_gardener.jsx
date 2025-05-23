import React, { useContext } from 'react'
import { generatePath, Link, NavLink } from 'react-router';
import { AuthContext } from '../config/AuthProvider';
import { useState } from 'react';
import { apiRequiest } from '../utils/ApiCall';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import Loader from '../utils/Loader';
import { minimizeData } from '../utils/minimizeData';

const Explore_gardener = () => {

//   const gardeners = [
//   {
//     name: "Alice Green",
//     age: 34,
//     gender: "Female",
//     status: "Available",
//     experiences: "5 years",
//     image: "https://i.ibb.co/Q3x3sXkF/two-gardeners-smiling-while-holding-pot-plant-1150-26651.jpg",
//     totalSharedTips: 48,
//     isActive: true,
//     rating: 4.5,
//     reviews: 76,
//     description: "Tree service specialist with expertise in pruning, removal, and health assessment.",
//     tags: ["Tree Service", "Pruning"],
//   },
//   {
//     name: "Ben Thomas",
//     age: 42,
//     gender: "Male",
//     status: "Busy",
//     experiences: "10 years",
//     image: "  https://i.ibb.co/fVrFYj3M/outdoors-portrait-young-attractive-bearded-hispanic-man-blue-t-shirt-gloves-working-garden-with-tool.jpg",
//     totalSharedTips: 120,
//     isActive: false,
//     rating: 4.7,
//     reviews: 103,
//     description: "Expert in landscape architecture and flower bed design.",
//     tags: ["Landscaping", "Flower Beds"],
//   },
//   {
//     name: "Catherine Woods",
//     age: 29,
//     gender: "Female",
//     status: "Available",
//     experiences: "3 years",
//     image: "https://i.ibb.co/bMmWsCsk/gardeners-with-pruner-spray-bottle-636537-254305.jpg",
//     totalSharedTips: 33,
//     isActive: true,
//     rating: 4.3,
//     reviews: 45,
//     description: "Specialist in space-efficient rooftop and balcony gardens.",
//     tags: ["Urban Greening"],
//   },
//   {
//     name: "Daniel Brook",
//     age: 36,
//     gender: "Male",
//     status: "On Leave",
//     experiences: "7 years",
//     image: "https://i.ibb.co/Jw2XBVLb/gardeners-with-plants-beautiful-garden-center-496169-1401.jpg",
//     totalSharedTips: 89,
//     isActive: false,
//     rating: 4.6,
//     reviews: 67,
//     description: "Professional in lawn maintenance and eco-friendly pest control.",
//     tags: ["Lawn Care"],
//   },
//   {
//     name: "Emily Stone",
//     age: 40,
//     gender: "Female",
//     status: "Available",
//     experiences: "12 years ",
//     image: "https://i.ibb.co/GQg8vJhh/young-beautiful-florist-watering-flowers-176420-2060.jpg",
//     totalSharedTips: 150,
//     isActive: true,
//     rating: 4.9,
//     reviews: 142,
//     description: "Veteran in fruit tree cultivation and seasonal maintenance.",
//     tags: ["Fruit Trees", "Irrigation"],
//   },
//   {
//     name: "Frank Silva",
//     age: 31,
//     gender: "Male",
//     status: "Busy",
//     experiences: "6 years ",
//     image: "https://i.ibb.co/4wkSJKLK/portrait-man-working-with-weedwacker-329181-20603.jpg",
//     totalSharedTips: 70,
//     isActive: false,
//     rating: 4.4,
//     reviews: 58,
//     description: "Hydroponics enthusiast helping clients grow indoor food gardens.",
//     tags: ["Hydroponics","Water Systems"],
//   },
//   {
//     name: "Grace Hall",
//     age: 27,
//     gender: "Female",
//     status: "Available",
//     experiences: "2 years ",
//     image: "https://i.ibb.co/3YRbXST9/happy-guy-girl-gardeners-hold-pots-with-petunia-wonderful-garden-sunny-day-472597-3062.jpg",
//     totalSharedTips: 22,
//     isActive: true,
//     rating: 4.2,
//     reviews: 39,
//     description: "Passionate about growing culinary and medicinal herbs at home.",
//     tags: ["Soil Mix"],
//   },
//   {
//     name: "Harry Kim",
//     age: 38,
//     gender: "Male",
//     status: "Available",
//     experiences: "9 years",
//     image: "https://i.ibb.co/CstX2PR2/young-gardeners-spraying-plants-making-notes-23-2147768537.jpg",
//     totalSharedTips: 95,
//     isActive: true,
//     rating: 4.8,
//     reviews: 110,
//     description: "Dedicated to eco-friendly, sustainable gardening and design.",
//     tags: ["Sustainability"],
//   },
//   {
//     name: "Isla Rivera",
//     age: 33,
//     gender: "Female",
//     status: "On Leave",
//     experiences: "5 years",
//     image: "https://i.ibb.co/G4stSxBb/man-cutting-plants-garden-1048944-25563344.jpg",
//     totalSharedTips: 60,
//     isActive: false,
//     rating: 4.6,
//     reviews: 52,
//     description: "Bonsai artist with a knack for shaping and nurturing miniature trees.",
//     tags: ["Bonsai", "Aesthetics"],
//   },
//   {
//     name: "Jake Lee",
//     age: 45,
//     gender: "Male",
//     status: "Available",
//     experiences: "15 years",
//     image: "https://i.ibb.co/GrpKkSB/two-gardeners-botanical-greenhouse-236854-16640.jpg",
//     totalSharedTips: 180,
//     isActive: true,
//     rating: 5.0,
//     reviews: 165,
//     description: "Master of landscape planning and efficient irrigation systems.",
//     tags: ["Irrigation", "Hardscaping"],
//   },
// ];
const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);
  
   const [gardeners,setGardeners] = useState([])
  const getGardeners = async () => {
    try {
      const data = await apiRequiest(
        "get",
        `/api/v1/gardeners`
      );
      setGardeners(data?.gardeners)
      setLoading(false)
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setGardeners([]);
      setMessage("Active gardeners not found!");
      setLoading(false)

    }
  };

  useEffect(()=>{
      getGardeners()
  },[])

  
  const openGardenerProfile = (id) => {
    console.log(`Navigating to profile: ${id}`);
 
  };
  const {isDark} = useContext(AuthContext)
   if(loading){
    return <><Loader /> </>
  }
  return (
    <section
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
               text-sm mb-3 roboto-family lg:h-[40px]`}>{minimizeData(gardener?.bio,90)}</p>
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
                  onClick={() => openGardenerProfile(gardener._id)}
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
    </section>
  );
}

export default Explore_gardener
