import React, { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "ALI TURAN",
    location: "Designer",
    rating: 5,
    image: "https://i.ibb.co.com/ns0mHRZd/photo-1499996860823-5214fcc65f8f.jpg",
    review:
      "I'd suggest Macklin Motors Nissan Glasgow South to a friend because I had great service from my salesman Patrick and all of the team.",
  },
  {
    id: 2,
    name: "JANE DOE",
    location: "Developer",
    rating: 5,
    image: "https://i.ibb.co.com/MxPqzxWc/photo-1480455624313-e29b44bbfde1.jpg",
    review:
      "Fantastic experience from start to finish. The team was incredibly helpful and made the entire process seamless. Highly recommend!",
  },
  {
    id: 3,
    name: "JOHN SMITH",
    location: "Product Manager",
    rating: 4,
    image: "https://i.ibb.co.com/ycSsHtB5/pexels-photo-1300402.webp",
    review:
      "Very happy with my new car. The staff were knowledgeable and answered all my questions. Only reason for 4 stars is that the collection was slightly delayed.",
  },
];

const TestimonialSlider = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const currentReview = reviews[currentReviewIndex];

  return (
    <div className="py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto flex justify-between items-end mb-12">
          <h2 className="text-4xl font-semibold text-gray-900">
            What our customers say
          </h2>
          <p className="text-gray-500 text-sm text-right">
            Rated 4.7 / 5 (based on 38,370 reviews) Building trust 4.6 / 5 star
            reviews
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div className="rounded-lg overflow-hidden flex flex-col md:flex-row justify-center md:justify-between items-center max-w-7xl py-8 mx-auto gap-6">
            {/* Image Column */}
            <div className="">
              <img
                src={currentReview.image}
                alt={currentReview.name}
                className="w-[448px] h-[470px] object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Review Content Column */}
            <div className="w-full md:w-1/2 p-4 md:pl-8">
              {/* Star Rating */}
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < currentReview.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.961a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.362 2.445a1 1 0 00-.364 1.118l1.286 3.961c.3.921-.755 1.688-1.54 1.118l-3.362-2.445a1 1 0 00-1.176 0l-3.362 2.445c-.785.57-1.84-.197-1.54-1.118l1.286-3.961a1 1 0 00-.364-1.118L2.929 9.388c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.961z" />
                  </svg>
                ))}

                {/* Numeric rating */}
                <span className="ml-2 text-white bg-amber-300 rounded-2xl px-2 font-medium">
                  {currentReview.rating.toFixed(1)}
                </span>
              </div>

              {/* Reviewer Info */}
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {currentReview.name}
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                {currentReview.location}
              </p>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed italic">
                "{currentReview.review}"
              </p>
            </div>
          </div>

          {/* Previous Arrow */}
          <div
            className="absolute bg-white rounded-full shadow-2xl top-1/2 left-8 transform -translate-y-1/2 cursor-pointer z-10 p-2"
            onClick={prevReview}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-400 hover:text-gray-600 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>

          {/* Next Arrow */}
          <div
            className="absolute top-1/2 bg-white rounded-full shadow-2xl right-8 transform -translate-y-1/2 cursor-pointer z-10 p-2"
            onClick={nextReview}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-400 hover:text-gray-600 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
