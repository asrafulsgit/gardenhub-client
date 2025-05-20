import React from 'react'
import { NavLink } from 'react-router';

const Featured_gardeners = () => {
  const gardeners = [
    {
      name: 'Sarah Johnson',
      expertise: 'Urban Gardener',
      avatar: 'Avatar1',
      description:
        'Specializes in small-space gardening solutions for apartment dwellers. Growing herbs and vegetables on her balcony for 5+ years.',
      isActive: true,
      profileLink: '#',
    },
    {
      name: 'Michael Chen',
      expertise: 'Permaculture Expert',
      avatar: 'Avatar2',
      description:
        'Passionate about sustainable gardening practices. Transformed his suburban yard into a food forest with over 30 edible plant species.',
      isActive: true,
      profileLink: '#',
    },
    {
      name: 'Elena Rodriguez',
      expertise: 'Hydroponic Specialist',
      avatar: 'Avatar3',
      description:
        'Indoor gardening enthusiast who grows vegetables year-round using DIY hydroponic systems. Loves sharing beginner-friendly setups.',
      isActive: true,
      profileLink: '#',
    },
    {
      name: 'Sarah Johnson',
      expertise: 'Urban Gardener',
      avatar: 'Avatar1',
      description:
        'Specializes in small-space gardening solutions for apartment dwellers. Growing herbs and vegetables on her balcony for 5+ years.',
      isActive: true,
      profileLink: '#',
    },
    {
      name: 'Michael Chen',
      expertise: 'Permaculture Expert',
      avatar: 'Avatar2',
      description:
        'Passionate about sustainable gardening practices. Transformed his suburban yard into a food forest with over 30 edible plant species.',
      isActive: true,
      profileLink: '#',
    },
    {
      name: 'Elena Rodriguez',
      expertise: 'Hydroponic Specialist',
      avatar: 'Avatar3',
      description:
        'Indoor gardening enthusiast who grows vegetables year-round using DIY hydroponic systems. Loves sharing beginner-friendly setups.',
      isActive: true,
      profileLink: '#',
    },
  ];

  return (
    <div className="bg-[#1f29370e] py-12 px-5">
      <div className="container mx-auto text-center">
        <h2 className="text-[30px] text-[#111827] mb-2 font-[700] nunito-family">Featured Gardeners</h2>
        <p className="text-[18px] font-[400] text-[#4b5563] mb-8 roboto-family">
          Connect with our most active community members who are sharing valuable <br /> gardening knowledge
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
          {gardeners.map((gardener, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-[#e5e7eb] py-6 px-4"
            >
              <div className="flex items-center gap-3">
                <div className="text-gray-500 border w-[70px]  h-[70px]">
                    <img src={gardener.avatar} className='' alt="" />
                </div>
                <div className='text-left'>
                    <p className="text-[20px] font-[600] nunito-family">{gardener.name}</p>
                    <p className="text-[16px] font-[500] text-[#16a34a]">{gardener.expertise}</p>
                </div>
              </div>

              <p className="text-[16px] font-[400]  my-4 text-left text-[#4b5563] roboto-family">{gardener.description}</p>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center text-green-500 text-xs">
                  {gardener.isActive && (
                    <>
                      <span className='py-1  px-3 flex text-sm text-[#166534] font-medium rounded-xl bg-[#dcfce7] roboto-family'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
                      Active</span>
                    </>
                  )}
                </div>
                <NavLink
                   to=''
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
