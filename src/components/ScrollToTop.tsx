"use client";

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop: React.FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`
        fixed bottom-8 right-8 z-9999 w-14 h-14 rounded-full bg-[#691bce] text-white flex items-center justify-center
        shadow-lg hover:shadow-2xl transition-all duration-300
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-0"}
    `}
            style={{ transitionProperty: "opacity, transform" }}
        >
            <FaArrowUp className="animate-bounce text-lg" />
        </button>
    );
};

export default ScrollToTop;