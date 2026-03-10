import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 relative">
          {/* Left - Logo */}
          <h1 className="text-2xl font-bold text-black dark:text-white">
            BookStore
          </h1>

          {/* Center - Desktop Links */}
          <ul className="hidden md:flex space-x-8 text-black dark:text-white font-medium absolute left-1/2 transform -translate-x-1/2">
            <li className="hover:text-blue-500 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              <Link to="/course">Course</Link>
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
          </ul>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="hidden sm:block px-3 py-1.5 border rounded-md text-sm 
              dark:bg-gray-800 dark:text-white focus:outline-none"
            />

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-xl text-black dark:text-white"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <button
            
            onClick={() => navigate("/login")}

              className="bg-black text-white px-4 py-1.5 rounded-md text-sm"
            >
              Login
            </button>

            {/* Hamburger */}
            <button
              className="md:hidden text-2xl text-black dark:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-3 text-black dark:text-white font-medium">
            <p className="cursor-pointer">Home</p>
            <p className="cursor-pointer">Course</p>
            <p className="cursor-pointer">Contact</p>
            <p className="cursor-pointer">About</p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
