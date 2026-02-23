"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/Container";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Banner: React.FC = () => {
    return (
        <section className="bg-linear-to-b from-[#161038] to-[#691bce]">
            <Container>
                <div className="flex flex-col md:flex-row justify-evenly items-center py-28 gap-8">

                    {/* Text Section */}
                    <div className="text-center md:text-left">

                        <h1 className="text-white text-3xl md:text-4xl font-semibold mb-3 leading-snug">
                            Our latest course:
                        </h1>

                        <p className="text-white text-4xl md:text-5xl font-bold mb-6 leading-relaxed">
                            Video Editing <br /> and Storytelling
                        </p>

                        <div className="flex justify-center md:justify-start">
                            <button className="flex items-center justify-center gap-2 w-40 h-11 text-yellow-500 font-semibold border border-yellow-500 rounded-md hover:bg-yellow-500 hover:text-white transition duration-300">
                                Enroll Now
                                <span className="text-lg">
                                    <MdKeyboardDoubleArrowRight />
                                </span>
                            </button>
                        </div>

                    </div>

                    {/* Image Section */}
                    <div className="relative w-full md:w-auto flex justify-center md:justify-end">
                        <div className="hidden md:block relative w-100 h-75">

                            <Image
                                src="/banner.png"
                                alt="Video Banner"
                                fill
                                className="object-cover rounded-md"
                                priority
                            />

                            {/* Video Label */}
                            <div className="absolute bottom-4 left-4 bg-white/80 px-6 py-3 rounded shadow-lg">
                                <p className="text-xl font-semibold text-gray-800">Video</p>
                            </div>

                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default Banner;