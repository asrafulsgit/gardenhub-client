import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../config/AuthProvider";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { apiRequiest } from "../utils/ApiCall";
import Loader from "../utils/Loader";
import { Helmet } from "react-helmet";

const Gardener_profile = () => {
  const {id} = useParams()
  const [gardener,setGardener] = useState({})
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  
  const {isDark} = useContext(AuthContext) 
  const navigate = useNavigate()
  const getGardenerDetials = async () => {
    if (!id) {
      toast.error("id is Required! please Reload your page or login again!");
      setMessage("gardener not found!");
      setGardener([]);
      return;
    }
    setLoading(true)
    try {
      const data = await apiRequiest(
        "get",
        `/api/v1/gardener/${id}`
      );
      setGardener(data?.gardener);
       setLoading(false)
    } catch (error) {
      console.log(error);
      navigate('/')
      setGardener([]);
      setMessage("You have no tips!");
      setLoading(false)
    }
  };

  useEffect(()=>{
      getGardenerDetials()
  },[])
  if(loading){
    return <><Loader /> </>
  }
  return (
   <><Helmet>
        <title>Gardener Profile</title>
      </Helmet> <section class={`py-10 px-5  ${isDark? "bg-black" :""} `}>
      <div className={`border ${isDark? "border-gray-900" :"border-gray-300"}  rounded-lg overflow-hidden`}>
      <div className="h-48 bg-green-600 ">
        <img
          src={gardener.image ||  "https://placehold.co/1200x400?text=Garden+Cover"}
          alt="Garden cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile image and basic info */}
      <div className="px-5 sm:px-6 pb-5">
        <div className="flex flex-col md:flex-row md:items-end -mt-12">
          <div className="flex-shrink-0">
            <img
              src={gardener.image || "https://placehold.co/150x150?text=Sarah"}
              alt="Sarah Johnson"
              className="h-24 w-24 rounded-full ring-4 ring-white bg-white object-cover"
            />
          </div>
          <div className="pt-5 md:mt-0 md:ml-4 flex-1">
            <div className="flex flex-col gap-1 md:gap-0 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className={`text-2xl font-bold ${isDark ? 'text-gray-400' :
                   'text-gray-900'} nunito-family`}>
                  {gardener.name}
                </h2>
                <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'} roboto-family`}>
                  {gardener.experties} • {gardener.experiences} years experience • Age : {gardener.age} • {gardener.gender}
                </p>
              </div>
              <div className="flex items-center nunito-family">
                <div className="flex items-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className={`ml-1 ${isDark ? 'text-gray-500' : 'text-gray-700'} font-medium`}>
                    {gardener.rating}</span>
                  <span className="ml-1 text-gray-500 text-sm">({gardener.reviews})</span>
                </div>
                {gardener.status === 'Active' ? <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Active
                </div> : <div className="bg-yellow-500 text-gray-300 text-xs font-bold px-2 py-1 rounded-full">
                  Inactive
                </div>}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 pb-5 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {/* About Section */}
          <div className="mb-6">
            <h3 className={`text-lg font-semibold nunito-family ${isDark ? 'text-gray-400' :'text-gray-900'} mb-3`}>
                About</h3>
            <p className={`${isDark ? "text-gray-500" : "text-gray-600"} roboto-family`}>
             {gardener.bio}
            </p>
            
          </div>

          {/* Services Section */}
          <div className="mb-6">
            <h3 className={`text-lg font-semibold nunito-family ${isDark ? 'text-gray-400' : 'text-gray-900'} mb-3`}>
              Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
                <div
              
                  className={`border ${isDark ? "" : 'border-gray-200'} rounded-lg p-4`}
                >
                  <div className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h4 className={`ml-2 font-medium nunito-family ${isDark ? 'text-gray-400' : 'text-gray-900'}`}>
                      {gardener.experties}
                    </h4>
                  </div>
                  <p className={`text-sm roboto-family ${isDark ? 'text-gray-500' :'text-gray-600'} `}>{gardener.bio}</p>
                  
                </div>
        
            </div>
          </div>

          {/* Portfolio Section */}
          <div className="mb-6">
            <h3 className={`text-lg font-semibold nunito-family ${isDark ? 'text-gray-400' : 'text-gray-900'} mb-3`}>
              Portfolio
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <img
                  key={num}
                  src={`https://placehold.co/300x200?text=Project+${num}`}
                  alt={`Garden project ${num}`}
                  className="rounded-lg w-full h-32 object-cover"
                />
              ))}
            </div>
          </div>

          {/* Reviews Section */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className={`text-lg font-semibold nunito-family ${isDark ? 'text-gray-400' : 'text-gray-900'} mb-3`}>Reviews</h3>
              <a
                href="#"
                className="text-sm text-green-600 hover:text-green-700"
              >
                See all {gardener.reviews} reviews
              </a>
            </div>

            <div className="space-y-4">
              <div className={`border ${isDark ? '' :'border-gray-200'} rounded-lg p-4`}>
                <div className="flex justify-between mb-2">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium text-sm">
                      JD
                    </div>
                    <div className="ml-3">
                      <p className={`text-sm font-medium ${isDark? 'text-gray-500': 'text-gray-900'}`}>
                        John Davis
                      </p>
                      <p className="text-xs text-gray-500">2 weeks ago</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Absolutely transformed my backyard! The design was stunning
                  and easy to maintain. Highly recommend!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section></>
  );
};

export default Gardener_profile;
