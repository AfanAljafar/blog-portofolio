import React, { useState } from "react";
import "./UnitsConverter.css";
import data from "./UnitsData";

const UnitsConverter = () => {
  const [quantityPhysical, setQuantityPhysical] = useState("Length");

  const [inputUnit, setInputUnit] = useState("");
  const [outputUnit, setOutputUnit] = useState("");

  const handleChange = (e) => {
    setQuantityPhysical(e.target.value);
  };

  const selectedData = data.find(
    (item) => item.physicalQuantity === quantityPhysical
  );
  const units = selectedData ? selectedData.units : [];

  const handleChangeInputUnit = (e) => {
    setInputUnit(e.target.value);
  };

  const handleChangeOutputUnit = (e) => {
    setOutputUnit(e.target.value);
  };

  return (
    <div className="wrap-converter">
      <h2 className="title-units-converter">Units Converter</h2>
      <div className="container-converter">
        <div className="converter-card">
          <select
            className="quantity-selected"
            value={quantityPhysical}
            onChange={handleChange}
            // onChange={(e) => {
            //   setQuantityPhysical(e.target.value);
            //   setInputUnit("");
            //   setOutputUnit("");
            // }}
          >
            {data.map((item, index) => (
              <option key={index} value={item.physicalQuantity}>
                {item.physicalQuantity}
              </option>
            ))}
          </select>
          <div className="form-row">
            <div className="form-column1">
              <input type="number" className="input1" />
              <select
                className="units-input"
                value={inputUnit}
                onChange={handleChangeInputUnit}
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
                onChange={handleChangeOutputUnit}
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
