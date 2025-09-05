import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router";

const PopularCar = ({ car }) => {
  return (
    <div className="bg-[#0F172A] rounded-2xl overflow-hidden w-[685px] h-[274px] flex">
      {/* LEFT: Image */}
      <div className="relative w-[270px] h-full">
        <img
          src={
            car.image ||
            "https://placehold.co/400x200/e2e8f0/cccccc?text=Car+Image"
          }
          alt={car.name}
          className="w-full h-full object-cover rounded-l-2xl"
        />
      </div>

      {/* RIGHT: Details */}
      <div className="flex flex-col justify-between p-5 flex-1">
        <div>
          {/* ✅ Title */}
          <h1 className="text-white font-semibold text-lg">
            {car.name} – {car.year}
          </h1>
          <p className="text-sm text-gray-400 mt-1">{car.model}</p>

          {/* ✅ Specs */}
          <div className="flex flex-col gap-2 mt-3 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <img
                className="w-[18px] h-[18px]"
                src="https://i.ibb.co.com/8DYpbmqH/Icon.png"
                alt="mileage"
              />
              <span>{car.mileage} Miles</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="w-[18px] h-[18px]"
                src="https://i.ibb.co.com/8DYpbmqH/Icon.png"
                alt="fuel"
              />
              <span>{car.fuelType}</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="w-[18px] h-[18px]"
                src="https://i.ibb.co.com/8DYpbmqH/Icon.png"
                alt="transmission"
              />
              <span>{car.transmission}</span>
            </div>
          </div>
        </div>

        {/* ✅ Price & Button */}
        <div className="flex justify-between items-end mt-4">
          <div>
            {car.oldPrice && (
              <p className="text-gray-400 line-through text-sm">
                ${car.oldPrice.toLocaleString()}
              </p>
            )}
            <p className="font-bold text-2xl text-white">
              ${car.price.toLocaleString()}
            </p>
          </div>

          <Link>
            <div className="flex gap-1.5 justify-center items-center text-blue-500 hover:text-blue-400 transition">
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

export default PopularCar;
