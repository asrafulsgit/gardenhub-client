import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { apiRequiestWithCredentials } from "../utils/ApiCall";
import Loader from "../utils/Loader";
import { useContext } from "react";
import { AuthContext } from "../config/AuthProvider";

const Saved_tips = () => {
  const [events, setEvents] = useState([]);
   const { isDark, userInfo } = useContext(AuthContext);

  const [pageLoading, setPageLoading] = useState(true);
  const getBookEvents = async () => {
    try {
      const data = await apiRequiestWithCredentials("get", `/tip/saved`);
      setEvents(data?.tips);
      setPageLoading(false);
    } catch (error) {
      setEvents([]);
      toast.error(error?.response?.data?.message);
      setPageLoading(false);
    }
  };
  useEffect(() => {
    getBookEvents();
  }, []);
  const handleDeleteEvent = async (id) => {
    try {
      await apiRequiestWithCredentials("delete", `/tip/saved/${id}`);
      const fileterEvents = events.filter((events) => events.tip._id !== id);
      setEvents(fileterEvents);
      toast.success("Saved Tip deleted.");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  if (pageLoading) {
    return <><Loader /> </>
  }
  return (
    <>
      <Helmet>
        <title>Gargen Hub | Saved Tips</title>
      </Helmet>{" "}
      <section className={`min-h-[70vh] px-5 ${isDark ? 'bg-black' : 'bg-gray-50'}  py-8 block`}>
        <div className="max-w-7xl mx-auto ">
          {/* Header Section */}
          <div className="flex flex-col  md:items-start md:justify-start mb-8">
            <h1
              className={`text-[26px] md:text-[30px] ${
              isDark ? "text-gray-400" : "text-[#111827]"
            } md:mb-2 mb-1 
      font-[700] nunito-family`}
            >
              Saved Tips
            </h1>
            <p className={`md:text-[18px] font-[400] 
            ${isDark ? "text-gray-500" : "text-[#4b5563]"}  roboto-family`}>
              Saved Your Tips – Be Game Ready.
            </p>
          </div>

          {/* Events Table */}
          {events?.length === 0 ? (
            <div className="flex justify-center items-center py-10">
              <p className="text-red-500 ">You have no book event!</p>
            </div>
          ) : ( 
            <div className="bg-white rounded-lg border border-gray-500 overflow-hidden">
              <div className="overflow-x-auto">
                <table
                  className={`min-w-full divide-y ${
                    isDark ? "divide-gray-900" : "divide-gray-200"
                  } `}
                >
                  <thead className={isDark ? "bg-black" : "bg-gray-50"}>
                    <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Availability
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Liks
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                </tr>
                  </thead>
                  <tbody
                    className={`${
                      isDark
                        ? "bg-black divide-gray-900"
                        : "bg-white divide-gray-200"
                    } divide-y nunito-family`}
                  >
                    {events?.map((event, index) => {

                      const {_id,image,title,category,availability, difficulty,likes,createdAt}=event?.tip;
                      return( 
                        <tr key={index} className="tip-row">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="h-16 w-16  rounded-md overflow-hidden">
                            <img
                              src={image || ""}
                              alt={title}
                              className="h-full w-full object-cover bg-gray-300"
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div
                            className={`text-sm font-medium ${
                              isDark ? " text-gray-400" : " text-gray-900"
                            }`}
                          >
                            {title}
                          </div>
                          <div className="text-sm text-gray-500 roboto-family">
                            Added on {createdAt?.split("T")[0]}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {difficulty}
                          </span>
                        </td>
                        
                        <td
                          className={`px-6 py-4 whitespace-nowrap text-sm 
                                  ${
                                    isDark ? "text-gray-400" : "text-gray-500"
                                  }`}
                        >
                          {likes}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <Link to={`/tip-details/${_id}`}>
                              <button
                                className="text-green-600 cursor-pointer
                                      hover:text-green-900"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 "
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                  />
                                </svg>
                              </button>
                            </Link>
                            <div>
                              <button
                                onClick={()=>handleDeleteEvent(_id)}
                                type="button"
                                className="text-red-600 hover:text-red-900 cursor-pointer"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Saved_tips;
