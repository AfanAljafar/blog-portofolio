import { useState, useCallback } from "react";
import CardProduct from "./cardProduct/CardProduct";

const products = [
  { id: "baju", name: "Baju", price: "Rp 80.000", image: "/baju.jpg" },
  { id: "celana", name: "Celana", price: "Rp 70.000", image: "/celana.jpg" },
  { id: "topi", name: "Topi", price: "Rp 50.000", image: "/topi.jpg" },
];

const OnlineShop = () => {
  const [cart, setCart] = useState({});

  const handleQuantityChange = useCallback((productId, quantity) => {
    setCart((prev) => ({
      ...prev,
      [productId]: quantity,
    }));
  }, []);

  const totalItems = Object.values(cart).reduce((acc, qty) => acc + qty, 0);

  return (
    <div className="w-full min-h-screen bg-gray-100 p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-sky-900">Online Shop</h2>
        <div className="text-lg font-medium text-sky-800">
          🛒 <span className="font-bold">{totalItems}</span>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <CardProduct
            key={product.id}
            image={product.image}
            productName={product.name}
            productPrice={product.price}
            onQuantityChange={(qty) => handleQuantityChange(product.id, qty)}
          />
        ))}
      </div>
    </div>
  );
};

export default OnlineShop;
