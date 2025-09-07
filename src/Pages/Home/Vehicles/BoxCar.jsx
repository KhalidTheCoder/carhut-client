import { useState, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router";

const tabs = [
  { id: "new", label: "New Cars For Sale" },
  { id: "used", label: "Used Cars For Sale" },
  { id: "type", label: "Browse By Type" },
  { id: "brand", label: "Browse By Brand" },
];

export default function BoxCar() {
  const [activeTab, setActiveTab] = useState("new");
  const [carData, setCarData] = useState({
    new: [],
    used: [],
    type: [],
    brand: [],
  });

  useEffect(() => {
    async function fetchCars() {
      try {
        const res = await fetch("http://localhost:5000/cars");
        const cars = await res.json();

        const newCars = cars
          .filter((c) => c.category === "New Cars")
          .map((c) => c.name);
        const usedCars = cars
          .filter((c) => c.category === "Used Cars")
          .map((c) => c.name);
        const types = [...new Set(cars.map((c) => c.bodyType))].filter(Boolean);
        const brands = [...new Set(cars.map((c) => c.brand))].filter(Boolean);

        setCarData({
          new: newCars,
          used: usedCars,
          type: types,
          brand: brands,
        });
      } catch (err) {
        console.error("Error fetching cars:", err);
      }
    }
    fetchCars();
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-3xl font-bold">Shop BoxCar Your Way</h2>
        <Link to="/cars">
          <div className="flex gap-1.5 font-semibold justify-center items-center">
            <p>View All</p>
            <MdArrowOutward />
          </div>
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-2 text-sm font-medium ${
              activeTab === tab.id
                ? "border-b-2 border-blue-600"
                : "text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Car List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
        {carData[activeTab].length > 0 ? (
          carData[activeTab].map((item) => (
            <Link
              key={item}
              //   to={/cars?${activeTab}=${item}}
              className="text-gray-700 hover:text-blue-600 text-sm"
            >
              {item} Cars
            </Link>
          ))
        ) : (
          <p className="text-gray-500 text-sm col-span-full">No data found.</p>
        )}
      </div>
    </div>
  );
}
