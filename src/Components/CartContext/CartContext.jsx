// CartContext.jsx
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const addItemToCart = () => {
    setCartCount((prev) => prev + 1);
    console.log('Cart count updated:', cartCount + 1);
  };

  const addItemToWishlist = () => {
    setWishlistCount((prev) => prev + 1);
    console.log('Wishlist count updated:', wishlistCount + 1);
  };

  return (
    <CartContext.Provider value={{ cartCount, wishlistCount, addItemToCart, addItemToWishlist }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);