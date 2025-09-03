import React, { useEffect, useState, useRef } from "react";
import CarCard from "../../../Components/CarCard";
import { Link } from "react-router";
import { MdArrowOutward } from "react-icons/md";

const ChevronLeftIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5 8.25 12 15.75 4.5"
    />
  </svg>
);

const ChevronRightIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5 15.75 12 8.25 19.5"
    />
  </svg>
);

const AllVehicles = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("In Stock");
  const carouselRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching cars:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  // Filter by category
  const filteredCars = cars.filter((car) =>
    activeCategory === "In Stock" ? true : car.category === activeCategory
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
    <div className="max-w-7xl mx-auto py-8">
      {/* Header & Category Filter */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-2xl font-bold mb-4 md:mb-0">
          Explore All Vehicles
        </h2>
        <Link>
          <div className="flex gap-1.5 justify-center items-center">
            <p>View All</p>
            <MdArrowOutward />
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-6 p-1 my-8">
        {["In Stock", "New Cars", "Used Cars"].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`relative font-medium transition-colors duration-200 ${
              activeCategory === category
                ? "after:content-[''] after:block after:h-[2px] after:w-full after:bg-blue-500"
                : "hover:text-blue-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cars Carousel */}
      <div>
        <div
          className="flex overflow-x-auto gap-6 pb-4"
          ref={carouselRef}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => (
              <div
                key={car._id}
                className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              >
                <CarCard car={car} />
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 w-full py-10">
              No cars found in this category.
            </div>
          )}
        </div>

        {/* Carousel Controls */}
        <div className="flex mt-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-white shadow-sm border border-gray-200"
            >
              <ChevronLeftIcon className="h-5 w-5 text-gray-800" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-white shadow-sm border border-gray-200"
            >
              <ChevronRightIcon className="h-5 w-5 text-gray-800" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllVehicles;
