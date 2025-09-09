import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router";

const Brands = () => {
  const brands = [
    {
      name: "Audi",
      logo: "https://i.ibb.co.com/chy0cwZj/77867001930a7f83335c2e20a7c2b2aa202f7101.jpg",
    },
    {
      name: "BMW",
      logo: "https://i.ibb.co.com/WNdcvgS4/bf4f2015de9eeefd5cce4a73d57992f2bc84735e.jpg",
    },
    {
      name: "Ford",
      logo: "https://i.ibb.co.com/WWPgyLZ7/057dafcdb2ebc38c7a15af8c45656bcf31dd651e.jpg",
    },
    {
      name: "Mercedes-Benz",
      logo: "https://i.ibb.co.com/kgTZ1cJs/9169ee755e42830825dc7da7172ff0d9f468751c.jpg",
    },
    {
      name: "Peugeot",
      logo: "https://i.ibb.co.com/2Yjfbxd8/91bd4e40aa54a3bec35a6c90c8b6f0c9d7d17dfe.jpg",
    },
    {
      name: "Volkswagen",
      logo: "https://i.ibb.co.com/HfG8M44X/05a6e90afa4ddde39f89666584b6d75125072301.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between py-10 mb-6">
        <h2 className="text-xl md:text-3xl font-bold  md:text-left">
          Explore Our Premium Brands
        </h2>
        <Link
          to="/brands"
          className="font-semibold flex items-center gap-1.5 hover:text-blue-600 transition"
        >
          <p>View All Brands</p>
          <MdArrowOutward />
        </Link>
      </div>

      {/* Brands Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 pb-12">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-gray-200 transition-transform hover:scale-105 aspect-[209/180] w-full"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-h-20 sm:max-h-24 md:max-h-28 object-contain"
            />
            <span className="mt-3 text-sm sm:text-base font-medium text-center">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
