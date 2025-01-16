import React from "react";
import Container from "../extra/Container";
import banner from "../assets/banner.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Banner = () => {
  return (
    <section className="bg-gradient-to-b from-[#161038] to-[#691bce]">
      <Container>
        <div className="py-[117px] flex justify-evenly ">
          <div className="text-center md:text-left">
            {/* Title */}
            <h1 className="text-white text-3xl md:text-4xl font-semibold mb-3 leading-snug">
              Our latest course:
            </h1>

            {/* Course Name */}
            <p className="text-white text-4xl md:text-5xl font-bold mb-6 leading-relaxed">
              Video Editing <br /> and Storytelling
            </p>

            {/* Enroll Now Button */}
            <p className="flex items-center justify-center space-x-2 w-[160px] h-[45px] text-center text-yellow-500 font-semibold border border-yellow-500 rounded-md hover:bg-yellow-500 hover:text-white transition duration-300 ease-in-out cursor-pointer">
              Enroll Now{" "}
              <span className="text-lg">
                <MdKeyboardDoubleArrowRight />
              </span>
            </p>
          </div>

          <div className="">
            <img
              src={banner}
              alt="Video Banner"
              className="w-full h-auto object-cover"
            />
            <div className=" bottom-4 left-4 bg-white bg-opacity-80 px-6 py-3 rounded-b-sm shadow-lg">
              <p className="text-xl font-semibold text-gray-800">Video</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
