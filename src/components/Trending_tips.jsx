import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../config/AuthProvider";
import { useEffect } from "react";
import { apiRequiest } from "../utils/ApiCall";
import { useState } from "react";
import { toast } from "react-toastify";
import { minimizeData } from "../utils/minimizeData";

const Trending_tips = () => {
  const { isDark } = useContext(AuthContext);
  const [trendingTips, setTrendingTips] = useState([]);
  const [message, setMessage] = useState("Trending tips not found!");

  const getTrendingTips = async () => {
    try {
      const data = await apiRequiest("get", "/trending-tips");
      setTrendingTips(data?.tips);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setMessage("Trending tips not found!");
    }
  };

  useEffect(() => {
    getTrendingTips();
  }, []);

  return (
    <div className={`${isDark ? "bg-black" : "bg-[#e4feec83]"} py-12 px-5`}>
      <div className="container mx-auto text-center">
        <h2
          className={`text-[26px] md:text-[30px] ${
            isDark ? "text-gray-300" : "text-[#111827]"
          }   mb-2 font-[700] 
        nunito-family`}
        >
          Top Trending Tips
        </h2>
        <p
          className={`md:text-[18px] font-[400] ${
            isDark ? "text-gray-500" : "text-[#4b5563]"
          }  mb-8 roboto-family`}
        >
          Discover our community's most popular gardening advice and techniques
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  md:px-0">
          {trendingTips.map((tip, index) => (
            <TipCard key={index} tip={tip} />
          ))}
        </div>

        <Link to="/browse-tips">
          {" "}
          <button className="inline-flex items-center px-6 py-3 bg-green-600 mt-10 text-white rounded-lg text-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors cursor-pointer duration-300 nunito-family">
            Browse All Tips
            <svg
              className="ml-2 w-5 h-5"
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
        </Link>
      </div>
    </div>
  );
};

const TipCard = ({ tip }) => {
  const { isDark } = useContext(AuthContext);
  return (
    <div
      className={` border ${
        isDark ? "" : "bg-white border-[#e5e7eb]"
      }   rounded-lg 
                 overflow-hidden flex flex-col`}
    >
      <div
        className={`bg-gray-200 h-40 flex items-center justify-center
                text-xl font-semibold  `}
      >
        <img
          src={tip.image}
          alt="tip-image"
          className="h-[100%] w-[100%] object-cover"
        />
      </div>
      <div className="px-2 pt-3">
        <div className="flex justify-between items-center mb-3">
          <h3
            className={`text-xl font-[600] text-left
                     ${isDark ? "text-gray-400" : "text-gray-800"}
                     nunito-family`}
          >
            {tip.plantType.length > 12
              ? tip.plantType.slice(0, 15) + "..."
              : tip.plantType}
          </h3>
          <p
            className=" bg-green-100 text-green-700 rounded-full 
                    px-2 py-1 text-xs  font-medium roboto-family"
          >
            {tip.difficulty}
          </p>
        </div>
        <p
          className="text-gray-700 text-sm mb-4 text-left font-[400]
                     roboto-family lg:h-[50px] "
        >
          {minimizeData(tip.description, 100)}
        </p>
        <div
          className={`py-3 flex items-center justify-between ${
            isDark ? "" : "border-gray-200"
          }
                 border-t `}
        >
          <div className="flex  gap-1 text-gray-600   text-[16px] text-left font-[400] roboto-family">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              ></path>
            </svg>
            {tip.likes} likes
          </div>
          <div>
            {" "}
            <Link
              to={`tip-details/${tip._id}`}
              className="text-green-600 hover:text-green-700 text-[16px] font-medium  flex items-center"
            >
              Read More
              <svg
                className="w-4 h-4 ml-1 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending_tips;
