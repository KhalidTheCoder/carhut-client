import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FiMenu, FiX } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchBrand, setSearchBrand] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchBrand.trim() !== "") {
      navigate(`/search/${searchBrand}`);
    }
  };

  return (
    <>
      {/* Hero / Banner Section */}
      <section
        className="relative min-h-[100vh] bg-cover bg-center text-white flex flex-col"
        style={{
          backgroundImage: `url("https://i.ibb.co.com/MxycdV3z/1c7374919fa419ec2abcb24a9fc1024787f16aaa.jpg")`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Navbar */}
        <nav className="relative z-20">
          <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 text-white">
            {/* Logo */}
            <div className="text-2xl font-bold">CarHut</div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-5 items-center">
              <ul className="flex space-x-6 font-medium">
                <Link to="/" className="hover:text-[#405FF2] cursor-pointer">
                  Home
                </Link>
                <li className="hover:text-[#405FF2] cursor-pointer">
                  Listings
                </li>
                <li className="hover:text-[#405FF2] cursor-pointer">Blog</li>
                <li className="hover:text-[#405FF2] cursor-pointer">Pages</li>
                <li className="hover:text-[#405FF2] cursor-pointer">About</li>
                <li className="hover:text-[#405FF2] cursor-pointer">Contact</li>
              </ul>

              <div className="space-x-3">
                <button className="px-4 py-2 hover:text-[#405FF2] font-medium transition">
                  <div className="flex gap-1.5 items-center">
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
          </div>

          {/* Mobile Dropdown */}
          {menuOpen && (
            <div className="absolute top-full left-0 w-full text-white z-30 p-6 flex flex-col space-y-4 lg:hidden bg-black/90">
              <ul className="flex flex-col space-y-4 text-lg font-medium">
                <Link to="/" className="hover:text-[#405FF2] cursor-pointer">
                  Home
                </Link>
                <li className="hover:text-[#405FF2] cursor-pointer">
                  Listings
                </li>
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
        </nav>

        {/* Banner Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center flex-1 px-4">
          <p className="text-lg mb-2">
            Find cars for sale and not rent near you
          </p>
          <h1 className="text-4xl md:text-5xl font-bold py-8 mb-4">
            Find Your Perfect Car
          </h1>

          {/* All | New | Used */}
          <div className="flex items-center justify-center gap-6 font-medium mb-6">
            <button className="hover:text-[#405FF2] transition">All</button>
            <button className="hover:text-[#405FF2] transition">New</button>
            <button className="hover:text-[#405FF2] transition">Used</button>
          </div>

          {/* Search Box */}
          <div className="bg-white text-black rounded-[40px] sm:rounded-[50px] w-full max-w-[930px] flex items-center justify-between p-2 sm:p-4 shadow-lg mx-auto gap-2 sm:gap-3">
            <div className="flex-1 min-w-[70px] sm:min-w-[120px]">
              <select className="w-full px-2 py-2 sm:px-4 sm:py-3 border-none outline-none bg-transparent rounded-[30px] sm:rounded-[50px] text-xs sm:text-sm md:text-base">
                <option>Any Makes</option>
                <option>Audi</option>
                <option>BMW</option>
              </select>
            </div>

            <div className="flex-1 min-w-[70px] sm:min-w-[120px]">
              <select className="w-full px-2 py-2 sm:px-4 sm:py-3 border-none outline-none bg-transparent rounded-[30px] sm:rounded-[50px] text-xs sm:text-sm md:text-base">
                <option>Any Models</option>
                <option>Sedan</option>
                <option>SUV</option>
              </select>
            </div>

            <div className="flex-1 min-w-[90px] sm:min-w-[140px]">
              <h2 className="w-full px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm md:text-base truncate">
                Prices : All Prices
              </h2>
            </div>

            <div className="lg:flex w-full max-w-md mx-auto hidden">
              {/* Input */}
              <input
                type="text"
                placeholder="Search By Brand"
                value={searchBrand}
                onChange={(e) => setSearchBrand(e.target.value)}
                className="flex-1 px-6 py-3 rounded-l-full border border-gray-300 text-xs sm:text-sm md:text-base outline-none"
              />

              {/* Button */}
              <button
                onClick={handleSearch}
                className="px-6 py-3 bg-[#405FF2] hover:bg-blue-700 text-white rounded-r-full font-medium text-xs sm:text-sm md:text-base"
              >
                <div className="flex items-center gap-2">
                  <IoSearch className="text-sm sm:text-base md:text-lg" />
                  <span>Search Cars</span>
                </div>
              </button>
            </div>
          </div>

          <div className="flex w-full max-w-md mx-auto py-5 lg:hidden">
            {/* Input */}
            <input
              type="text"
              placeholder="Search By Brand"
              value={searchBrand}
              onChange={(e) => setSearchBrand(e.target.value)}
              className="flex-1 px-6 py-3 rounded-l-full border border-gray-300 text-xs sm:text-sm md:text-base outline-none"
            />

            {/* Button */}
            <button
              onClick={handleSearch}
              className="px-6 py-3 bg-[#405FF2] hover:bg-blue-700 text-white rounded-r-full font-medium text-xs sm:text-sm md:text-base"
            >
              <div className="flex items-center gap-2">
                <IoSearch className="text-sm sm:text-base md:text-lg" />
                <span>Search Cars</span>
              </div>
            </button>
          </div>

          <p className="text-lg py-16">Or Browse Featured Model</p>

          {/* Car Type */}
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
      </section>
    </>
  );
};

export default Navbar;
