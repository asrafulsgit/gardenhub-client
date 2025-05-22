import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../config/AuthProvider";
import { apiRequiest } from "../utils/ApiCall";
import { toast } from "react-toastify";
import {Link} from 'react-router-dom'

const My_tips = () => {
  const tableHeader = [
    "Image",
    "Title",
    "Category",
    "Difficulty",
    "Status",
    "Likes",
    "Actions",
  ];

  const [myTips, setMyTips] = useState([]);
  const [message, setMessage] = useState("");

  const { isDark, userInfo } = useContext(AuthContext);
  const getMyTips = async () => {
    if (!userInfo.email) {
      toast.error("Email is Required! please Reload your page or login again!");
      setMessage("You have no tips!");
      setMyTips([]);
      return;
    }
    try {
      const data = await apiRequiest(
        "get",
        `/api/v1/my-tips?email=${userInfo?.email}`
      );
      setMyTips(data?.tips);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setMessage("You have no tips!");
    }
  };

  useEffect(() => {
    getMyTips();
  }, []);

  
  return (
    <section
      id="myTips"
      className={`page-section min-h-screen 
    ${isDark ? "bg-black" : "bg-gray-100"} py-12 px-5 `}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className={`text-[30px] ${
              isDark ? "text-gray-400" : "text-[#111827]"
            } mb-2 
      font-[700] nunito-family`}
          >
            My Tips
          </h2>
          <p
            className={`text-[18px] font-[400] 
            ${isDark ? "text-gray-500" : "text-[#4b5563]"}  roboto-family`}
          >
            Manage your gardening tips and contributions
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="mb-4 sm:mb-0">
            <Link to='/share-garden-tip' >
            <button
              className="inline-flex nunito-family font-medium items-center px-4 py-2 border 
              border-transparent rounded-md shadow-sm text-sm text-gray-300 cursor-pointer bg-green-600
               hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-green-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Add New Tip
            </button></Link>
          </div>
          <div className="flex items-center">
            <label
              htmlFor="filter-status"
              className={`mr-2 text-sm ${
                isDark ? "text-gray-500" : "text-gray-600"
              }`}
            >
              Filter by:
            </label>
            <select
              id="filter-status"
              className={`border nunito-family ${
                isDark ? "border-gray-700 text-gray-500" : "border-gray-300 "
              }  rounded-sm py-1 px-2 focus:ring-2
           focus:ring-green-500 focus:border-green-500 text-sm`}
            >
              <option value="all">All Tips</option>
              <option value="public">Public Only</option>
              <option value="hidden">Hidden Only</option>
            </select>
          </div>
        </div>

        {/* Tips Table */}
        <div
          className={` shadow-xs overflow-hidden border
          ${isDark ? "bg-black" : "bg-white border-gray-200"} sm:rounded-lg`}
        >
          <div className="overflow-x-auto">
            <table
              className={`min-w-full divide-y ${
                isDark ? "divide-gray-900" : "divide-gray-200"
              } `}
            >
              <thead className={isDark ? "bg-black" : "bg-gray-50"}>
                <tr>
                  {tableHeader.map((header) => (
                    <th
                      key={header}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody
                className={`${
                  isDark
                    ? "bg-black divide-gray-900"
                    : "bg-white divide-gray-200"
                } divide-y nunito-family`}
              >
                {myTips.map((tip, index) => (
                  <tr key={index} className="tip-row">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="h-16 w-16  rounded-md overflow-hidden">
                        <img
                          src={tip.image || ""}
                          alt={tip.title}
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
                        {tip.title}
                      </div>
                      <div className="text-sm text-gray-500 roboto-family">
                        Added on {tip?.createdAt?.split("T")[0]}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {tip.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {tip.difficulty}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          tip.status === "Public"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {tip.availability}
                      </span>
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-sm 
                      ${isDark ? "text-gray-400" : "text-gray-500"}`}
                    >
                      {tip.likes}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                       <Link to={`/tip-details/${tip._id}`} > 
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
                        <Link to={`/update-tips/${tip._id}`}>
                        <button className="text-indigo-600 cursor-pointer
                         hover:text-indigo-900">
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
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </button>
                        </Link>
                        <div>
                          <button
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default My_tips;
