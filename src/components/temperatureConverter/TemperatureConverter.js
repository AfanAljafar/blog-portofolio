import "./TemperatureConverter.css";

const UnitsConverter = () => {
  // const [celsius, setCelsius] = useState(0);
  // const fahrenheit = (celsius * 9) / 5 + 32;

  return (
    <div className="wrap-converter">
      <h2 className="title-units-converter">Units Converter</h2>
      <div className="container-converter">
        <div className="converter-card">
          <select className="quantity-selected">
            <option>Temperature</option>
            <option>Length</option>
            <option>Volume</option>
          </select>
          <div className="form-row">
            <div className="form-column1">
              <input type="number" />
              <select className="units-input">
                <option>Kelvin</option>
                <option>celcius</option>
                <option>Fahrenheit</option>
                <option>Reamur</option>
              </select>
            </div>
            <div className="equal-sign">=</div>
            <div className="form-column2">
              <input type="number" />
              <select className="units-output">
                <option>Kelvin</option>
                <option>celcius</option>
                <option>Fahrenheit</option>
                <option>Reamur</option>
              </select>
            </div>
          </div>
          <div className="formula-box">
            <span className="label">Formula Temperature</span>
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
