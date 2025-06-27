import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../config/AuthProvider";
import { apiRequiest } from "../utils/ApiCall";
import { toast } from "react-toastify";
import { Link } from "react-router";

// const gardeningEvents = [
//   {
   
//     name: "Organic Gardening Basics",
//     type: "Workshop",
//     date: "2025-07-10",
//     time: "10:00 AM",
//     location: "Dhaka Botanical Garden",
//     fee: 0,
//     description:
//       "Learn how to grow organic vegetables using sustainable techniques.",
//     image: "https://example.com/images/organic-gardening.jpg",
//     maxRegistrations: 50,
//     registered: 42,
//     organizer: {
//       image: "https://example.com/images/organizer1.jpg",
//       name: "Asma Khatun",
//       email: "asma@gardenhub.com",
//     },
//     tags: ["Organic", "Vegetables", "Healthy Soil"],
//     isFree: true,
//     isFull: false,
//   },
//   {
//     _id: "e002",
//     name: "Composting at Home",
//     type: "Seminar",
//     date: "2025-07-18",
//     time: "2:00 PM",
//     location: "Green Leaf Center, Chattogram",
//     fee: 10,
//     description:
//       "Discover the benefits of composting and how to start at home.",
//     image: "https://example.com/images/composting.jpg",
//     maxRegistrations: 30,
//     registered: 25,
//     organizer: {
//       image: "https://example.com/images/organizer2.jpg",
//       name: "Farhan Islam",
//       email: "farhan@gardenhub.com",
//     },
//     tags: ["Compost", "Sustainability", "Waste Management"],
//     isFree: false,
//     isFull: false,
//   },
//   {
//     _id: "e003",
//     name: "Indoor Plants Care",
//     type: "Workshop",
//     date: "2025-07-22",
//     time: "4:00 PM",
//     location: "Sylhet Community Hall",
//     fee: 5,
//     description:
//       "Tips and tricks for growing beautiful and healthy indoor plants.",
//     image: "https://example.com/images/indoor-plants.jpg",
//     maxRegistrations: 40,
//     registered: 40,
//     organizer: {
//       image: "https://example.com/images/organizer3.jpg",
//       name: "Jannat Rahman",
//       email: "jannat@gardenhub.com",
//     },
//     tags: ["Indoor", "Air Purifying", "Beginner"],
//     isFree: false,
//     isFull: true,
//   },
//   {
//     _id: "e004",
//     name: "Balcony Garden Design",
//     type: "Seminar",
//     date: "2025-07-30",
//     time: "11:30 AM",
//     location: "Barisal Green House",
//     fee: 0,
//     description: "Transform your small balcony into a vibrant mini-garden.",
//     image: "https://example.com/images/balcony-garden.jpg",
//     maxRegistrations: 35,
//     registered: 20,
//     organizer: {
//       image: "https://example.com/images/organizer4.jpg",
//       name: "Tania Flora",
//       email: "tania@gardenhub.com",
//     },
//     tags: ["Balcony", "Small Space", "Creative Design"],
//     isFree: true,
//     isFull: false,
//   },
//   {
//     _id: "e005",
//     name: "Fruit Tree Grafting Demo",
//     type: "Demonstration",
//     date: "2025-08-05",
//     time: "9:00 AM",
//     location: "Rajshahi Agriculture Institute",
//     fee: 15,
//     description: "Hands-on demo on fruit tree grafting methods and aftercare.",
//     image: "https://example.com/images/grafting.jpg",
//     maxRegistrations: 25,
//     registered: 24,
//     organizer: {
//       image: "https://example.com/images/organizer5.jpg",
//       name: "Rafiq Ul Islam",
//       email: "rafiq@gardenhub.com",
//     },
//     tags: ["Grafting", "Fruit Trees", "Advanced"],
//     isFree: false,
//     isFull: false,
//   },
//   {
//     _id: "e006",
//     name: "Kids’ Gardening Fun Day",
//     type: "Family Event",
//     date: "2025-08-12",
//     time: "10:00 AM",
//     location: "Lalbagh Garden, Dhaka",
//     fee: 0,
//     description:
//       "Fun, interactive gardening games and planting activities for kids.",
//     image: "https://example.com/images/kids-gardening.jpg",
//     maxRegistrations: 60,
//     registered: 60,
//     organizer: {
//       image: "https://example.com/images/organizer6.jpg",
//       name: "Nurun Nahar",
//       email: "nurun@gardenhub.com",
//     },
//     tags: ["Kids", "Family", "Fun"],
//     isFree: true,
//     isFull: true,
//   },
//   {
//     _id: "e007",
//     name: "Terrace Gardening 101",
//     type: "Workshop",
//     date: "2025-08-18",
//     time: "3:00 PM",
//     location: "Khulna Eco Terrace",
//     fee: 8,
//     description: "Basics of terrace garden setup, watering, and maintenance.",
//     image: "https://example.com/images/terrace-garden.jpg",
//     maxRegistrations: 40,
//     registered: 31,
//     organizer: {
//       image: "https://example.com/images/organizer7.jpg",
//       name: "Ahsan Kabir",
//       email: "ahsan@gardenhub.com",
//     },
//     tags: ["Terrace", "Urban", "Rooftop"],
//     isFree: false,
//     isFull: false,
//   },
//   {
//     _id: "e008",
//     name: "Herbal Medicine Garden Walk",
//     type: "Tour",
//     date: "2025-08-25",
//     time: "5:00 PM",
//     location: "Shibpur Medicinal Garden",
//     fee: 10,
//     description:
//       "Guided tour showcasing native herbs and their health benefits.",
//     image: "https://example.com/images/herbal-walk.jpg",
//     maxRegistrations: 30,
//     registered: 18,
//     organizer: {
//       image: "https://example.com/images/organizer8.jpg",
//       name: "Dr. Momena Zahan",
//       email: "momena@gardenhub.com",
//     },
//     tags: ["Herbs", "Medicinal", "Tour"],
//     isFree: false,
//     isFull: false,
//   },
//   {
//     _id: "e009",
//     name: "Rainwater Harvesting in Gardens",
//     type: "Seminar",
//     date: "2025-09-01",
//     time: "1:00 PM",
//     location: "Mymensingh Agriculture Hall",
//     fee: 0,
//     description:
//       "Efficient techniques for rainwater collection in home gardens.",
//     image: "https://example.com/images/rainwater.jpg",
//     maxRegistrations: 45,
//     registered: 45,
//     organizer: {
//       image: "https://example.com/images/organizer9.jpg",
//       name: "Nusrat Jahan",
//       email: "nusrat@gardenhub.com",
//     },
//     tags: ["Water Saving", "Eco-Friendly", "DIY"],
//     isFree: true,
//     isFull: true,
//   },
//   {
//     _id: "e010",
//     name: "Flower Arrangement Contest",
//     type: "Competition",
//     date: "2025-09-07",
//     time: "6:00 PM",
//     location: "National Garden Expo, Dhaka",
//     fee: 25,
//     description:
//       "Compete in the most colorful and creative flower arrangement challenge!",
//     image: "https://example.com/images/flower-contest.jpg",
//     maxRegistrations: 50,
//     registered: 44,
//     organizer: {
//       image: "https://example.com/images/organizer10.jpg",
//       name: "Rehana Flora",
//       email: "rehana@gardenhub.com",
//     },
//     tags: ["Flowers", "Competition", "Creativity"],
//     isFree: false,
//     isFull: false,
//   },
// ];

