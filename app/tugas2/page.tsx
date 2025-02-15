"use client";

import React, { useState } from 'react';

const Tugas2 = () => {
  const [count, setCount] = useState(1);

  const handleMultiplyByTwo = () => {
    setCount(count * 2);
  };

  const handleAddTwo = () => {
    setCount(count + 2);
  };

  const handleReset = () => {
    setCount(1);
  };

  const handleSubtractTwo = () => {
    setCount(count - 2);
  };

  return (
    <div className="flex flex-wrap h-screen">
      {/* Section for x2 */}
      <div
        className="w-1/2 h-1/2 bg-green-500 flex items-center justify-center text-2xl font-semibold text-white cursor-pointer"
        onMouseEnter={handleMultiplyByTwo}
      >
        x 2
      </div>

      {/* Section for +2 */}
      <div
        className="w-1/2 h-1/2 bg-yellow-400 flex items-center justify-center text-2xl font-semibold cursor-pointer"
        onMouseEnter={handleAddTwo}
      >
        + 2
      </div>

      {/* Section for Reset */}
      <div
        className="w-1/2 h-1/2 bg-blue-500 flex items-center justify-center text-2xl font-semibold text-white cursor-pointer"
        onMouseEnter={handleReset}
      >
        Reset
      </div>

      {/* Section for -2 */}
      <div
        className="w-1/2 h-1/2 bg-red-500 flex items-center justify-center text-2xl font-semibold text-white cursor-pointer"
        onMouseEnter={handleSubtractTwo}
      >
        - 2
      </div>

      {/* Counter display */}
      <div
        className="absolute top-5 left-5 w-20 h-20 rounded-full bg-white flex items-center justify-center text-4xl font-bold text-blue-500"
      >
        {count}
      </div>
    </div>
  );
};

export default Tugas2;
