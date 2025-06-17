import "./Card.css";
const Card = ({ image, title, content }) => {
  return (
    <div className="warp-card">
      {/* <h3>{title}</h3>
      <p>{content}</p> */}
      <div className="cover-project">
        <img src={image} alt={title} className="project-image" />
      </div>
      <h3>{title}</h3>
      <div>{content}</div>
    </div>
  );
};
Card.displayName = "Card";

export default Card;
