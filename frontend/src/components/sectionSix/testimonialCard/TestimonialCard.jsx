import React from "react";

const TestimonialCard = ({ quote, name, role, initial, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <p className="text-gray-500 text-lg italic">“{quote}”</p>
      <div className="flex items-center mt-4">
        <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold mr-3">
          {initial}
        </div>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-gray-500">{role}</div>
        </div>
      </div>
      <div className="mt-2 text-yellow-400">
        {"★".repeat(rating)}
        {"☆".repeat(5 - rating)}
      </div>
    </div>
  );
};

export default TestimonialCard;
