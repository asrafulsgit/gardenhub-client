import React, { useContext,useState,useEffect } from 'react'
import { NavLink } from 'react-router';
import { toast } from 'react-toastify';

import { apiRequiest } from '../utils/ApiCall';
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

  const dummyGardeners =  [
  {
    id: "g001",
    name: "Sara Ahmed",
    username: "sara_gardens",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Urban gardening enthusiast.",
    location: "Dhaka, Bangladesh",
    joinedAt: "2023-08-15T10:30:00Z",
    yearsOfExperience: 5,
    age: 29,
    sex: "Female",
    specialist: ["Herbs", "Succulents", "Organic Gardening"],
    services: [
      {
        name: "Tree Service",
        description: "Expert in pruning, removal, and tree health assessments.",
      },
      {
        name: "Soil Testing",
        description: "Improving soil quality for optimized plant growth.",
      },
    ],
    totalTipsShared: 42,
    followersCount: 350,
    followingCount: 75,
    favoritePlants: ["Basil", "Aloe Vera", "Mint"],
    isActive: true,
    rating: 4.7,
  },
  {
    id: "g002",
    name: "Mehedi Hasan",
    username: "greenmehedi",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    bio: "Loves landscape design and managing large community gardens.",
    location: "Rajshahi, Bangladesh",
    joinedAt: "2022-05-03T09:00:00Z",
    yearsOfExperience: 8,
    age: 34,
    sex: "Male",
    specialist: ["Landscaping", "Tree Care"],
    services: [
      {
        name: "Landscape Design",
        description: "Design and layout planning for large gardens.",
      },
    ],
    totalTipsShared: 60,
    followersCount: 520,
    followingCount: 130,
    favoritePlants: ["Rose", "Bamboo", "Neem"],
    isActive: false,
    rating: 4.3,
  },
  {
    id: "g003",
    name: "Nusrat Jahan",
    username: "nusratblooms",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    bio: "Flower bed expert and seasonal gardening coach.",
    location: "Chattogram, Bangladesh",
    joinedAt: "2024-01-12T11:45:00Z",
    yearsOfExperience: 4,
    age: 27,
    sex: "Female",
    specialist: ["Floriculture", "Composting"],
    services: [
      {
        name: "Compost Guidance",
        description: "Teaching composting methods for home gardeners.",
      },
    ],
    totalTipsShared: 28,
    followersCount: 190,
    followingCount: 60,
    favoritePlants: ["Marigold", "Tulip", "Sunflower"],
    isActive: true,
    rating: 4.5,
  },
  {
    id: "g004",
    name: "Rafiq Ul Islam",
    username: "rafiqroots",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    bio: "Agriculturalist focused on urban fruit gardening.",
    location: "Khulna, Bangladesh",
    joinedAt: "2021-09-25T14:00:00Z",
    yearsOfExperience: 10,
    age: 38,
    sex: "Male",
    specialist: ["Fruit Plants", "Vertical Gardening"],
    services: [
      {
        name: "Fruit Garden Setup",
        description: "Design and management of small fruit gardens in urban areas.",
      },
    ],
    totalTipsShared: 77,
    followersCount: 610,
    followingCount: 95,
    favoritePlants: ["Guava", "Papaya", "Strawberry"],
    isActive: true,
    rating: 4.9,
  },
  {
    id: "g005",
    name: "Tania Rahman",
    username: "taniaterra",
    avatar: "https://randomuser.me/api/portraits/women/60.jpg",
    bio: "Balcony gardening expert with a passion for indoor plants.",
    location: "Sylhet, Bangladesh",
    joinedAt: "2023-04-18T13:25:00Z",
    yearsOfExperience: 3,
    age: 26,
    sex: "Female",
    specialist: ["Indoor Plants", "Container Gardening"],
    services: [
      {
        name: "Balcony Setup",
        description: "Transforming small spaces into vibrant gardens.",
      },
    ],
    totalTipsShared: 21,
    followersCount: 275,
    followingCount: 90,
    favoritePlants: ["Snake Plant", "Spider Plant", "Money Plant"],
    isActive: true,
    rating: 4.2,
  },
  {
    id: "g006",
    name: "Ahsan Kabir",
    username: "ahsanplants",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
    bio: "Sustainable gardening mentor teaching eco-friendly techniques.",
    location: "Barisal, Bangladesh",
    joinedAt: "2020-11-10T07:45:00Z",
    yearsOfExperience: 12,
    age: 41,
    sex: "Male",
    specialist: ["Permaculture", "Rainwater Harvesting"],
    services: [
      {
        name: "Eco Garden Setup",
        description: "Helping build sustainable gardens with minimal waste.",
      },
    ],
    totalTipsShared: 88,
    followersCount: 725,
    followingCount: 180,
    favoritePlants: ["Banana", "Lemon", "Spinach"],
    isActive: false,
    rating: 4.6,
  },
];


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
          {dummyGardeners.map((gardener, index) => (
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
    avatar,
    name,
    bio,
    rating,
    isActive,
    specialist,
  } = gardener;
  const {isDark} = useContext(AuthContext) 
  return (
    
    <div className={`rounded-lg border p-4 h-full flex flex-col
    ${isDark ? '' : 'bg-white border-[#e5e7eb]'}`}>
      {/* header*/}
      <div className="flex justify-between w-full mb-3">
            <div className="flex items-center gap-4">
                <img
                src={avatar}
                alt={`${name}'s avatar`}
                className="w-18 h-18 rounded-full object-cover border-4 border-[#0A6B01]"
            />
            <div>
                <h3 className={`text-xl font-semibold 
                ${isDark ? 'text-gray-400' : 'text-[#111827]'}
                nunito-family`}>{name}</h3>
                    
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


