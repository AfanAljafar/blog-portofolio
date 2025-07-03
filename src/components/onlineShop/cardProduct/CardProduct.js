import React, { useEffect, useState } from "react";
import "./CardProduct.css";

const CardProduct = ({
  image,
  productName,
  productPrice,
  onQuantityChange,
}) => {
  const [quantityOrder, setQuantityOrder] = useState(0);

  useEffect(() => {
    onQuantityChange?.(quantityOrder);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantityOrder]); // kirim update hanya jika quantity berubah

  const handleIncrease = () => {
    setQuantityOrder((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantityOrder((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleInputChange = (e) => {
    const val = parseInt(e.target.value) || 0;
    setQuantityOrder(val);
  };

  return (
    <div className="warp-product-card">
      <div className="cover-product">
        <img src={image} alt={productName} className="product-image" />
      </div>
      <h3 className="product-name">{productName}</h3>
      <div className="product-price">{productPrice}</div>
      <div className="quantity-order">
        <button className="button-increase" onClick={handleIncrease}>
          +
        </button>
        <input
          className="display-quantity-order"
          value={quantityOrder}
          onChange={handleInputChange}
        />
        <button className="button-decrease" onClick={handleDecrease}>
          -
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
