import React from "react";
import Lottie from "lottie-react";
import { Link } from "react-router";
import errorAnimation from "../assets/lootie Json/error.json";

const Error = () => {
  return (
    <div className="relative flex items-center justify-center h-screen w-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute w-[40rem] h-[40rem] bg-blue-200 rounded-full blur-3xl opacity-20 -top-32 -left-32"></div>
      <div className="absolute w-[30rem] h-[30rem] bg-indigo-300 rounded-full blur-3xl opacity-20 bottom-0 -right-20"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl w-full px-6 md:px-12">
        {/* Animation Section */}
        <div className="flex justify-center">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/40 p-6 md:p-10">
            <Lottie animationData={errorAnimation} loop={true} className="w-[18rem] md:w-[24rem]" />
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-[5rem] md:text-[6rem] font-extrabold text-gray-900 leading-none">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-2">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-md leading-relaxed mx-auto md:mx-0">
            The page you’re looking for doesn’t exist or may have been moved.
            Let’s guide you back to safety with the options below.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              to="/"
              className="px-8 py-3 rounded-xl bg-[#405FF2] text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Go Home
            </Link>

            <Link
              to="/contact"
              className="px-8 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:border-blue-600 hover:text-blue-600 hover:shadow-md hover:scale-105 transition-all duration-300"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
