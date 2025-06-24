import React, { useState } from "react";
import "./UnitsConverter.css";

const data = [
  {
    physicalQuantity: "Area",
    units: [
      "Square Kilometre",
      "Square Metre",
      "Square Mile",
      "Square Yard",
      "Square Foot",
      "Square Inch",
      "Hectare",
      "Acre",
    ],
  },
  {
    physicalQuantity: "Data Transfer Rate",
    units: [
      "Bit per second",
      "Kilobit per second",
      "Kilobyte per second",
      "Kibibit per second",
      "Megabit per second",
      "Megabyte per second",
      "Mebibit per second",
      "Gigabit per second",
      "Gigabyte per second",
      "Gibibit per second",
      "Terabit per second",
      "Terabyte per second",
      "Tebibit per second",
    ],
  },
  {
    physicalQuantity: "Digital Storage",
    units: [
      "Bit",
      "Kilobit",
      "Kibibit",
      "Megabit",
      "Mebibit",
      "Gigabit",
      "Gibibit",
      "Terabit",
      "Tebibit",
      "Petabit",
      "Pebibit",
      "Byte",
      "Kilobyte",
      "Kibibyte",
      "Megabyte",
      "Mebibyte",
      "Gigabyte",
      "Gibibyte",
      "Terabyte",
      "Tebibyte",
      "Petabyte",
      "Pebibyte",
    ],
  },
  {
    physicalQuantity: "Energy",
    units: [
      "Joule",
      "Kilojoule",
      "Gram Calorie",
      "Kilocalorie",
      "Watt Hour",
      "Kilowatt Hour",
      "Electronvolt",
      "British Thermal Unit",
      "US therm",
      "Foot-ound",
    ],
  },
  {
    physicalQuantity: "Frequency",
    units: ["Hertz", "Kilohertz", "Megahertz", "Gigahertz"],
  },
  {
    physicalQuantity: "Length",
    units: [
      "Kilometre",
      "Metre",
      "Centimetre",
      "Milimetre",
      "Micrometre",
      "Nanometre",
      "Mile",
      "Yard",
      "Foot",
      "Inch",
      "Nautical Mile",
    ],
  },
  {
    physicalQuantity: "Mass",
    units: [
      "Milligram",
      "Gram",
      "Kilogram",
      "Metric ton",
      "Ounce",
      "Pound",
      "Stone",
      "US ton",
      "Imperial ton",
    ],
  },
  {
    physicalQuantity: "Plane Angle",
    units: ["Arcsecond", "Degree", "Gradian", "Milliradian", "Minute of arc"],
  },
  {
    physicalQuantity: "Pressure",
    units: [
      "Bar",
      "Pascal",
      "Pound per square inch",
      "Standard Atmosphere (atm)",
      "Torr",
    ],
  },
  {
    physicalQuantity: "Speed",
    units: [
      "Metre per second",
      "Foot per second",
      "Kilometre per hour",
      "Knot",
    ],
  },
  {
    physicalQuantity: "Temperature",
    units: ["Kelvin", "Celcius", "Fahrenheit", "Reamur"],
  },
  {
    physicalQuantity: "Time",
    units: [
      "Nanosecond",
      "Microsecond",
      "Milisecond",
      "Second",
      "Minute",
      "Hour",
      "Day",
      "Week",
      "Month",
      "Year",
      "Decade",
      "Century",
    ],
  },
  {
    physicalQuantity: "Volume",
    units: [
      "Cubic Metre",
      "Liter",
      "Milliliter",
      "Cubic Foot",
      "Cubic Inch",
      "Imperial Gallon",
      "Imperial Quart",
      "Imperial pint",
      "Imperial Cup",
      "Imperial Fluid Ounce",
      "Imperial tablespoon",
      "Imperial Teaspoon",
      "US Liquid Gallon",
      "US Liquid Quart",
      "US Liquid pint",
      "US legal Cup",
      "US Fluid Ounce",
      "US tablespoon",
      "US Teaspoon",
    ],
  },
];

const UnitsConverter = () => {
  const [quantityPhysical, setQuantityPhysical] = useState("Length");
  const [inputValue, setInputValue] = useState("");
  const [inputUnit, setInputUnit] = useState("");
  const [outputUnit, setOutputUnit] = useState("");

  const selectedData = data.find(
    (item) => item.physicalQuantity === quantityPhysical
  );
  const units = selectedData ? selectedData.units : [];

  return (
    <div className="wrap-converter">
      <h2 className="title-units-converter">Units Converter</h2>
      <div className="container-converter">
        <div className="converter-card">
          <select
            className="quantity-selected"
            value={quantityPhysical}
            onChange={(e) => {
              setQuantityPhysical(e.target.value);
              setInputUnit("");
              setOutputUnit("");
            }}
          >
            {data.map((item, index) => (
              <option key={index} value={item.physicalQuantity}>
                {item.physicalQuantity}
              </option>
            ))}
          </select>
          <div className="form-row">
            <div className="form-column1">
              <input
                type="number"
                className="input1"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <select
                className="units-input"
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
            <div className="equal-sign">=</div>
            <div className="form-column2">
              <input type="number" className="input2" readOnly />
              <select
                className="units-output"
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
          <div className="formula-box">
            <span className="label">Formula</span>
            <span className="formula-text">
              {/* ({celsius}°C × 9/5) + 32 = {fahrenheit.toFixed(2)}°F */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitsConverter;
