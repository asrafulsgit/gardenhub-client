import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import { toast } from "react-toastify";

import { AuthContext } from "../config/AuthProvider";
import { apiRequiestWithCredentials } from "../utils/ApiCall";
import Loader from "../utils/Loader";

export const dummyComments = [
  {
    userName: "Raisa Khatun",
    userPhoto: "https://randomuser.me/api/portraits/women/21.jpg",
    text: "Thanks! I followed this tip and my tomatoes are finally thriving 🌿🍅",
    date: "2025-06-20T10:30:00Z",
  },
  {
    userName: "Mizanur Rahman",
    userPhoto: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Great insight! I didn’t know mulching helped so much with moisture retention.",
    date: "2025-06-21T08:15:00Z",
  },
  {
    userName: "Afroza Jahan",
    userPhoto: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Could you also share some tips on organic pest control?",
    date: "2025-06-22T14:45:00Z",
  },
  {
    userName: "Tanvir Hossain",
    userPhoto: "https://randomuser.me/api/portraits/men/18.jpg",
    text: "This helped me prep my raised garden bed properly. Keep it up!",
    date: "2025-06-23T16:20:00Z",
  },
  {
    userName: "Faria Alam",
    userPhoto: "https://randomuser.me/api/portraits/women/34.jpg",
    text: "Loved the simplicity of this tip. Very beginner-friendly 🌱",
    date: "2025-06-24T09:10:00Z",
  },
  {
    userName: "Raisa Khatun",
    userPhoto: "https://randomuser.me/api/portraits/women/21.jpg",
    text: "Thanks! I followed this tip and my tomatoes are finally thriving 🌿🍅",
    date: "2025-06-20T10:30:00Z",
  },
  {
    userName: "Mizanur Rahman",
    userPhoto: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Great insight! I didn’t know mulching helped so much with moisture retention.",
    date: "2025-06-21T08:15:00Z",
  },
  {
    userName: "Afroza Jahan",
    userPhoto: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Could you also share some tips on organic pest control?",
    date: "2025-06-22T14:45:00Z",
  },
  {
    userName: "Tanvir Hossain",
    userPhoto: "https://randomuser.me/api/portraits/men/18.jpg",
    text: "This helped me prep my raised garden bed properly. Keep it up!",
    date: "2025-06-23T16:20:00Z",
  },
  {
    userName: "Faria Alam",
    userPhoto: "https://randomuser.me/api/portraits/women/34.jpg",
    text: "Loved the simplicity of this tip. Very beginner-friendly 🌱",
    date: "2025-06-24T09:10:00Z",
  },
  {
    userName: "Raisa Khatun",
    userPhoto: "https://randomuser.me/api/portraits/women/21.jpg",
    text: "Thanks! I followed this tip and my tomatoes are finally thriving 🌿🍅",
    date: "2025-06-20T10:30:00Z",
  },
  {
    userName: "Mizanur Rahman",
    userPhoto: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Great insight! I didn’t know mulching helped so much with moisture retention.",
    date: "2025-06-21T08:15:00Z",
  },
  {
    userName: "Afroza Jahan",
    userPhoto: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Could you also share some tips on organic pest control?",
    date: "2025-06-22T14:45:00Z",
  },
  {
    userName: "Tanvir Hossain",
    userPhoto: "https://randomuser.me/api/portraits/men/18.jpg",
    text: "This helped me prep my raised garden bed properly. Keep it up!",
    date: "2025-06-23T16:20:00Z",
  },
  {
    userName: "Faria Alam",
    userPhoto: "https://randomuser.me/api/portraits/women/34.jpg",
    text: "Loved the simplicity of this tip. Very beginner-friendly 🌱",
    date: "2025-06-24T09:10:00Z",
  },
];

