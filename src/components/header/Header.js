import ArrowDoubleDown from "../arrowDoubleDown/ArrowDoubleDown";
import "./Header.css";

const Header = ({ onScrollTo2, onScrollTo3, onScrollTo4 }) => {
  return (
    <div className="header-sect">
      <h1 className="header-title">ynoir space</h1>
      <ul className="list-header">
        <li onClick={onScrollTo2}>project.</li>
        <li onClick={onScrollTo3}>about.</li>
        <li onClick={onScrollTo4}>contact.</li>
      </ul>
      <p className="summary">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <div>
        <button className="btn-arrow" onClick={onScrollTo2}>
          {/* <img
            src="/arrow-down-white.svg"
            alt="arrow-down"
            className="arrow-nav"
          /> */}
          <ArrowDoubleDown />
        </button>
      </div>
    </div>
  );
};

Header.displayName = "Header";

export default Header;
