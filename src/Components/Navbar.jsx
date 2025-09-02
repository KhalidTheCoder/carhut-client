import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FiMenu, FiX } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="relative h-[90vh] bg-cover bg-center font-sans"
      style={{
        backgroundImage: `url("https://i.ibb.co.com/MxycdV3z/1c7374919fa419ec2abcb24a9fc1024787f16aaa.jpg")`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Navbar */}
      <nav className="relative z-10  mx-auto flex justify-between items-center py-6 px-12 text-white">
        {/* Logo */}
        <div className="text-2xl font-bold">CarHut</div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-5 justify-center items-center">
          <ul className="flex space-x-6 font-medium">
            <li className="hover:text-[#405FF2] cursor-pointer">Home</li>
            <li className="hover:text-[#405FF2] cursor-pointer">Listings</li>
            <li className="hover:text-[#405FF2] cursor-pointer">Blog</li>
            <li className="hover:text-[#405FF2] cursor-pointer">Pages</li>
            <li className="hover:text-[#405FF2] cursor-pointer">About</li>
            <li className="hover:text-[#405FF2] cursor-pointer">Contact</li>
          </ul>

          <div className="space-x-3">
            <button className="px-4 py-2 hover:text-[#405FF2] font-medium transition">
              <div className="flex gap-1.5 justify-center items-center">
                <CgProfile />
                <p>Sign In</p>
              </div>
            </button>
            <button className="px-4 py-2 bg-white text-black rounded-[28px] hover:bg-[#405FF2] font-medium hover:text-white transition">
              Submit Listing
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full bg-black/90 text-white z-20 p-6 flex flex-col space-y-4 lg:hidden">
          <button
            className="self-end text-3xl mb-4"
            onClick={() => setMenuOpen(false)}
          >
            <FiX />
          </button>

          <ul className="flex flex-col space-y-4 text-lg font-medium">
            <li className="hover:text-[#405FF2] cursor-pointer">Home</li>
            <li className="hover:text-[#405FF2] cursor-pointer">Listings</li>
            <li className="hover:text-[#405FF2] cursor-pointer">Blog</li>
            <li className="hover:text-[#405FF2] cursor-pointer">Pages</li>
            <li className="hover:text-[#405FF2] cursor-pointer">About</li>
            <li className="hover:text-[#405FF2] cursor-pointer">Contact</li>
          </ul>

          <div className="flex flex-col space-y-3 pt-4">
            <button className="px-4 py-2 border border-white rounded-lg font-medium hover:bg-white hover:text-black transition">
              Sign In
            </button>
            <button className="px-4 py-2 bg-white rounded-lg text-black font-medium hover:bg-[#405FF2] transition">
              Submit Listing
            </button>
          </div>
        </div>
      )}

      {/* Banner Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[70vh] text-center text-white px-4">
        <p className="text-lg mb-2">Find cars for sale and not rent near you</p>
        <h1 className="text-4xl md:text-5xl font-bold py-8 mb-4">
          Find Your Perfect Car
        </h1>

        {/* All | New | Used */}
        <div className="flex items-center justify-center gap-6 text-white font-medium mb-6">
          <button className="hover:text-[#405FF2] transition">All</button>
          <button className="hover:text-[#405FF2] transition">New</button>
          <button className="hover:text-[#405FF2] transition">Used</button>
        </div>

        {/* Search Box */}
        <div className="bg-white text-black rounded-[50px] w-full max-w-[930px] flex flex-wrap items-center justify-center p-4 shadow-lg mx-auto gap-3">
          <div className="flex-1 min-w-[120px]">
            <select className="w-full px-4 py-3 border-none outline-none bg-transparent">
              <option>Any Makes</option>
              <option>Audi</option>
              <option>BMW</option>
            </select>
          </div>

          <div className="flex-1 min-w-[120px]">
            <select className="w-full px-4 py-3 border-none outline-none bg-transparent">
              <option>Any Models</option>
              <option>Sedan</option>
              <option>SUV</option>
            </select>
          </div>

          <div className="flex-1 min-w-[120px]">
            <h2 className="w-full px-4 py-3 border-none outline-none bg-transparent">
              Prices : All Prices
            </h2>
          </div>

          <button className="bg-[#405FF2] flex justify-center items-center gap-1.5 text-white px-6 py-3 rounded-[60px] font-medium hover:bg-blue-700 w-full sm:w-[215px] mt-2 sm:mt-0">
            <IoSearch /> <p>Search Cars</p>
          </button>
        </div>

        <p className="text-lg my-5 pt-12">Or Browse Featured Model</p>

        {/* Car Type Filter */}
        <div className="flex flex-wrap justify-center gap-3 my-6">
          <button className="px-4 py-2 bg-white/30 rounded-full text-white hover:bg-[#405FF2] hover:text-white transition">
            <img
              className="inline mr-1.5"
              src="https://i.ibb.co.com/hr8Pn9s/Vector.png"
              alt=""
            />
            <span>SUV</span>
          </button>
          <button className="px-4 py-2 bg-white/30 rounded-full text-white hover:bg-[#405FF2] hover:text-white transition">
            <img
              className="inline mr-1.5"
              src="https://i.ibb.co.com/zhy3m9Zs/Vector-1.png"
              alt=""
            />
            <span>Sedan</span>
          </button>
          <button className="px-4 py-2 bg-white/30 rounded-full text-white hover:bg-[#405FF2] hover:text-white transition">
            <img
              className="inline mr-1.5"
              src="https://i.ibb.co.com/RTYw02M5/Vector-2.png"
              alt=""
            />
            <span>Hatchback</span>
          </button>
          <button className="px-4 py-2 bg-white/30 rounded-full text-white hover:bg-[#405FF2] hover:text-white transition">
            <img
              className="inline mr-1.5"
              src="https://i.ibb.co.com/j7MVVc7/Vector-3.png"
              alt=""
            />
            <span>Coupe</span>
          </button>
          <button className="px-4 py-2 bg-white/30 rounded-full text-white hover:bg-[#405FF2] hover:text-white transition">
            <img
              className="inline mr-1.5"
              src="https://i.ibb.co.com/qMZSF4w8/Vector-5.png"
              alt=""
            />
            <span>Hybrid</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
