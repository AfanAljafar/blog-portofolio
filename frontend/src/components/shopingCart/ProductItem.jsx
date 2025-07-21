import React, { useCallback } from "react";
import CardProduct from "./cardProduct/CardProduct";

const ProductItem = ({ product, onQuantityChange }) => {
  const handleQtyChange = useCallback(
    (qty) => onQuantityChange(product.id, qty),
    [onQuantityChange, product.id]
  );

  return (
    <CardProduct
      image={product.image}
      productName={product.name}
      productPrice={product.price}
      onQuantityChange={handleQtyChange}
    />
  );
};

export default React.memo(ProductItem);
