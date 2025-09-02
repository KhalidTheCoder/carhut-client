import React from "react";

const CompanyStats = () => {
  const stats = [
    { number: "836M", label: "CARS FOR SALE" },
    { number: "738M", label: "DEALER REVIEWS" },
    { number: "100M", label: "VISITORS PER DAY" },
    { number: "238M", label: "VERIFIED DEALERS" },
  ];

  return (
    <div className="text-black w-full max-w-7xl mx-auto p-6 md:p-12 mt-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-2">
              {stat.number}
            </h3>
            <p className="text-gray-600 text-sm font-medium uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyStats;
