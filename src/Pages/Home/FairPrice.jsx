import React from "react";
import { FaCheck } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const FairPrice = () => {
  return (
    <div className="px-4">
      <div className="text-black bg-[rgba(238,241,251,1)] w-full max-w-7xl mx-auto rounded-[16px] mt-8 flex flex-col lg:flex-row items-center justify-between overflow-hidden">
        {/* Left Section: Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="w-full h-64 sm:h-80 md:h-[400px] lg:h-full">
            <img
              src="https://i.ibb.co.com/nMgBPVYW/679386ececc7523c3a4079b573ebe4e52d8d437c.jpg"
              alt="A stylish car on a scenic road"
              className="w-full h-full rounded-l-3xl object-cover"
            />
          </div>
        </div>

        {/* Right Section: Text and Button */}
        <div className="w-full lg:w-1/2 mt-8 px-8 lg:mt-0 lg:pl-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Get A Fair Price For Your Car <br className="hidden md:inline" />{" "}
            Sell To Us Today
          </h2>
          <p className="text-gray-700 mb-6">
            We are committed to providing our customers with exceptional
            service, competitive pricing, and a wide range of.
          </p>
          <ul className=" space-y-2 mb-8">
            <ul className="flex gap-2">
              <div className="bg-white p-2 flex justify-center items-center rounded-3xl w-[25px] h-[25px]">
                <FaCheck size={10} />
              </div>
              <p>
                We are the UK’s largest provider, with more patrols in more
                places
              </p>
            </ul>
            <ul className="flex gap-2">
              <div className="bg-white p-2 flex justify-center items-center rounded-3xl w-[25px] h-[25px]">
                <FaCheck size={10} />
              </div>
              You get 24/7 roadside assistance
            </ul>
            <ul className="flex gap-2">
              <div className="bg-white p-2 flex justify-center items-center rounded-3xl w-[25px] h-[25px]">
                <FaCheck size={10} />
              </div>
              We fix 4 out of 5 cars at the roadside
            </ul>
          </ul>
          <button className="bg-[#405FF2] text-white px-6 py-3 mb-5 rounded-[60px] flex justify-center items-center gap-1.5 font-medium hover:bg-blue-700 transition-colors w-full md:w-auto">
            <p>Get Started</p> <MdArrowOutward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FairPrice;
