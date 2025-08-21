import { useNavigate } from "react-router-dom";

const Card = ({ image, title, content, path }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(path)}
      className="w-full sm:w-[300px] md:w-[350px] p-5 bg-transparent cursor-pointer transition-transform duration-200 hover:scale-105"
    >
      <div className="w-full h-[140px] bg-white overflow-hidden rounded shadow-md">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-center text-lg font-semibold text-white mt-4">
        {title}
      </h3>
      <p className="text-center text-sm text-gray-300 mt-1">{content}</p>
    </div>
  );
};

Card.displayName = "Card";

export default Card;
