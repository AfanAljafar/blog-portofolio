import React from "react";
import "./TemperatureConverter.css";

const TemperatureConverter = () => {
  return (
    <div>
      <h2 className="title-temperature-converter">TemperatureConverter</h2>
      <label>Temperature 1</label>
      <input type="number" />
      <label>Temperature 2</label>
      <input type="number" />
    </div>
  );
};

export default TemperatureConverter;
