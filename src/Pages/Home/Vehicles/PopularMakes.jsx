import React, { useEffect, useState, useRef } from "react";
import PopularCar from "../../../Components/PopularCar";
import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PopularMakes = () => {
  const [popularCars, setPopularCars] = useState([]);
  const [activeMake, setActiveMake] = useState("Audi");
  const carouselRef = useRef(null);

  useEffect(() => {
    fetch("https://carhut-server-kuq5.vercel.app/cars")
      .then((res) => res.json())
      .then((data) => setPopularCars(data));
  }, []);

  // Filter cars by selected make
  const filteredCars = popularCars.filter(
    (car) => car.brand && car.brand.toLowerCase() === activeMake.toLowerCase()
  );

  // Scroll function
  const scroll = (direction) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].offsetWidth + 24;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#050B20]">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h2 className="text-xl md:text-3xl font-bold text-white">Popular Makes</h2>
          <button className="flex items-center font-semibold gap-1 text-gray-300 hover:text-white transition">
            View All <MdArrowOutward />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mb-8 border-b border-gray-700">
          {["Audi", "Ford", "Mercedes Benz"].map((make) => (
            <button
              key={make}
              onClick={() => setActiveMake(make)}
              className={`pb-2 font-medium transition ${
                activeMake === make
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {make}
            </button>
          ))}
        </div>

        {/* Cars Carousel */}
        <div className="relative">
          <div
            className="flex overflow-x-auto gap-6 pb-4 no-scrollbar"
            ref={carouselRef}
          >
            {filteredCars.length > 0 ? (
              filteredCars.map((car) => (
                <div key={car._id} className="flex-none">
                  <PopularCar car={car} />
                </div>
              ))
            ) : (
              <div className="text-gray-400">
                No cars available for {activeMake}
              </div>
            )}
          </div>

          {/* Carousel Controls */}
          <div className="absolute -bottom-10 left-0 flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-[60px] h-[40px] flex justify-center items-center border rounded-[30px] text-white hover:bg-gray-700 transition"
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-[60px] h-[40px] border flex justify-center items-center rounded-[30px] text-white hover:bg-gray-700 transition"
            >
              
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularMakes;
