import React, { useState } from "react";
import data from "./UnitsData";

const UnitsConverter = () => {
  const [quantityPhysical, setQuantityPhysical] = useState("Length");
  const [inputUnit, setInputUnit] = useState("Kilometre");
  const [outputUnit, setOutputUnit] = useState("Kilometre");

  const selectedData = data.find(
    (item) => item.physicalQuantity === quantityPhysical
  );
  const units = selectedData ? selectedData.units : [];

  return (
    <div className="w-full h-full flex flex-col p-4">
      <h2 className="text-center text-2xl font-semibold mb-4 text-sky-950">
        Units Converter
      </h2>

      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          {/* select physical quantity */}
          <select
            className="w-full p-2 text-sm mb-6 bg-gray-200 rounded"
            value={quantityPhysical}
            onChange={(e) => setQuantityPhysical(e.target.value)}
          >
            {data.map((item, index) => (
              <option key={index} value={item.physicalQuantity}>
                {item.physicalQuantity}
              </option>
            ))}
          </select>

          {/* input and output block */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* input block */}
            <div className="flex flex-col w-full">
              <input
                type="number"
                className="text-xl border border-gray-300 p-2 rounded-t-md w-full focus:outline-none"
              />
              <select
                className="text-sm bg-gray-200 border border-t-0 border-gray-300 p-2 rounded-b-md w-full focus:outline-none"
                value={inputUnit}
                onChange={(e) => setInputUnit(e.target.value)}
              >
                {units.map((unit, index) => (
                  <option key={index} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>

            {/* equal sign */}
            <div className="text-2xl font-bold text-center">=</div>

            {/* output block */}
            <div className="flex flex-col w-full">
              <input
                type="number"
                readOnly
                className="text-xl border border-gray-300 p-2 rounded-t-md w-full bg-gray-100 focus:outline-none"
              />
              <select
                className="text-sm bg-gray-200 border border-t-0 border-gray-300 p-2 rounded-b-md w-full focus:outline-none"
                value={outputUnit}
                onChange={(e) => setOutputUnit(e.target.value)}
              >
                {units.map((unit, index) => (
                  <option key={index} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* formula display */}
          <div className="bg-gray-100 p-2 mt-6 rounded text-sm">
            <span className="font-semibold">Formula: </span>
            <span className="text-gray-600 italic">
              the formula will be displayed here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitsConverter;
