import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FiMenu, FiX } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [carType, setCarType] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/cars/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data))
      .catch((err) => console.error(err));
  }, []);
  // console.log(brands);

  // Fetch models when brand changes
  useEffect(() => {
    if (!selectedBrand) return setModels([]);
    fetch(`http://localhost:5000/cars/models?brand=${selectedBrand}`)
      .then((res) => res.json())
      .then((data) => setModels(data))
      .catch((err) => console.error(err));
  }, [selectedBrand]);

  console.log(models);

  const handleSearch = (typeParam = carType) => {
    let query = [];

    if (typeParam && typeParam !== "all") query.push(`type=${typeParam}`);
    if (selectedBrand) query.push(`brand=${selectedBrand}`);
    if (selectedModel) query.push(`model=${selectedModel}`);

    const finalQuery = query.length > 0 ? `?${query.join("&")}` : "";
    navigate(`/search${finalQuery}`);
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
            <button
              className={`hover:text-[#405FF2] transition ${
                carType === "all" ? "text-[#405FF2]" : ""
              }`}
              onClick={() => {
                setCarType("all");
                handleSearch("all");
              }}
            >
              All
            </button>

            <button
              className={`hover:text-[#405FF2] transition ${
                carType === "new" ? "text-[#405FF2]" : ""
              }`}
              onClick={() => {
                setCarType("new");
                handleSearch("new");
              }}
            >
              New
            </button>

            <button
              className={`hover:text-[#405FF2] transition ${
                carType === "used" ? "text-[#405FF2]" : ""
              }`}
              onClick={() => {
                setCarType("used");
                handleSearch("used");
              }}
            >
              Used
            </button>
          </div>

          {/* Search Box */}
          <div className="bg-white text-black rounded-[40px] sm:rounded-[50px] w-full max-w-[930px] flex items-center justify-between p-2 sm:p-4 shadow-lg mx-auto gap-2 sm:gap-3">
            <div className="flex-1 min-w-[70px] sm:min-w-[120px]">
              <select
                className="w-full px-2 py-2 sm:px-4 sm:py-3 border-none outline-none bg-transparent rounded-[30px] sm:rounded-[50px] text-xs sm:text-sm md:text-base"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                <option value="">Any Makes</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1 min-w-[70px] sm:min-w-[120px]">
              <select
                className="w-full px-2 py-2 sm:px-4 sm:py-3 border-none outline-none bg-transparent rounded-[30px] sm:rounded-[50px] text-xs sm:text-sm md:text-base"
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                disabled={!selectedBrand}
              >
                <option value="">Any Models</option>
                {models.map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1 min-w-[90px] sm:min-w-[140px]">
              <h2 className="w-full px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm md:text-base truncate">
                Prices : All Prices
              </h2>
            </div>

            {/* Button */}
            <button
              onClick={() => handleSearch()}
              className="bg-[#405FF2] hidden md:flex justify-center items-center gap-1 text-white px-3 py-2 sm:px-5 sm:py-3 rounded-[30px] sm:rounded-[60px] font-medium hover:bg-blue-700 text-xs sm:text-sm md:text-base whitespace-nowrap"
            >
              <IoSearch className="text-sm sm:text-base md:text-lg" />
              <p>Search Cars</p>
            </button>
          </div>

          <div className="flex w-full max-w-md justify-center mx-auto py-5 md:hidden">
            {/* Button */}
            <button
              onClick={() => handleSearch()}
              className="bg-[#405FF2] flex justify-center items-center gap-1 text-white px-3 py-2 sm:px-5 sm:py-3 rounded-[30px] sm:rounded-[60px] font-medium hover:bg-blue-700 text-xs sm:text-sm md:text-base whitespace-nowrap"
            >
              <IoSearch className="text-sm sm:text-base md:text-lg" />
              <p>Search Cars</p>
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
