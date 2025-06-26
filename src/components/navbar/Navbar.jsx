import React from "react";
import { AuthContext } from "../../config/AuthProvider";
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { useState } from "react";
import { toast } from "react-toastify";
import { Menu, X, Moon, Sun } from "lucide-react";
import "./navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const { userInfo, isDark, setIsDark, isLoggedIn, setIsLoggedIn, logout } =
    useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully!");
      navigate("/login-signin");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoggedIn(false);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Browse Tips", path: "/browse-tips" },
    { name: "Events", path: "/events" },
    { name: "Gardeners", path: "/gardeners" },
    { name: "About", path: "/about" },
  ];

  const handleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem("isDark", JSON.stringify(!isDark));
  };

  return (
    <header className=" z-50 px-4  bg-[#0A6B01] text-white shadow-md nunito-family">
      {/* desktop Menu */}
      <div
        className="max-w-7xl mx-auto  
       py-4 flex items-center justify-between"
      >
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white cursor-pointer"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
          </svg>{" "}
          <h1 className="text-2xl font-bold text-white">
            Garden<span className="text-[#2BC854]">Hub</span>
          </h1>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="hover:text-[#2BC854] transition"
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Auth Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={handleTheme}
              className="text-white cursor-pointer hover:text-[#2BC854] transition"
              title="Toggle Dark Mode"
            >
              {isDark ? <Sun size={30} /> : <Moon size={30} />}
            </button>
            {isLoggedIn ? (
              <>
                
                  <button
                    onClick={handleLogout}
                    className="hidden lg:block px-4 py-2 rounded-full cursor-pointer border border-[#2BC854] 
            text-[#2BC854] hover:bg-[#2BC854] hover:text-white transition"
                  >
                    Logout
                  </button>
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS Navbar component"
                          src={
                            userInfo.photoURL ||
                            "https://i.ibb.co/PsHDfWt8/user-icon-illustration-for-graphic-design-logo-web-site-social-media-mobile-app-ui-png.png"
                          }
                        />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-md 
            z-1 mt-4 w-40 p-2 shadow nav-item-active space-y-1"
                    >
                      <NavLink to="/profile" className="rounded-sm">
                        <li className="text-black px-2 rounded-sm text-sm">Profile</li>
                      </NavLink>
                      <NavLink to="/saved-tips" className="rounded-sm">
                        <li className="text-black px-2 rounded-sm text-sm ">
                          Saved Tips
                        </li>
                      </NavLink>
                      
                      <NavLink to="/manage-tips" className="rounded-sm">
                        <li className="text-black px-2 rounded-sm text-sm ">
                          Manage Tips
                        </li>
                      </NavLink>
                      <NavLink to="/manage-events" className="rounded-sm">
                        <li className="text-black px-2 rounded-sm text-sm ">
                          Manage Events
                        </li>
                      </NavLink>
                    </ul>
                  </div>
             
              </>
            ) : (
              <Link
                to="/login-signin"
                className="px-4 py-2 rounded-full border border-[#2BC854] text-[#2BC854] hover:bg-[#2BC854] hover:text-white transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-[#0A6B01]   pb-4 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block text-white hover:text-[#2BC854] transition"
            >
              {link.name}
            </NavLink>
          ))}
          {isLoggedIn ? (
            <button onClick={handleLogout} className="block mt-2">
              Logout
            </button>
          ) : (
            <Link to="/login-signin" className="block text-[#2BC854] mt-2">
              Login
            </Link>
          )}
          {/* Mobile Dark Mode Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="mt-4 flex items-center gap-2 text-white hover:text-[#2BC854] transition"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
            <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
