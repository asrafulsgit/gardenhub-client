import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import Toastify from "./config/Toastify";
import Lottie from "lottie-react";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";

import loadingAnimation from "../public/loader.json";
import ScrollVehaviour from "./utils/ScrollVehaviour";
import { AuthContext } from "./config/AuthProvider";

const App = () => {
  const { loading, isDark, isMobileNav } = useContext(AuthContext);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading || showLoader) {
    return (
      <div
        className={`w-full h-screen flex justify-center items-center
      ${isDark ? "bg-black" : ""}`}
      >
        <div className="w-60 h-60">
          <Lottie animationData={loadingAnimation} loop={true} />
        </div>
      </div>
    );
  }

  return (
    <>
      <Toastify />
      <ScrollVehaviour />
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
