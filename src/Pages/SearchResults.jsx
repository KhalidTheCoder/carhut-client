import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CarCard from "../Components/CarCard";

const SearchResults = () => {
  const { brand } = useParams();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/cars?brand=${brand}`)
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error(err));
  }, [brand]);

  return (
    <div className="bg-[#F9FBFC] text-black w-full shadow-lg rounded-t-3xl md:rounded-t-[80px] md:-mt-16 relative z-10">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-semibold mb-4">
          Search Results for <span className="text-blue-600">{brand.toUpperCase()}</span>
        </h2>

        {cars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <CarCard key={car._id} car={car} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No cars found for "{brand}".</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
