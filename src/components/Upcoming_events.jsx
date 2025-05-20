import React from 'react'

const Upcoming_events = () => {
  const events = [
    {
      date: 'May 15, 2024',
      time: '10:00 AM - 2:00 PM',
      title: 'Women in Gardening Workshop',
      description:
        'Join our special workshop celebrating women gardeners. Learn techniques, share experiences, and build community.',
      spotsLeft: 15,
      buttonText: 'Register Now',
      buttonVariant: 'green',
      image: 'https://i.ibb.co/HWWPv0z/photo-1522543558187-768b6df7c25c.jpg', // Placeholder image
      featured: true,
    },
    {
      date: 'June 5, 2024',
      time: '9:00 AM - 3:00 PM',
      title: 'Community Garden Planting Day',
      description:
        'A fun-filled day of planting, socializing, and beautifying our community garden. All experience levels welcome!',
      spotsLeft: 'Unlimited spots',
      buttonText: 'Volunteer Now',
      buttonVariant: 'green',
      image: 'https://i.ibb.co/6J4FhkVV/photo-1491438590914-bc09fcaaf77a.jpg', 
      featured: false,
    },
    {
      date: 'July 22, 2024',
      time: '1:00 PM - 5:00 PM',
      title: 'Garden-to-Table Dinner',
      description:
        'Harvest fresh produce from our garden and learn to prepare delicious, seasonal dishes with our expert chef.',
      spotsLeft: 5,
      buttonText: 'Book Your Spot',
      buttonVariant: 'green',
      image: 'https://i.ibb.co/YFG2296c/photo-1528605248644-14dd04022da1.jpg',
      almostFull: true,
      featured: false,
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-[30px] text-[#111827] mb-2 font-[700] nunito-family">Upcoming Garden Events</h2>
        <p className="text-[18px] font-[400] text-[#4b5563] mb-8 roboto-family">
          Join our community gardening events and workshops to learn new skills, meet <br />
          fellow gardeners, and grow together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden relative">
              <div className="relative">
                
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                {event.featured && (
                  <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}
                {event.almostFull && (
                  <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    Almost Full
                  </span>
                )}
              </div>
              <div className="px-2 py-4 text-left">
                <div className="flex items-center text-gray-500 text-sm mb-2 roboto-family">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  {event.date} • {event.time}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 nunito-family">{event.title}</h3>
                <p className="text-gray-700  mb-4 font-[400] text-[16px] roboto-family">{event.description}</p>
                <div className="flex items-center justify-between mt-auto ">
                  <p className="text-gray-600 text-sm">
                    {typeof event.spotsLeft === 'number'
                      ? `${event.spotsLeft} spots left`
                      : event.spotsLeft}
                  </p>
                  <button
                    className={`px-4 py-2 rounded-md text-sm font-medium focus:outline-none transition-colors duration-300
                      ${
                        event.buttonVariant === 'green'
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : ''
                      }
                    `}
                  >
                    {event.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button className="inline-flex items-center px-6 
          py-3 border border-green-600 text-green-600 rounded-md text-base font-[500]
           hover:bg-green-50 transition-colors duration-300 cursor-pointer nunito-family">
            View All Events
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Upcoming_events
