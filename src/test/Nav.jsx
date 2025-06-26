// src/components/Navbar.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react"; // Optional icons
 

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Browse Tips", path: "/browse-tips" },
    { name: "Events", path: "/events" },
    { name: "Gardeners", path: "/gardeners" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="px-4  bg-[#0A6B01] text-white shadow-md nunito-family">
      {/* desktop Menu */}
      <div className="max-w-7xl mx-auto  
       py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className=" flex items-center gap-2">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 xl:h-8 xl:w-8 text-green-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        ></path>
      </svg> <h1 className="text-2xl font-bold text-white">Garden<span className="text-[#2BC854]">Hub</span></h1>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-[#2BC854] transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
            <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-white cursor-pointer hover:text-[#2BC854] transition"
            title="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={30} /> : <Moon size={30} />}
          </button>
          <Link
            to="/login-signin"
            className="px-4 py-2 rounded-full border border-[#2BC854] text-[#2BC854] hover:bg-[#2BC854] hover:text-white transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[#0A6B01] px-4 pb-4 space-y-3">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block text-white hover:text-[#2BC854] transition"
            >
              {link.name}
            </Link>
          ))}
          {<Link to="/login-signin" className="block text-[#2BC854] mt-2">
            Login
          </Link>}
           {/* Mobile Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-4 flex items-center gap-2 text-white hover:text-[#2BC854] transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </nav>
      )}
      
    </header>
  );
};

export default Nav;
