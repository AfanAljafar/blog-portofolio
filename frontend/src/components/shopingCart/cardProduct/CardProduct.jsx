import React, { useEffect, useState } from "react";

const CardProduct = ({
  image,
  productName,
  productPrice,
  onQuantityChange,
}) => {
  const [quantityOrder, setQuantityOrder] = useState(0);

  useEffect(() => {
    onQuantityChange?.(quantityOrder);
  }, [quantityOrder, onQuantityChange]);

  const handleIncrease = () => {
    setQuantityOrder((prev) => (isNaN(prev) ? 1 : prev + 1));
  };

  const handleDecrease = () => {
    setQuantityOrder((prev) => {
      if (isNaN(prev) || prev <= 0) return 0;
      return prev - 1;
    });
  };

  //function for event input
  const handleInputChange = (e) => {
    let val = e.target.value;

    if (val === "") {
      setQuantityOrder(0);
      return;
    }

    const num = parseInt(val, 10);

    // Prevent negative or NaN values
    if (isNaN(num) || num < 0) {
      return;
    }

    setQuantityOrder(num);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
      <div className="w-full h-40 overflow-hidden rounded">
        <img
          src={image}
          alt={productName}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-800">
        {productName}
      </h3>
      <div className="text-sky-700 font-medium">{productPrice}</div>
      <div className="flex items-center gap-2 mt-4">
        <button
          onClick={handleDecrease}
          className="px-3 py-1 bg-sky-500 text-white rounded hover:bg-sky-600"
        >
          -
        </button>
        <input
          type="number"
          className="w-14 text-center border rounded py-1 px-2"
          value={quantityOrder === 0 ? "" : quantityOrder}
          onChange={handleInputChange}
          placeholder="0"
          min={0}
        />

        <button
          onClick={handleIncrease}
          className=" px-3 py-1 bg-sky-500 text-white rounded hover:bg-sky-600"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