const Events = () => {
  const { isDark } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [gardeningEvents,setGardeningEvents]=useState([])
  // const categories = ["All", ...new Set(gardeningEvents.map((ev) => ev.type))];

  // const filteredEvents = gardeningEvents.filter((event) => {
  //   const matchName = event.name.toLowerCase().includes(search.toLowerCase());
  //   const matchType = filter === "All" || event.type === filter;
  //   return matchName && matchType;
  // });
  
  useEffect(()=>{
    const getEvents = async()=>{
      try {
        const data = await apiRequiest('get','/browse/events')
        setGardeningEvents(data?.data)
      } catch (error) {
        toast.error(error?.response?.data?.message)
      }
    }
    getEvents()
  },[])
  return (
    <div
      className={`page-section min-h-screen 
    ${isDark ? "bg-black" : "bg-gray-100"} py-12 px-5 `}
    >
      {/* Page Header */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h1
          className={`text-[26px] md:text-[30px] ${
            isDark ? "text-gray-400" : "text-[#111827]"
          } mb-2 
      font-[700] nunito-family`}
        >
          Explore Upcoming Gardening Events
        </h1>
        <p
          className={`md:text-[18px] font-[400] ${
            isDark ? "text-gray-500" : "text-[#4b5563]"
          }  roboto-family`}
        >
          Join workshops, seminars, and community events to grow your gardening
          knowledge.
        </p>
      </div>

      {/* Filters */}
      {/* <div
        className={`mb-8 flex flex-col ${
          isDark ? "bg-black border-gray-700" : "bg-white border-gray-200"
        } p-4 rounded-lg shadow-xs border `}
      >
          <h3
            className={`text-lg font-medium ${
              isDark ? "text-gray-400" : "text-gray-900"
            } mb-2 nunito-family`}
          >
            Search by event name
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
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>
      
      </div> */}

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 
      lg:grid-cols-3 gap-6  mx-auto">
        {gardeningEvents.map((event) => (
          <div
            key={event._id}
            className={`shadow rounded-lg ${isDark ? "border border-gray-900" : 'bg-white'}
            overflow-hidden flex flex-col transition hover:shadow-sm`}
          >
            <img
              src={event.image}
              alt={event.name}
              className="h-48 w-full object-cover bg-gray-400"
            />

            <div className="p-4 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm bg-[#2BC854] text-white px-2 py-1 rounded-full">
                  {event.type}
                </span>
                <span className="text-sm text-gray-500 ">
                  {event.date} • {event.time}
                </span>
              </div>

              <h2 className="text-xl font-semibold text-[#0A6B01] dark:text-[#2BC854] mb-1">
                {event.name}
              </h2>
              <p className="text-sm text-gray-600  mb-3 line-clamp-3">
                {event.description}
              </p>
              <div className="mt-auto flex items-center justify-between pt-2">
                <span className={`text-[16px] font-semibold  
                    ${event.isFree ? "text-gray-600" : "text-[#0A6B01]"}`}>
                  {event.isFree ? "Free" : `Fee: $${event.fee}`}
                </span>
              <Link to={`/event-details/${event?._id}`}>  <button
                  disabled={event.isFull}
                  className={`px-3 py-1 cursor-pointer rounded text-white text-[16px] transition 
                    ${
                      event.isFull
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#0A6B01] hover:bg-[#2BC854]"
                    }`}
                >
                  {event.isFull ? "Full" : "Register"}
                </button>
              </Link>
              </div>
            </div>
          </div>
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
    </div>
  );
};

export default Events;
