import React, { useState } from "react";
import Container from "../extra/Container";
import logo from "../assets/devspring.png";
import { CiSearch } from "react-icons/ci";
import { IoBag } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header
      className={`bg-[#e6e6dd] shadow-md ${
        isSearchOpen ? "backdrop-blur-md" : ""
      } transition-all duration-500`}
    >
      <Container>
        <nav className="flex items-center justify-between py-2 px-4 relative">
          {/* Logo Section */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Devspring Logo"
              className="w-[110px] h-[100px] "
            />
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-6 text-gray-800 font-medium font-Poppins">
            <li className="hover:text-blue-600 transition duration-300">
              <a href="#dashboard">Dashboard</a>
            </li>
            <li className="hover:text-blue-600 transition duration-300">
              <a href="#courses">All Courses</a>
            </li>
            <li className="hover:text-blue-600 transition duration-300">
              <a href="#resources">Resource</a>
            </li>
            <li className="hover:text-blue-600 transition duration-300">
              <a href="#contact">Contact</a>
            </li>
            <li className="hover:text-blue-600 transition duration-300">
              <a href="#affiliate">Affiliate</a>
            </li>
          </ul>

          {/* Right Section */}
          <div className="flex items-center space-x-6 relative">
            {/* Search Section */}
            <div
              className={`flex items-center  rounded-md overflow-hidden transition-all duration-500 ease-in-out shadow-lg ${
                isSearchOpen ? "w-[300px] bg-white shadow-xl" : "w-[40px]"
              }`}
              style={{
                transform: isSearchOpen ? "translateY(-10px)" : "translateY(0)",
                boxShadow: isSearchOpen
                  ? "0 4px 10px rgba(0, 0, 0, 0.2)"
                  : "none",
              }}
            >
              <input
                type="text"
                className={`${
                  isSearchOpen ? "block" : "hidden"
                } w-full px-3 py-2 text-gray-800 focus:outline-none`}
                placeholder="Search..."
              />
              <button
                onClick={toggleSearch}
                className="text-gray-600 text-xl px-2 hover:text-blue-600 transition duration-300"
                aria-label="Search"
              >
                {isSearchOpen ? <AiOutlineClose /> : <CiSearch />}
              </button>
            </div>

            {/* Cart and Profile */}
            <div className="flex items-center space-x-4">
              <p className="text-gray-800 font-semibold">0.0$</p>
              <IoBag
                className="text-gray-600 text-xl hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer"
                aria-label="Cart"
              />
              <CgProfile
                className="text-gray-600 text-xl hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer"
                aria-label="Profile"
              />
            </div>

            {/* Register Button */}
            <a
              href="#register"
              className="py-2 px-4 text-sm font-medium border border-gray-800 hover:bg-blue-500 hover:text-white transform hover:scale-105 transition duration-300 ease-in-out rounded-md"
            >
              Register
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
