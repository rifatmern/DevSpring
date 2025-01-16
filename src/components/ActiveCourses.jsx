import React from "react";
import Container from "../extra/Container";
import ac1 from "../assets/ac1.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const ActiveCourses = () => {
  return (
    <section className="py-[60px] ">
      <Container>
        <div className="mb-[50px]">
          <h1 className="text-[35px] font-bold">Active Courses</h1>
        </div>
        <div className="flex">
          <div className="w-[320px] h-[400px] mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="w-full h-[200px]">
              <img
                src={ac1}
                alt="Course Image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col items-center justify-evenly h-[200px]">
              <p className="text-lg font-bold text-gray-800">
                Affiliate Marketing
              </p>
              <button className="relative flex items-center justify-center w-[170px] h-[45px] text-white font-semibold bg-gradient-to-r from-[#161038] to-[#691bce] rounded-md shadow-md hover:from-[#691bce] hover:to-[#161038] transition-transform transform hover:scale-105 duration-300 ease-in-out">
                Enroll Now
                <span className="text-lg ml-2">
                  <MdKeyboardDoubleArrowRight />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 rounded-md hover:opacity-10 transition duration-300"></div>
              </button>
            </div>
          </div>

          <div className="w-[320px] h-[400px] mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="w-full h-[200px]">
              <img
                src={ac1}
                alt="Course Image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col items-center justify-evenly h-[200px]">
              <p className="text-lg font-bold text-gray-800">
                Full Stack Development
              </p>
              <button className="relative flex items-center justify-center w-[170px] h-[45px] text-white font-semibold bg-gradient-to-r from-[#161038] to-[#691bce] rounded-md shadow-md hover:from-[#691bce] hover:to-[#161038] transition-transform transform hover:scale-105 duration-300 ease-in-out">
                Enroll Now
                <span className="text-lg ml-2">
                  <MdKeyboardDoubleArrowRight />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 rounded-md hover:opacity-10 transition duration-300"></div>
              </button>
            </div>
          </div>

          <div className="w-[320px] h-[400px] mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="w-full h-[200px]">
              <img
                src={ac1}
                alt="Course Image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col items-center justify-evenly h-[200px]">
              <p className="text-lg font-bold text-gray-800">
                Web Desing
              </p>
              <button className="relative flex items-center justify-center w-[170px] h-[45px] text-white font-semibold bg-gradient-to-r from-[#161038] to-[#691bce] rounded-md shadow-md hover:from-[#691bce] hover:to-[#161038] transition-transform transform hover:scale-105 duration-300 ease-in-out">
                Enroll Now
                <span className="text-lg ml-2">
                  <MdKeyboardDoubleArrowRight />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 rounded-md hover:opacity-10 transition duration-300"></div>
              </button>
            </div>
          </div>

          <div className="w-[320px] h-[400px] mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="w-full h-[200px]">
              <img
                src={ac1}
                alt="Course Image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col items-center justify-evenly h-[200px]">
              <p className="text-lg font-bold text-gray-800">
                Digital Marketing
              </p>
              <button className="relative flex items-center justify-center w-[170px] h-[45px] text-white font-semibold bg-gradient-to-r from-[#161038] to-[#691bce] rounded-md shadow-md hover:from-[#691bce] hover:to-[#161038] transition-transform transform hover:scale-105 duration-300 ease-in-out">
                Enroll Now
                <span className="text-lg ml-2">
                  <MdKeyboardDoubleArrowRight />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 rounded-md hover:opacity-10 transition duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ActiveCourses;
