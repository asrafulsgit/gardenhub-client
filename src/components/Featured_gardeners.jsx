import React, { useContext,useState,useEffect } from 'react'
import { NavLink } from 'react-router';
import { toast } from 'react-toastify';

import { apiRequiest } from '../utils/ApiCall';
import { minimizeData } from '../utils/minimizeData';
import { AuthContext} from '../config/AuthProvider'

const Featured_gardeners = () => {

const [gardeners,setGardeners] = useState([])
  
  const [message, setMessage] = useState("Active gardeners not found!");
  
  const {isDark} = useContext(AuthContext) 

  const getActiveGardeners = async () => {
    try {
      const data = await apiRequiest(
        "get",
        `/gardener/active`
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
