import React from "react";
import Brands from "./Brands";
import FairPrice from "./FairPrice";
import CompanyStats from "./CompanyStats";
import WhyChooseUs from "./WhyChooseUs";
import AllVehicles from "./Vehicles/AllVehicles";
import TestimonialSlider from "./TestimonialSlider";
import BoxCar from "./Vehicles/BoxCar";
import CarOptionCards from "./Vehicles/CarOptionCard";

const HomeContents = () => {
  return (
    <div className="bg-[#F9FBFC] text-black w-full shadow-lg rounded-t-3xl md:rounded-t-[80px] md:-mt-16 relative z-10">
      <Brands></Brands>
      <AllVehicles></AllVehicles>
      <FairPrice></FairPrice>
      <CompanyStats></CompanyStats>
      <WhyChooseUs></WhyChooseUs>
      <TestimonialSlider></TestimonialSlider>
      <BoxCar></BoxCar>
      <CarOptionCards></CarOptionCards>
    </div>
  );
};

export default HomeContents;
