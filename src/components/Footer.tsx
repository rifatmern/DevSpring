"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/Container";
import { FaSquareFacebook, FaFacebookMessenger } from "react-icons/fa6";
import { FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { BiLogoWhatsappSquare } from "react-icons/bi";

const Footer: React.FC = () => {
    return (
        <section className="bg-linear-to-b from-[#161038] to-[#691bce] text-white">
            <Container>
                <footer className="py-12">

                    {/* Top Section */}
                    <div className="flex flex-wrap justify-between gap-8 items-start">

                        {/* About */}
                        <div className="w-full sm:w-1/2 lg:w-1/3">
                            <h2 className="text-3xl font-extrabold mb-4">DevSpring</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Building smarter, faster, and more innovative web solutions.
                                Join us in transforming ideas into impactful digital experiences.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="w-full sm:w-1/2 lg:w-1/4">
                            <h3 className="text-xl font-semibold mb-4">Explore</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/about" className="text-gray-300 hover:text-white transition">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services" className="text-gray-300 hover:text-white transition">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects" className="text-gray-300 hover:text-white transition">
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-gray-300 hover:text-white transition">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="w-full sm:w-1/2 lg:w-1/3">
                            <h3 className="text-xl font-semibold mb-4">Contact</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li>
                                    <a href="mailto:hr.devspring@gmail.com" className="hover:text-white transition">
                                        hr.devspring@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <span className="hover:text-white transition">
                                        +880 1770 560 025
                                    </span>
                                </li>
                                <li>
                                    <span className="hover:text-white transition">
                                        Dhaka, Bangladesh
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">

                        <p className="text-gray-400 text-sm text-center sm:text-left">
                            © {new Date().getFullYear()} DevSpring. Crafted with ❤️ for developers.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 text-2xl">

                            <a
                                href="https://facebook.com/profile.php?id=61565617242986"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white hover:scale-110 transition"
                            >
                                <FaSquareFacebook />
                            </a>

                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white hover:scale-110 transition"
                            >
                                <FaTwitterSquare />
                            </a>

                            <a
                                href="https://www.linkedin.com/groups/14523833/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white hover:scale-110 transition"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://www.messenger.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white hover:scale-110 transition"
                            >
                                <FaFacebookMessenger />
                            </a>

                            <a
                                href="https://wa.me/8801770560025"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white hover:scale-110 transition"
                            >
                                <BiLogoWhatsappSquare />
                            </a>

                        </div>
                    </div>

                </footer>
            </Container>
        </section>
    );
};

export default Footer;