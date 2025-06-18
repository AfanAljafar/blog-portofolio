import { useNavigate } from "react-router-dom";
import "./Card.css";
const Card = ({ image, title, content, path }) => {
  const navigate = useNavigate();

  return (
    <div
      className="warp-card"
      style={{ cursor: "pointer" }}
      onClick={() => navigate(path)}
    >
      <div className="cover-project">
        <img src={image} alt={title} className="project-image" />
      </div>
      <h3 className="title-project">{title}</h3>
      <div className="desc-content">{content}</div>
    </div>
  );
};
Card.displayName = "Card";

export default Card;
