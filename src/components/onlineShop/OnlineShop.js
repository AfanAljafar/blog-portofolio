import { useState, useCallback } from "react";
import CardProduct from "./cardProduct/CardProduct";
import "./OnlineShop.css";

const OnlineShop = () => {
  const [cart, setCart] = useState(0);

  const handleQuantityChange = useCallback((productName, quantity) => {
    setCart((prev) => ({
      ...prev,
      [productName]: quantity,
    }));
  }, []);

  const totalItems = Object.values(cart).reduce((acc, qty) => acc + qty, 0);

  return (
    <div className="olshop">
      <div className="header-olshop">
        <h2 className="title-olshop">Online Shop</h2>
        <div className="cart">
          🛒 :&nbsp;<strong> {totalItems}</strong>
        </div>
      </div>
      <div>
        <CardProduct
          productName="baju"
          productPrice="Rp 80.000"
          onQuantityChange={(qty) => handleQuantityChange("baju", qty)}
        />
        <CardProduct
          productName="celana"
          productPrice="Rp 70.000"
          onQuantityChange={(qty) => handleQuantityChange("celana", qty)}
        />
        <CardProduct
          productName="topi"
          productPrice="Rp 70.000"
          onQuantityChange={(qty) => handleQuantityChange("topi", qty)}
        />
      </div>
    </div>
  );
};

export default OnlineShop;
