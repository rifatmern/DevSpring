"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

interface Course {
    title: string;
    img: string; // Use string for public images
}

const courses: Course[] = [
    { title: "Affiliate Marketing", img: "/all.png" },
    { title: "Full Stack Development", img: "/all.png" },
    { title: "Web Design", img: "/all.png" },
    { title: "Digital Marketing", img: "/all.png" },
];

const ActiveCourses: React.FC = () => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 640);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const visibleCourses = isMobile && !expanded ? courses.slice(0, 2) : courses;

    return (
        <section className="py-16">
            <Container>
                <div className="mb-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold">Active Courses</h1>
                </div>

                <div className="flex flex-wrap sm:flex-nowrap justify-center gap-12">
                    {visibleCourses.map((course, index) => (
                        <div
                            key={index}
                            className="w-[320px] h-100 bg-white rounded-xl shadow-lg overflow-hidden"
                        >
                            <div className="w-full h-50 relative">
                                <Image
                                    src={course.img}
                                    alt={course.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            <div className="p-4 flex flex-col items-center justify-evenly h-50">
                                <p className="text-lg font-bold text-gray-800 text-center">
                                    {course.title}
                                </p>

                                <button className="relative flex items-center justify-center w-42.5 h-11.25 text-white font-semibold bg-linear-to-r from-[#161038] to-[#691bce] rounded-md shadow-md hover:from-[#691bce] hover:to-[#161038] transition-transform transform hover:scale-105 duration-300 ease-in-out">
                                    Enroll Now
                                    <span className="text-lg ml-2">
                                        <MdKeyboardDoubleArrowRight />
                                    </span>
                                    <div className="absolute inset-0 bg-white opacity-0 rounded-md hover:opacity-10 transition duration-300"></div>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show More / Show Less */}
                {isMobile && (
                    <div className="mt-8 text-center">
                        {!expanded ? (
                            <button
                                onClick={() => setExpanded(true)}
                                className="px-6 py-3 bg-[#691bce] text-white rounded-md shadow-md hover:bg-[#161038] transition duration-300"
                            >
                                Show More
                            </button>
                        ) : (
                            <button
                                onClick={() => setExpanded(false)}
                                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md shadow-md hover:bg-gray-300 transition duration-300"
                            >
                                Show Less
                            </button>
                        )}
                    </div>
                )}
            </Container>
        </section>
    );
};

export default ActiveCourses;