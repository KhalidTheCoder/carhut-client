import React from "react";
import Brands from "./Brands";
import FairPrice from "./FairPrice";

const HomeContents = () => {
  return (
    <div className="bg-[#F9FBFC] text-black w-full shadow-lg rounded-t-3xl md:rounded-t-[80px] p-6 md:p-12 md:-mt-16 relative z-10">
      <Brands></Brands>
      <FairPrice></FairPrice>
    </div>
  );
};

export default HomeContents;
