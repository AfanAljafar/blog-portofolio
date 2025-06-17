import "./Footer.css";

const Footer = ({ credit }) => {
  return (
    <div className="footer">
      <p className="credit">{credit}</p>
    </div>
  );
};
Footer.displayName = "Footer";

export default Footer;
