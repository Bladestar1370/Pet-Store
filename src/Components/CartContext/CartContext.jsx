// CartContext.jsx
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const addItemToCart = (id) => {
    setCartCount((prev) => prev + 1);
    console.log("Cart count updated:", cartCount + 1);
  };

  const addItemToWishlist = (id) => {
    setWishlistCount((prev) => prev + 1);
    console.log("Wishlist count updated:", wishlistCount + 1);
  };

  const value = {
    cartCount,
    wishlistCount,
    addItemToCart,
    addItemToWishlist,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);