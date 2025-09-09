import { MdArrowOutward } from "react-icons/md";

const CarOptionCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-6">
      {/* Card 1 */}
      <div className="bg-blue-50 rounded-2xl w-full lg:w-[685px] h-auto lg:h-[393.72px] p-6 sm:p-10 lg:p-[80px] flex flex-col relative">
        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900 mb-4">
            Are You Looking <br /> For a Car ?
          </h2>
          <p className="text-gray-600 mb-6 text-justify text-sm sm:text-base">
            We are committed to providing our customers with
            <br />
            exceptional service.
          </p>
          <button className="inline-flex items-center w-[140px] sm:w-[158.94px] h-[50px] sm:h-[59.99px] gap-2 bg-blue-600 text-white px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-700 transition">
            Get Started
            <MdArrowOutward className="w-4 h-4" />
          </button>
        </div>

        {/* Absolute image */}
        <div className="absolute bottom-6 right-6 sm:right-8">
          <img
            src="https://i.ibb.co.com/zTS6nCHx/electric-car-svg.png"
            alt="Looking for car"
            className="w-[90px] sm:w-[110px] h-[90px] sm:h-[110px]"
          />
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-pink-50 rounded-2xl w-full lg:w-[685px] h-auto lg:h-[393.72px] p-6 sm:p-10 lg:p-[80px] flex flex-col relative">
        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900 mb-4">
            Do You Want to <br /> Sell a Car ?
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            We are committed to providing our customers with <br /> exceptional
            service.
          </p>
          <button className="inline-flex items-center w-[140px] sm:w-[158.94px] h-[50px] sm:h-[59.99px] gap-2 bg-gray-900 text-white px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-800 transition">
            Get Started
            <MdArrowOutward className="w-4 h-4" />
          </button>
        </div>

        {/* Absolute image */}
        <div className="absolute bottom-6 right-6 sm:right-8">
          <img
            src="https://i.ibb.co.com/svtLdrKy/electric-car2-svg.png"
            alt="Sell car"
            className="w-[90px] sm:w-[110px] h-[90px] sm:h-[110px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CarOptionCards;
