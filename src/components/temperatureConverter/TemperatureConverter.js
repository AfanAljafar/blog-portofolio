import React, { useState } from "react";
import "./TemperatureConverter.css";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState(0);
  const fahrenheit = (celsius * 9) / 5 + 32;

  return (
    <div className="wrap-converter">
      <h2 className="title-temperature-converter">TemperatureConverter</h2>
      <div className="container-converter">
        <div className="converter-card">
          <select className="dropdown full-width">
            <option>Temperature</option>
            <option>Length</option>
            <option>Volume</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TemperatureConverter;
