// components/RatingInput.js
import { Star } from "lucide-react";

const RatingInput = ({ value, onChange }) => {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          type="button"
          key={star}
          onClick={() => onChange(star)}
          className={`focus:outline-none hover:scale-110 transition-transform`}
        >
          <Star
            size={24}
            fill={star <= value ? "#facc15" : "none"} // kuning kalau aktif
            stroke="#facc15"
          />
        </button>
      ))}
    </div>
  );
};

export default RatingInput;
