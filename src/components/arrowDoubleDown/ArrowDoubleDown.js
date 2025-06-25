import "./ArrowDoubleDown.css";

const ArrowDoubleDown = () => {
  return (
    <div className="arrow-double-down">
      <svg className="arrow white" viewBox="0 0 24 24">
        <path
          d="M5 9l7 7 7-7"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg className="arrow gray" viewBox="0 0 24 24">
        <path
          d="M5 9l7 7 7-7"
          stroke="#B0B0B0"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
ArrowDoubleDown.displayName = "ArrowDoubleDown";

export default ArrowDoubleDown;
