import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router";

const Brands = () => {
  // Brand data with inline SVG logos
  const brands = [
    {
      name: "Audi",
      logo: (
        <img
          src="https://i.ibb.co.com/chy0cwZj/77867001930a7f83335c2e20a7c2b2aa202f7101.jpg"
          alt=""
        />
      ),
    },
    {
      name: "BMW",
      logo: (
        <img
          src="https://i.ibb.co.com/WNdcvgS4/bf4f2015de9eeefd5cce4a73d57992f2bc84735e.jpg"
          alt=""
        />
      ),
    },
    {
      name: "Ford",
      logo: (
        <img
          src="https://i.ibb.co.com/WWPgyLZ7/057dafcdb2ebc38c7a15af8c45656bcf31dd651e.jpg"
          alt=""
        />
      ),
    },
    {
      name: "Mercedes-Benz",
      logo: (
        <img
          src="https://i.ibb.co.com/kgTZ1cJs/9169ee755e42830825dc7da7172ff0d9f468751c.jpg"
          alt=""
        />
      ),
    },
    {
      name: "Peugeot",
      logo: (
        <img
          src="https://i.ibb.co.com/2Yjfbxd8/91bd4e40aa54a3bec35a6c90c8b6f0c9d7d17dfe.jpg"
          alt=""
        />
      ),
    },
    {
      name: "Volkswagen",
      logo: (
        <img
          src="https://i.ibb.co.com/HfG8M44X/05a6e90afa4ddde39f89666584b6d75125072301.jpg"
          alt=""
        />
      ),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between py-12 mb-8">
        <h2 className="text-xl md:text-3xl font-bold">
          Explore Our Premium Brands
        </h2>
        <Link className="font-semibold mt-4 md:mt-0">
          <div className="flex justify-center items-center gap-1.5">
            <p>View All Brands</p>
            <span>
              <MdArrowOutward />
            </span>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-10 justify-items-center px-2 pb-12">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex flex-col bg-white items-center justify-center p-4 rounded-xl border border-[#E9E9E9] transition-transform transform hover:scale-105
             w-full sm:w-40 md:w-52
             aspect-[209/180]"
          >
            {brand.logo}
            <span className="mt-4 text-sm font-medium text-center">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
