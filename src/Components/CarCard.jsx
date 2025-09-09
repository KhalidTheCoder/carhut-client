import React from "react";
import { IoBookmarkOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router";

const CarCard = ({ car }) => {
  const tagColors = {
    "Great Price": "#3D923A",
    "Low Mileage": "#405FF2",
    "Hot Deal": "bg-red-500",
    Featured: "bg-yellow-500 text-black",
  };
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="relative">
        <img
          src={
            car.image ||
            "https://placehold.co/400x200/e2e8f0/cccccc?text=Car+Image"
          }
          alt={car.name}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute top-2 right-2 bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-100">
          <IoBookmarkOutline />
        </div>
        {car.tags && car.tags.length > 0 && (
          <div className="absolute top-2 left-2 flex flex-wrap gap-2">
            {car.tags.map((tag, idx) => {
              const color = tagColors[tag];

              const isHex = color && color.startsWith("#");

              return (
                <span
                  key={idx}
                  className={`text-white text-xs font-medium px-2 py-1 rounded-full ${
                    !isHex ? color : ""
                  }`}
                  style={isHex ? { backgroundColor: color } : {}}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col">
        <h3 className="font-bold text-lg text-gray-800">
          {car.name} – {car.year}
        </h3>
        <p className="text-sm text-gray-500">{car.model}</p>
        <div className="flex justify-around items-center text-xs text-gray-500 border-b border-t border-gray-300 py-3">
          <div className="flex flex-col gap-2 items-center">
            <img src="https://i.ibb.co.com/DDGzCN8g/Vector-7.png"></img>
            <span>{car.mileage}</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img src="https://i.ibb.co.com/fVRDXPpZ/Vector-8.png"></img>
            <span>{car.fuelType}</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img src="https://i.ibb.co.com/qLRpL69v/Vector-9.png"></img>
            <span>{car.transmission}</span>
          </div>
        </div>
        <div className="flex justify-between items-end mt-4">
          <p className="font-bold text-xl text-gray-900">
            ${car.price.toLocaleString()}
          </p>
          <Link>
            <div className="flex gap-1.5 justify-center items-center text-blue-600">
              <button className="font-medium hover:underline text-sm">
                View Details
              </button>
              <MdArrowOutward />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
