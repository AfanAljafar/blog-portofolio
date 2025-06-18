import ArrowDoubleDown from "../arrowDoubleDown/ArrowDoubleDown";
import "./Header.css";

const Header = ({
  onScrollTo2,
  onScrollTo3,
  onScrollTo4,
  link1,
  link2,
  link3,
  logoBrand,
  profileDesc,
}) => {
  return (
    <div className="header-sect">
      <h1 className="header-title">{logoBrand}</h1>
      <ul className="list-header">
        <li onClick={onScrollTo2}>{link1}</li>
        <li onClick={onScrollTo3}>{link2}</li>
        <li onClick={onScrollTo4}>{link3}</li>
      </ul>
      <p className="summary">{profileDesc}</p>
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
