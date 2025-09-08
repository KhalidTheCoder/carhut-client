import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import CarCard from "../Components/CarCard";

const SearchResults = () => {
  const location = useLocation();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const brand = params.get("brand");
    const model = params.get("model");
    const type = params.get("type");

    let query = [];

    if (type && type !== "all") query.push(`type=${type}`);
    if (brand) query.push(`brand=${brand}`);
    if (model) query.push(`model=${model}`);

    const finalQuery = query.length > 0 ? `?${query.join("&")}` : "";

    fetch(`http://localhost:5000/cars${finalQuery}`)
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error(err));
  }, [location.search]);

  return (
    <div className="bg-[#F9FBFC] text-black w-full shadow-lg rounded-t-3xl rounded-b-3xl md:rounded-b-[80px] md:-mb-18 md:rounded-t-[80px] md:-mt-16 relative z-10">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-semibold mb-4">Search Results</h2>

        {cars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <CarCard key={car._id} car={car} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No cars found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
