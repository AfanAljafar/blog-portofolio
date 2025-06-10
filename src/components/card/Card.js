import "./Card.css";
const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};
Card.displayName = "Card";

export default Card;
