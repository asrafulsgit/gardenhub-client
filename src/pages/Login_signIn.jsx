import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet";

import Login from "../components/Login";
import Register from "../components/Register";
import { AuthContext } from "../config/AuthProvider";

const Login_signIn = () => {
  const { isDark } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (tab) => setActiveTab(tab);
  const userRegister = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Helmet>
        <title>Login | SignIn</title>
      </Helmet>
      <section
        id="auth"
        className={`page-section pb-20 
    min-h-screen ${isDark ? "bg-black" : "bg-gray-100"} py-12 px-5 `}
      >
        <div
          className={`max-w-md mx-auto ${
            isDark ? "bg-black border" : "bg-white"
          } rounded-lg shadow-md overflow-hidden`}
        >
          {/* Tabs */}
          <div
            className={`flex border-b  ${
              isDark ? "border-gray-500" : "border-gray-200"
            }`}
          >
            <button
              onClick={() => handleTabChange("login")}
              className={`w-1/2 py-4 px-6 ${
                isDark ? "bg-black" : "bg-gray-50"
              } text-center cursor-pointer font-medium ${
                activeTab === "login"
                  ? "text-green-600  border-b-2 border-green-600"
                  : "text-gray-500 "
              }`}
            >
              Login
            </button>
            <button
              onClick={() => handleTabChange("register")}
              className={`w-1/2 py-4 px-6 cursor-pointer  ${
                isDark ? "bg-black" : "bg-gray-50"
              } text-center font-medium ${
                activeTab === "register"
                  ? "text-green-600  border-b-2 border-green-600"
                  : "text-gray-500 "
              }`}
            >
              Register
            </button>
          </div>

          {/* Login Form */}
          {activeTab === "login" && <Login />}

          {/* Register Form */}
          {activeTab === "register" && <Register userRegister={userRegister} />}
        </div>
      </section>
    </>
  );
};

export default Login_signIn;
