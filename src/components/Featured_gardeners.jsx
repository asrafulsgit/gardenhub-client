import React, { useContext } from 'react'
import { NavLink } from 'react-router';
import { AuthContext} from '../config/AuthProvider'
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { apiRequiest } from '../utils/ApiCall';
import { useState } from 'react';
import { minimizeData } from '../utils/minimizeData';
const Featured_gardeners = () => {
//   const gardeners = [
//   {
//     name: "Alice Green",
//     age: 34,
//     gender: "Female",
//     status: "Available",
//     experiences: "5 years in organic vegetable gardening",
//     image: "https://i.ibb.co/Q3x3sXkF/two-gardeners-smiling-while-holding-pot-plant-1150-26651.jpg",
//     totalSharedTips: 48,
//     isActive: true,
//     rating: 4.5,
//     reviews: 76,
//     description: "Tree service specialist with expertise in pruning, removal, and health assessment.",
//     tags: ["Tree Service", "Pruning", "Planting"],
//   },
  
//   {
//     name: "Catherine Woods",
//     age: 29,
//     gender: "Female",
//     status: "Available",
//     experiences: "3 years in rooftop gardening",
//     image: "https://i.ibb.co/bMmWsCsk/gardeners-with-pruner-spray-bottle-636537-254305.jpg",
//     totalSharedTips: 33,
//     isActive: true,
//     rating: 4.3,
//     reviews: 45,
//     description: "Specialist in space-efficient rooftop and balcony gardens.",
//     tags: ["Rooftop Gardening", "Container Plants", "Urban Greening"],
//   },
  
//   {
//     name: "Emily Stone",
//     age: 40,
//     gender: "Female",
//     status: "Available",
//     experiences: "12 years in fruit orchard maintenance",
//     image: "https://i.ibb.co/GQg8vJhh/young-beautiful-florist-watering-flowers-176420-2060.jpg",
//     totalSharedTips: 150,
//     isActive: true,
//     rating: 4.9,
//     reviews: 142,
//     description: "Veteran in fruit tree cultivation and seasonal maintenance.",
//     tags: ["Fruit Trees", "Pruning", "Irrigation"],
//   },
  
//   {
//     name: "Grace Hall",
//     age: 27,
//     gender: "Female",
//     status: "Available",
//     experiences: "2 years in herb gardening",
//     image: "https://i.ibb.co/3YRbXST9/happy-guy-girl-gardeners-hold-pots-with-petunia-wonderful-garden-sunny-day-472597-3062.jpg",
//     totalSharedTips: 22,
//     isActive: true,
//     rating: 4.2,
//     reviews: 39,
//     description: "Passionate about growing culinary and medicinal herbs at home.",
//     tags: ["Herbs", "Balcony Gardening", "Soil Mix"],
//   },
//   {
//     name: "Harry Kim",
//     age: 38,
//     gender: "Male",
//     status: "Available",
//     experiences: "9 years in sustainable permaculture",
//     image: "https://i.ibb.co/CstX2PR2/young-gardeners-spraying-plants-making-notes-23-2147768537.jpg",
//     totalSharedTips: 95,
//     isActive: true,
//     rating: 4.8,
//     reviews: 110,
//     description: "Dedicated to eco-friendly, sustainable gardening and design.",
//     tags: ["Permaculture", "Composting", "Sustainability"],
//   },
  
//   {
//     name: "Jake Lee",
//     age: 45,
//     gender: "Male",
//     status: "Available",
//     experiences: "15 years in landscape design and irrigation",
//     image: "https://i.ibb.co/GrpKkSB/two-gardeners-botanical-greenhouse-236854-16640.jpg",
//     totalSharedTips: 180,
//     isActive: true,
//     rating: 5.0,
//     reviews: 165,
//     description: "Master of landscape planning and efficient irrigation systems.",
//     tags: ["Landscape Design", "Irrigation", "Hardscaping"],
//   },
// ];
const [gardeners,setGardeners] = useState([])
  const [message, setMessage] = useState("");
  
  const {isDark} = useContext(AuthContext) 
  const getActiveGardeners = async () => {
    try {
      const data = await apiRequiest(
        "get",
        `/api/v1/gardener/active`
      );
      setGardeners(data?.activeGardeners);

    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setGardeners([]);
      setMessage("Active gardeners not found!");
 
    }
  };

  useEffect(()=>{
      getActiveGardeners()
  },[])

  

  return (
    <div className={`${isDark ? 'bg-black' : 'bg-[#1f29370e]'} py-12 px-5`}>
      <div className="container mx-auto text-center">
        <h2 className={`text-[26px] md:text-[30px]  ${isDark ? 'text-gray-300' : 'text-[#111827]'}   mb-2 font-[700] 
        nunito-family`}>Featured Gardeners</h2>
        <p className={` md:text-[18px] font-[400] ${isDark ? 'text-gray-500' : 'text-[#4b5563]'}  mb-8 roboto-family`}>
          Connect with our most active community members who are sharing valuable <br className='hidden md:block'  /> gardening knowledge
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
          {gardeners.map((gardener, index) => (
            <div
              key={index}
              className={` rounded-lg border 
                ${isDark ? 'bg-black' : 'bg-white border-[#e5e7eb]'}
                py-6 px-4`}
            >
              <div className="flex items-center gap-3">
                <div className="text-gray-500 w-[70px] 
                rounded-[50%]   h-[70px] overflow-hidden">
                    <img src={gardener.image} className='object-cover w-[100px]  h-[70px]'  alt="" />
                </div>
                <div className='text-left'>
                    <p className={`text-[20px] lg:text-[16px] xl:text-[20px] font-[600] 
                    ${isDark ? 'text-gray-400' : 'text-[#111827]'}
                    nunito-family`}>{gardener.name}</p>
                    <p className="text-[16px] lg:text-[14px] xl:text-[16px] font-[500]
                     text-[#16a34a]">{gardener.experties}</p>
                </div>
              </div>

              <p className=" text-[16px] font-[400]  my-4 text-left
               text-[#4b5563] lg:h-[80px] xl:h-auto roboto-family">{minimizeData(gardener.bio,65)}</p>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center text-green-500 text-xs">
                  {gardener.status == 'Active' && (
                    <>
                      <span className='py-1  px-3 flex text-sm text-[#166534] font-medium rounded-xl bg-[#dcfce7] roboto-family'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" stroklinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
                      Active</span>
                    </>
                  )}
                </div>
                <NavLink
                   to={`/gardener/${gardener._id}`}
                  className="text-green-600 hover:text-green-700 text-[16px] font-medium focus:outline-none"
                >
                  View Profile
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured_gardeners
