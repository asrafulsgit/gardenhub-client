import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../config/AuthProvider";
import { apiRequiest } from "../utils/ApiCall";
import { toast } from "react-toastify";
import { Link } from "react-router";
import Loader from "../utils/Loader";
import { Helmet } from "react-helmet";



const Events = () => {
  const { isDark } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [gardeningEvents,setGardeningEvents]=useState([])
  const [loading,setLoading]=useState(true)
  
  useEffect(()=>{
    const getEvents = async()=>{
      try {
        const data = await apiRequiest('get','/browse/events')
        setGardeningEvents(data?.data)
      } catch (error) {
        toast.error(error?.response?.data?.message)
      }finally{
        setLoading(false)
      }
    }
    getEvents()
  },[])

  if(loading){
    return<><Loader /> </>
  }
  return (
  <>  
  <Helmet>
      <title>Gargen Hub | Events </title>
    </Helmet>
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
        {gardeningEvents?.map((event) => (
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
    </div></>
  );
};

export default Events;
