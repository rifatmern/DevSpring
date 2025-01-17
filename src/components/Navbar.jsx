import React, { useState, useEffect } from "react";
import Container from "../extra/Container";
import logo from "../assets/devspring.png";
import { CiSearch } from "react-icons/ci";
import { IoBag } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Detect scroll direction and show/hide navbar
  useEffect(() => {
    let lastScrollY = window.scrollY;

    // Initialize `isScrolled` based on the current scroll position on page load
    if (lastScrollY > 50) {
      setIsScrolled(true); // If page is already scrolled down
    } else {
      setIsScrolled(false); // If page is at the top
    }

    const handleScroll = () => {
      // Prevent setting isScrolled if scroll position is at the top or no scroll
      if (window.scrollY > 50 && window.scrollY > lastScrollY) {
        setIsScrolled(true); // Scrolling down
      } else if (window.scrollY <= 50) {
        setIsScrolled(false); // No scroll or at the top
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        isScrolled ? "translate-y-0" : "-translate-y-full"
      } bg-white shadow-md`}
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
            {/* New Search Section */}
            <div
              className={`flex items-center transition-all duration-500 ease-in-out rounded-md overflow-hidden ${
                isSearchOpen ? "w-[300px] bg-gray-100 shadow-md" : "w-[40px]"
              }`}
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
