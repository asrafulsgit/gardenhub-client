import React from "react";


const dummyGardener = {
  avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  name: "Sara Ahmed",
  username: "sara_gardens",
  bio: "Passionate urban gardener specializing in herbs and succulents. Loves organic gardening and eco-friendly techniques.",
  rating: 4.7,
  yearsOfExperience: 5,
  isActive: true,
  specialist: ["Herbs", "Succulents", "Organic Gardening"],
};

export default function Featured_gardeners() {
  return (
    <div className="p-6 bg-[#E4FEEC] min-h-screen flex justify-center items-center">
      <FeaturedGardenerCard gardener={dummyGardener} />
    </div>
  );
}




const FeaturedGardenerCard = ({ gardener }) => {
  const {
    avatar,
    name,
    username,
    bio,
    rating,
    yearsOfExperience,
    isActive,
    specialist,
  } = gardener;

  return (
    <div className="bg-[#E4FEEC] rounded-lg shadow-md p-6 
    flex flex-col  items-center sm:items-start  
    hover:shadow-xl transition-shadow max-w-md mx-auto">
  
      <div className="flex justify-between w-full">
            <div className="flex items-center gap-4">
                <img
                src={avatar}
                alt={`${name}'s avatar`}
                className="w-18 h-18 rounded-full object-cover border-4 border-[#0A6B01]"
            />
            <div>
                <h3 className="text-xl font-semibold text-[#111827]">{name}</h3>
                   {/* Specialist tags */}
                <div className="flex flex-wrap gap-2 ">
                {
                <span
                    className="text-xs  text-[#2BC854]
                    py-1 rounded-full"
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
            } text-white`}
            title={isActive ? "Active Now" : "Inactive"}
          >
            {isActive ? "Active" : "Inactive"}
          </span>
            </div>
      </div>
      {/* Info */}
        <p className="text-sm text-gray-700 mt-1 line-clamp-3 pt-2">{bio}</p>
        {/* Rating and Experience */}
        <div className="flex justify-between items-center w-full mt-4 
         text-[#0A6B01]">
          <div className="flex items-center">
              <svg
                className={`w-4 h-4 text-[#2BC854]`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.92-.755 1.688-1.54 1.118L10 13.347l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L3.613 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
            </svg>
            <span className="ml-2 font-semibold">{rating.toFixed(1)}</span>
          </div>
           <button
            type="button"
            className="w-full cursor-pointer sm:w-auto px-5 py-2 rounded-full bg-[#2BC854] text-white font-semibold hover:bg-[#0A6B01] transition"
            onClick={() => alert(`View profile of ${name}`)}
          >
            View Profile
          </button>
        </div>
    </div>
  );
};

