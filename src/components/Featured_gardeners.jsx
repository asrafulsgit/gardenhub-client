import React, { useContext,useState,useEffect } from 'react'
import { Link, NavLink } from 'react-router';
import { toast } from 'react-toastify';

import { apiRequiest } from '../utils/ApiCall';
import { AuthContext} from '../config/AuthProvider'

const Featured_gardeners = () => {

  const [gardeners,setGardeners] = useState([])
  
  const [message, setMessage] = useState("Active gardeners not found!");
  
  const {isDark} = useContext(AuthContext) 
  const [loading,setLoading]=useState(true)
  const getActiveGardeners = async () => {
    
    try {
      const data = await apiRequiest(
        "get",
        `/gardener/active`
      );
      setGardeners(data?.data);
    } catch (error) {
 
      toast.error(error.message);
      setGardeners([]);
      setMessage("Active gardeners not found!");
    }finally{
      setLoading(false)
    }
  };

  useEffect(()=>{
      getActiveGardeners()
  },[])

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-gray-700">
        Loading...
      </div>
    );
  }


  return (
    <div className={`${isDark ? 'bg-black' : 'bg-[#1f29370e]'} py-12 px-5`}>
      <div className="container mx-auto text-center">
        <h2 className={`text-[26px] md:text-[30px]  ${isDark ? 'text-gray-300' : 'text-[#111827]'}   mb-2 font-[700] 
        nunito-family`}>Featured Gardeners</h2>
        <p className={` md:text-[18px] font-[400] ${isDark ? 'text-gray-500' : 'text-[#4b5563]'}  mb-8 roboto-family`}>
          Connect with our most active community members who are sharing valuable <br className='hidden md:block'  /> gardening knowledge
        </p>
        {/* grid grid-cols-1 sm:grid-cols-2 
      lg:grid-cols-3 gap-6  mx-auto */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        gap-6 md:px-0">
          {gardeners?.map((gardener, index) => (
            <FeaturedGardenerCard key={index} gardener={gardener} />
          ))}
          {/* {gardeners.map((gardener, index) => (
            <div
              key={index}
              className={` rounded-lg border py-6 px-4
                ${isDark ? 'bg-black' : 'bg-white border-[#e5e7eb]'}
                `}
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
                    <p className="text-[16px] lg:text-[14px] xl:text-[16px] 
                    font-[500]
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
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default Featured_gardeners


const FeaturedGardenerCard = ({ gardener }) => {
  const {
    _id,
    name,
    bio,
    rating,
    isActive,
    specialist,
    user
  } = gardener;
  const {isDark} = useContext(AuthContext) 
  return (
    
    <div className={`rounded-lg border p-4 h-full flex flex-col
    ${isDark ? '' : 'bg-white border-[#e5e7eb]'}`}>
      {/* header*/}
      <div className="flex justify-between w-full mb-3">
            <div className="flex items-center gap-4">
                <img
                src={user?.avatar?.length === 0 ? '	https://i.ibb.co/PsHDfWt8/user-icon-illustration-f…-logo-web-site-social-media-mobile-app-ui-png.png'
                  : !user?.avatar ? 'https://i.ibb.co/PsHDfWt8/user-icon-illustration-f…-logo-web-site-social-media-mobile-app-ui-png.png' : user.avatar
                }
                alt={`${name}'s avatar`}
                className="w-18 h-18 rounded-full object-cover border-4 border-[#0A6B01]"
            />
            <div>
                <h3 className={`text-xl font-semibold 
                ${isDark ? 'text-gray-400' : 'text-[#111827]'}
                nunito-family`}>{user?.name}</h3>
                    
                <div className="flex flex-wrap gap-2 ">
                {
                <span
                    className="text-xs  text-[#2BC854]
                    py-1 rounded-full roboto-family"
                    >
                    {specialist[0]}
                    </span>}
                </div> 
            </div>
            </div>

            <div>
                <span
            className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full ${
              isActive ? "bg-[#2BC854]" : "bg-gray-400"
            } text-white roboto-family`}
            title={isActive ? "Active Now" : "Inactive"}
          >
            {isActive ? "Active" : "Inactive"}
          </span>
            </div>
      </div>
      {/* Content Body (bio + footer) */}
      <div className="flex flex-col flex-grow justify-between">
        {/* Bio */}
        <p className="text-sm text-left text-[#4b5563] line-clamp-3 roboto-family ">
          {bio.length > 100 ? `${bio.slice(0, 100)}...` : bio}
        </p>

        {/* Footer */}
        <div className="flex justify-between text-[#0A6B01] items-center pt-2 mt-auto">
          <div className="flex items-center">
            <svg
                    className={"w-4 h-4 text-[#2BC854]"}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.92-.755 1.688-1.54 1.118L10 13.347l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L3.613 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
                </svg>
            <span className="ml-2 font-semibold">{rating.toFixed(1)}</span>
          </div>
           <Link to={`/gardener/${gardener._id}`}> <button
            className="w-full cursor-pointer sm:w-auto px-5 py-2 rounded-full
             bg-[#2BC854] text-white font-semibold hover:bg-[#0A6B01] transition"
          >
            View Profile
          </button></Link>
        </div>
      </div>
    </div>
  );
};


