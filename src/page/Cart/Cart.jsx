import React from "react";
import { useCart } from "../../Components/CartContext/CartContext";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <p>
              {item.name} - $
              {item.new_price
                ? item.new_price.toFixed(2)
                : item.price
                ? item.price.toFixed(2)
                : "0.00"}{" "}
              x {item.quantity}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;

