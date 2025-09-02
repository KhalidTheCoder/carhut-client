import React from "react";
import Brands from "./Brands";
import FairPrice from "./FairPrice";
import CompanyStats from "./CompanyStats";
import WhyChooseUs from "./WhyChooseUs";

const HomeContents = () => {
  return (
    <div className="bg-[#F9FBFC] text-black w-full shadow-lg rounded-t-3xl md:rounded-t-[80px] md:-mt-16 relative z-10">
      <Brands></Brands>
      <FairPrice></FairPrice>
      <CompanyStats></CompanyStats>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default HomeContents;
