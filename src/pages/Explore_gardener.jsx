import React, { useContext, useState, useEffect} from 'react'
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

import { AuthContext } from '../config/AuthProvider';
import { apiRequiest } from '../utils/ApiCall';
import Loader from '../utils/Loader';

const gardenerExpertiseCategories = [
  "All",
  "Organic Gardening",
  "Urban Gardening",
  "Indoor Plants",
  "Vertical Farming",
  "Soil Care",
  "Composting",
  "Hydroponics",
  "Aquaponics",
  "Fruit Trees",
  "Flower Gardening",
  "Herbal Gardening",
  "Pest Control",
  "Seasonal Gardening",
  "Vegetable Gardening",
  "Terrace Gardening",
  "Balcony Gardening",
  "Lawn Maintenance",
  "Native Plants",
  "Water Conservation",
  "Tree Pruning",
  "Landscape Design",
  "Irrigation Setup",
  "Seed Saving",
  "Greenhouse Gardening",
  "Plant Disease Management"
];


const Explore_gardener = () => {

    const {isDark} = useContext(AuthContext)

    const [message, setMessage] = useState("Gardeners not found!");
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
   const [gardeners,setGardeners] = useState([])

    const getGardeners = async () => {
    try {
      const data = await apiRequiest(
        "get",
        `/gardeners`
      );
      setGardeners(data?.data)
      setLoading(false)
    } catch (error) {
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
        <title> Explore Gardeners</title>
      </Helmet> <section
      id="gardener-listings"
      className={`py-8 px-5  ${isDark ? 'bg-black' : 'bg-white'}`}
      style={{ display: "block" }}
    >
      {/* Page Header */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h1
          className={`text-[26px] md:text-[30px] ${
            isDark ? "text-gray-400" : "text-[#111827]"
          } mb-2 
      font-[700] nunito-family`}
        >
           Explore Our Garden Experts
        </h1>
        <p
          className={`md:text-[18px] font-[400] ${
            isDark ? "text-gray-500" : "text-[#4b5563]"
          }  roboto-family`}
        >
          Discover passionate gardeners with a variety of specialties and experience. 
    Learn from the best or connect for personalized gardening services.
        </p>
      </div>
      {/* Filters */}
      <div
        className={`mb-8 flex flex-col ${
          isDark ? "bg-black border-gray-700" : "bg-white border-gray-200"
        } p-4 rounded-lg shadow-xs border `}
      >
          <h3
            className={`text-lg font-medium ${
              isDark ? "text-gray-400" : "text-gray-900"
            } mb-2 nunito-family`}
          >
            Search by Category
          </h3>
          <div className="w-full mx-auto flex flex-col md:flex-row 
          justify-between items-center gap-4 ">
            <input
              type="text"
              placeholder="Search by name..."
              className={`w-full md:w-1/2 px-4 py-2 border ${isDark ? " border-gray-600 text-gray-300" : "border-gray-300 text-gray-700"}
              rounded-md  outline-none  focus:ring-2 focus:ring-[#2BC854]`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className={`w-full md:w-1/3 px-4 py-2 border ${isDark ? " border-gray-600 " : "border-gray-300 "} text-gray-700
            rounded-md outline-none focus:ring-2 focus:ring-[#2BC854]`}
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              {gardenerExpertiseCategories?.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>
      
      </div>
      {/* Gardener Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gardeners?.map((gardener,index) => (
         <FeaturedGardenerCard key={index} gardener={gardener} />
        ))}
      </div>


      {/* Pagination Placeholder */}
      <div className="max-w-6xl mx-auto mt-10 flex justify-center">
        <nav className="flex gap-2">
          <button className="px-3 py-1 bg-[#0A6B01] text-white rounded hover:bg-[#2BC854]">
            Prev
          </button>
          <button className="px-3 py-1 bg-white dark:bg-gray-700 text-[#0A6B01] dark:text-white rounded">
            1
          </button>
          <button className="px-3 py-1 bg-white dark:bg-gray-700 text-[#0A6B01] dark:text-white rounded">
            2
          </button>
          <button className="px-3 py-1 bg-[#0A6B01] text-white rounded hover:bg-[#2BC854]">
            Next
          </button>
        </nav>
      </div>
    </section></>
  );
}

const FeaturedGardenerCard = ({ gardener }) => {
  const {
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
                src={user?.avatar}
                alt={`${user?.name}'s avatar`}
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
          <button
            type="button"
            className="roboto-family cursor-pointer sm:w-auto 
            px-3 py-1 rounded-lg bg-[#2BC854] text-white 
            text-[16px] hover:bg-[#0A6B01] transition"
            onClick={() => alert(`View profile of ${name}`)}
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};


export default Explore_gardener