const Tips_details = () => {
  const { id } = useParams();
  const [tip, setTip] = useState({});
  const [message, setMessage] = useState("tip not found");
  const [loading, setLoading] = useState(true);

  const { isDark } = useContext(AuthContext);

  const getTipDetials = async () => {
    if (!id) {
      setTip([]);
      toast.error("id is Required! please Reload your page or login again!");
      setMessage("tip not found!");
      return;
    }

    try {
      const data = await apiRequiestWithCredentials("get", `/tip-details/${id}`);
      setTip(data?.tip);
      setLoading(false);
    } catch (error) {
      setTip([]);
 
      toast.error(error.message);
      setMessage("You have no tips!");
      setLoading(false);
    }
  };

  useEffect(() => {
    getTipDetials();
  }, []);

  const handleLikeTip = async () => {
    try {
      await apiRequiestWithCredentials("put", `/like-tip/${id}`);

      setTip((prev) => ({
        ...prev,
        likes: prev.likes + 1,
      }));
    } catch (error) {

      toast.error(error.message);
    }
  };

  const handleSaveTip = async (id) => {
      try {
        await apiRequiestWithCredentials("post", `/tip/saved/${id}`);
        toast.success("Tip saved successfull.");
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    };

  //comment and save tip handling
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(dummyComments);
  

  const handleSubmitComment = (e) => {
    e.preventDefault();
    const newComment = {
      userName: "Anonymous", // Replace with actual user
      userPhoto: "",
      text: comment,
      date: new Date(),
    };
    setComments([newComment, ...comments]);
    setComment("");
  };

  const formatDate = (date) => new Date(date).toLocaleDateString();

  if (loading) {
    return (
      <>
        <Loader />{" "}
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Tip Details</title>
      </Helmet>
<section
  id="tipDetails"
  className={`page-section min-h-screen ${
    isDark ? "bg-black" : "bg-gray-100"
  } py-12 px-5`}
>
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
    {/* Tip Content */}
    <div
      className={`${isDark ? "bg-black" : "bg-white border-gray-200"} 
        rounded-lg shadow-sm overflow-hidden  w-full lg:w-[65%]`}
    >
      <div
            className={`${isDark ? "bg-black" : "bg-white border-gray-200"} 
        rounded-lg shadow-sm overflow-hidden sticky top-0 border`}
          >
            <div className="relative">
              <img
                src={tip.image || " "}
                alt={tip.title}
                className="w-full h-64 sm:h-80 object-cover bg-gray-300"
              />
              {/* difficulty level */}
              <div className="absolute top-0 left-0 p-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {tip.difficulty}
                </span>
              </div>
              <div className="absolute top-0 right-0 p-4 flex justify-end">
                <button
                  onClick={()=>handleSaveTip(id)}
                  className="inline-flex cursor-pointer items-center 
                  px-4 py-2  rounded-md
                bg-green-600 hover:bg-green-700 text-white transition text-sm font-medium"
                >
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5v14l7-5 7 5V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
                  </svg>
                  Save Tip
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <h1
                  className={`text-[26px] md:text-3xl font-bold mb-2 sm:mb-0 ${
                    isDark ? "text-gray-400" : "text-gray-900"
                  } nunito-family`}
                >
                  {tip.title}
                </h1>
                <div id="likeButtonContainer" className="flex items-center">
                  <button
                    onClick={handleLikeTip}
                    className="inline-flex cursor-pointer items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700"
                  >
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                    Like ({tip.likes})
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500 nunito-family">
                <div className="flex items-center">
                  <span>
                    Category:{" "}
                    <span className="text-green-600 font-medium">
                      {tip.category}
                    </span>
                  </span>
                </div>
                <div className="flex items-center">
                  <span>Posted: {tip?.createdAt?.split("T")[0]}</span>
                </div>
                <div className="flex items-center">
                  <span>
                    By:{" "}
                    <span className="text-green-600 font-medium">
                      {tip?.user?.name}
                    </span>
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h2
                  className={`text-lg font-medium ${
                    isDark ? "text-gray-400" : "text-gray-900"
                  } mb-2`}
                >
                  Plant Type/Topic
                </h2>
                <p
                  className={`text-[16px] ${
                    isDark ? "text-gray-500" : "text-gray-700"
                  }`}
                >
                  {tip.plantType}
                </p>
              </div>

              <div className="mb-8">
                <h2
                  className={`text-lg font-medium ${
                    isDark ? "text-gray-400" : "text-gray-900"
                  } mb-2`}
                >
                  Description
                </h2>
                <p
                  className={`text-[16px] ${
                    isDark ? "text-gray-500" : "text-gray-700"
                  }`}
                >
                  {tip.description}
                </p>
              </div>

              <div
                className={`border-t ${
                  isDark ? "" : "border-gray-200"
                } pt-6 mt-8`}
              >
                <div className="flex items-center">
                  <img
                    src={tip.user?.photo || " "}
                    alt="Author"
                    className="h-12 w-12 rounded-full mr-4 bg-gray-300"
                  />
                  <div>
                    <h3
                      className={`text-lg font-medium ${
                        isDark ? "text-gray-400" : "text-gray-900"
                      }`}
                    >
                      About the Author
                    </h3>
                    <p
                      className={`${
                        isDark ? "text-gray-500" : "text-gray-700"
                      }`}
                    >
                      Email: {tip.user?.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>

    {/* Comment Sidebar */}
    <div
      className={`${
        isDark ? " border-gray-900" : "bg-white"
      } rounded-lg shadow w-full lg:w-[35%]`}
    >
        <div
            className={` ${isDark ? "border border-gray-900" : "bg-white"} 
              rounded-lg p-6 shadow `}
          >
            <h3
              className={`text-xl font-semibold mb-4 
                  ${isDark ? "text-gray-300" : "text-gray-800"}`}
            >
              Comments
            </h3>

            <form onSubmit={handleSubmitComment} className="mb-6">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your thoughts..."
                className={`w-full p-3 rounded-lg border ${
                  isDark ? "" : "border-gray-300"
                }
                    outline-none focus:outline-green-500 `}
                rows={3}
                required
              />
              <button
                type="submit"
                className="mt-2 cursor-pointer px-4 py-2 bg-green-600 text-white 
                    rounded-md hover:bg-green-700 text-sm transition"
              >
                Post Comment
              </button>
            </form>

            <div className="space-y-4 max-h-[450px] overflow-auto">
              {comments.map((c, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <img
                    src={c.userPhoto || "/default-avatar.png"}
                    alt="User"
                    className="h-9 w-9 rounded-full object-cover bg-gray-300"
                  />
                  <div>
                    <p className="text-sm font-semibold text-green-700">
                      {c.userName}
                    </p>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-900"
                      }`}
                    >
                      {c.text}
                    </p>
                    <span
                      className={`text-xs ${
                        isDark ? "text-gray-500" : "text-gray-700"
                      }`}
                    >
                      {formatDate(c.date)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
    </div>
  </div>
</section>


      {/* <section
        id="tipDetails"
        className={`page-section min-h-screen ${
          isDark ? "bg-black" : "bg-gray-100"
        } py-12 px-5`}
      >
        <div className="flex gap-2">
          
          <div
            className={`${isDark ? "bg-black" : "bg-white border-gray-200"} 
        rounded-lg shadow-sm overflow-hidden sticky top-0 border`}
          >
            <div className="relative">
              <img
                src={tip.image || " "}
                alt={tip.title}
                className="w-full h-64 sm:h-80 object-cover bg-gray-300"
              />
              <div className="absolute top-0 right-0 p-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {tip.difficulty}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <h1
                  className={`text-[26px] md:text-3xl font-bold mb-2 sm:mb-0 ${
                    isDark ? "text-gray-400" : "text-gray-900"
                  } nunito-family`}
                >
                  {tip.title}
                </h1>
                <div id="likeButtonContainer" className="flex items-center">
                  <button
                    onClick={handleLikeTip}
                    className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700"
                  >
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                    Like ({tip.likes})
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500 nunito-family">
                <div className="flex items-center">
                  <span>
                    Category:{" "}
                    <span className="text-green-600 font-medium">
                      {tip.category}
                    </span>
                  </span>
                </div>
                <div className="flex items-center">
                  <span>Posted: {tip?.createdAt?.split("T")[0]}</span>
                </div>
                <div className="flex items-center">
                  <span>
                    By:{" "}
                    <span className="text-green-600 font-medium">
                      {tip?.user?.name}
                    </span>
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h2
                  className={`text-lg font-medium ${
                    isDark ? "text-gray-400" : "text-gray-900"
                  } mb-2`}
                >
                  Plant Type/Topic
                </h2>
                <p
                  className={`text-[16px] ${
                    isDark ? "text-gray-500" : "text-gray-700"
                  }`}
                >
                  {tip.plantType}
                </p>
              </div>

              <div className="mb-8">
                <h2
                  className={`text-lg font-medium ${
                    isDark ? "text-gray-400" : "text-gray-900"
                  } mb-2`}
                >
                  Description
                </h2>
                <p
                  className={`text-[16px] ${
                    isDark ? "text-gray-500" : "text-gray-700"
                  }`}
                >
                  {tip.description}
                </p>
              </div>

              <div
                className={`border-t ${
                  isDark ? "" : "border-gray-200"
                } pt-6 mt-8`}
              >
                <div className="flex items-center">
                  <img
                    src={tip.user?.photo || " "}
                    alt="Author"
                    className="h-12 w-12 rounded-full mr-4 bg-gray-300"
                  />
                  <div>
                    <h3
                      className={`text-lg font-medium ${
                        isDark ? "text-gray-400" : "text-gray-900"
                      }`}
                    >
                      About the Author
                    </h3>
                    <p
                      className={`${
                        isDark ? "text-gray-500" : "text-gray-700"
                      }`}
                    >
                      Email: {tip.user?.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

     

          <div
            className={` ${isDark ? "border border-gray-900" : "bg-white"} 
              rounded-lg p-6 shadow `}
          >
            <h3
              className={`text-xl font-semibold mb-4 
                  ${isDark ? "text-gray-300" : "text-gray-800"}`}
            >
              Comments
            </h3>

            <form onSubmit={handleSubmitComment} className="mb-6">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your thoughts..."
                className={`w-full p-3 rounded-lg border ${
                  isDark ? "" : "border-gray-300"
                }
                    outline-none focus:outline-green-500 `}
                rows={3}
                required
              />
              <button
                type="submit"
                className="mt-2 px-4 py-2 bg-green-600 text-white 
                    rounded-md hover:bg-green-700 text-sm transition"
              >
                Post Comment
              </button>
            </form>

            <div className="space-y-4 max-h-[500px] overflow-auto">
              {comments.map((c, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <img
                    src={c.userPhoto || "/default-avatar.png"}
                    alt="User"
                    className="h-9 w-9 rounded-full object-cover bg-gray-300"
                  />
                  <div>
                    <p className="text-sm font-semibold text-green-700">
                      {c.userName}
                    </p>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-900"
                      }`}
                    >
                      {c.text}
                    </p>
                    <span
                      className={`text-xs ${
                        isDark ? "text-gray-500" : "text-gray-700"
                      }`}
                    >
                      {formatDate(c.date)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Tips_details;



