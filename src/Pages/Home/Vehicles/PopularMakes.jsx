import React, { useEffect, useState } from "react";
import PopularCar from "../../../Components/PopularCar";

const PopularMakes = () => {
  const [popularCar, setPopularCar] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setPopularCar(data));
  }, []);

  return (
    <div className="flex overflow-x-auto gap-6 pb-4 max-w-7xl mx-auto">
      {popularCar.map((car) => (
        <div key={car._id}>
          <PopularCar car={car} />
        </div>
      ))}
    </div>
  );
};

export default PopularMakes;
