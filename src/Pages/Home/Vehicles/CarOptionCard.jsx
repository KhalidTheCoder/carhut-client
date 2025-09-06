import { MdArrowOutward } from "react-icons/md";

const CarOptionCards = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 grid md:grid-cols-2 gap-6">
      {/* Card 1 */}
      <div className="bg-blue-50 rounded-2xl p-8 flex flex-col justify-between shadow-sm">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Are You Looking <br /> For a Car ?
          </h2>
          <p className="text-gray-600 mb-6 text-justify">
            We are committed to providing our customers with
            <br />
            exceptional service.
          </p>
          <button className="inline-flex items-center w-[158.94px] h-[59.99px] gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
            Get Started
            <MdArrowOutward className="w-4 h-4" />
          </button>
        </div>
        <div className="mt-6 flex justify-end">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7439/7439595.png"
            alt="Looking for car"
            className="w-16 h-16"
          />
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-pink-50 rounded-2xl p-8 flex flex-col justify-between shadow-sm">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Do You Want to <br /> Sell a Car ?
          </h2>
          <p className="text-gray-600 mb-6">
            We are committed to providing our customers with <br /> exceptional
            service.
          </p>
          <button className="inline-flex w-[158.94px] h-[59.99px] items-center gap-2 bg-gray-900 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition">
            Get Started
            <MdArrowOutward className="w-4 h-4" />
          </button>
        </div>
        <div className="mt-6 flex justify-end">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7439/7439613.png"
            alt="Sell car"
            className="w-16 h-16"
          />
        </div>
      </div>
    </div>
  );
};

export default CarOptionCards;
