import React, { useState } from "react";
import "./TemperatureConverter.css";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState(0);
  const fahrenheit = (celsius * 9) / 5 + 32;

  return (
    <div className="converter-card">
      <select className="dropdown full-width" disabled>
        <option>Temperature</option>
      </select>

      <div className="row">
        <div className="input-box">
          <input
            type="number"
            value={celsius}
            onChange={(e) => setCelsius(parseFloat(e.target.value) || 0)}
            className="input-temp"
          />
          <select className="dropdown">
            <option>Degree Celsius</option>
          </select>
        </div>

        <div className="equal-sign">=</div>

        <div className="input-box">
          <div className="result-temp">{fahrenheit.toFixed(2)}</div>
          <select className="dropdown">
            <option>Fahrenheit</option>
          </select>
        </div>
      </div>

      <div className="formula-box">
        <span className="label">Formula</span>
        <span className="formula-text">
          ({celsius}°C × 9/5) + 32 = {fahrenheit.toFixed(2)}°F
        </span>
      </div>
    </div>
  );
};

export default TemperatureConverter;
