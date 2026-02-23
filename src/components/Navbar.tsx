"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "../components/Container";
import { CiSearch } from "react-icons/ci";
import { IoBag } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const toggleSearch = (): void => {
        setIsSearchOpen((prev) => !prev);
    };

    useEffect(() => {
        let lastScrollY: number = window.scrollY;

        if (lastScrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        const handleScroll = (): void => {
            if (window.scrollY > 50 && window.scrollY > lastScrollY) {
                setIsScrolled(true);
            } else if (window.scrollY <= 50) {
                setIsScrolled(false);
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
            className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${isScrolled ? "translate-y-0" : "-translate-y-full"
                } bg-white shadow-md`}
        >
            <Container>
                <nav className="flex items-center justify-between py-2 px-4 relative">

                    {/* Logo Section */}
                    <div className="flex items-center">
                        <Image
                            src="/devspring.png"
                            alt="Devspring Logo"
                            width={110}
                            height={100}
                            priority
                            className="object-contain"
                        />
                    </div>

                    {/* Navigation Links */}
                    <ul className="hidden md:flex space-x-6 text-gray-800 font-medium">
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

                        {/* Search */}
                        <div
                            className={`flex items-center transition-all duration-500 ease-in-out rounded-md overflow-hidden ${isSearchOpen ? "w-75 bg-gray-100 shadow-md" : "w-10"
                                }`}
                        >
                            <input
                                type="text"
                                className={`${isSearchOpen ? "block" : "hidden"
                                    } w-full px-3 py-2 text-gray-800 focus:outline-none bg-transparent`}
                                placeholder="Search..."
                            />
                            <button
                                onClick={toggleSearch}
                                className="text-gray-600 text-xl px-2 hover:text-blue-600 transition duration-300"
                                type="button"
                            >
                                {isSearchOpen ? <AiOutlineClose /> : <CiSearch />}
                            </button>
                        </div>

                        {/* Cart & Profile */}
                        <div className="flex items-center space-x-4">
                            <p className="text-gray-800 font-semibold">0.0$</p>
                            <IoBag className="text-gray-600 text-xl hover:text-blue-600 transition cursor-pointer" />
                            <CgProfile className="text-gray-600 text-xl hover:text-blue-600 transition cursor-pointer" />
                        </div>

                        {/* Register Button */}
                        <a
                            href="#register"
                            className="py-2 px-4 text-sm font-medium border border-gray-800 hover:bg-blue-500 hover:text-white hover:scale-105 transition duration-300 rounded-md"
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