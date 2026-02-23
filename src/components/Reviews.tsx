"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import reviews from "@/data/reviews";

interface Review {
    id: number;
    name: string;
    company: string;
    rating: number;
    message: string;
    image: string; 
}


const Reviews: React.FC = () => {
    const [visibleCount, setVisibleCount] = useState<number>(3);

    const handleToggle = () => {
        if (visibleCount === 3) {
            setVisibleCount(reviews.length);
        } else {
            setVisibleCount(3);
        }
    };

    return (
        <section className="py-24 bg-linear-to-br from-gray-50 via-white to-gray-100">
            <div className="max-w-6xl mx-auto px-4">

                {/* Heading */}
                <h2 className="text-4xl font-bold text-center mb-4">
                    Client Success Stories
                </h2>
                <p className="text-center text-gray-500 mb-16">
                    Real feedback from real clients who trusted DevSpring.
                </p>

                {/* Reviews Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.slice(0, visibleCount).map((review: Review) => (
                        <div
                            key={review.id}
                            className="bg-white/70 backdrop-blur-md border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-14 h-14 relative mr-4 border-2 border-green-500 rounded-full overflow-hidden">
                                    <Image
                                        src={review.image}
                                        alt={review.name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">{review.name}</h4>
                                    <p className="text-sm text-gray-500">{review.company}</p>
                                </div>
                            </div>

                            <div className="flex mb-4 text-yellow-400">
                                {[...Array(review.rating)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>

                            <p className="text-gray-600 leading-relaxed text-sm">
                                {review.message}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Show More / Show Less Button */}
                {reviews.length > 3 && (
                    <div className="text-center mt-12">
                        <button
                            onClick={handleToggle}
                            className="group relative inline-flex items-center gap-2 px-8 py-3 bg-[#691bce] text-white rounded-full font-medium overflow-hidden transition-all duration-300 shadow-md hover:shadow-2xl active:scale-95"
                        >
                            {/* Glow effect */}
                            <span className="absolute inset-0 rounded-full bg-[#691bce] blur-xl opacity-0 group-hover:opacity-40 transition duration-500"></span>

                            {/* Button text */}
                            <span className="relative z-10">
                                {visibleCount === 3 ? "Show More Reviews" : "Show Less"}
                            </span>

                            {/* Animated icon */}
                            <FiArrowUpRight
                                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                size={18}
                            />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Reviews;