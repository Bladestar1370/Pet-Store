// CartContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css";  // Import Toastify CSS

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );
  const [wishlist, setWishlist] = useState(
    () => JSON.parse(localStorage.getItem("wishlist")) || []
  );

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = wishlist.length;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addItemToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        const updatedCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
        toast.success(`${product.name} added to cart!`, { autoClose: 2000 });
        return updatedCart;
      }
      toast.success(`${product.name} added to cart!`, { autoClose: 2000 });
      return [...prevCart, { ...product, quantity: product.quantity || 1 }];
    });
  };

  const addItemToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.some((item) => item.id === product.id)) {
        toast.info(`${product.name} is already in your wishlist!`, { autoClose: 2000 });
        return prevWishlist;
      }
      toast.success(`${product.name} added to wishlist!`, { autoClose: 2000 });
      return [...prevWishlist, product];
    });
  };

  const value = {
    cart,
    wishlist,
    cartCount,
    wishlistCount,
    addItemToCart,
    addItemToWishlist,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);





// // CartContext.jsx
// import React, { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartCount, setCartCount] = useState(0);
//   const [wishlistCount, setWishlistCount] = useState(0);

//   const addItemToCart = (id) => {
//     setCartCount((prev) => prev + 1);
//     console.log("Cart count updated:", cartCount + 1);
//   };

//   const addItemToWishlist = (id) => {
//     setWishlistCount((prev) => prev + 1);
//     console.log("Wishlist count updated:", wishlistCount + 1);
//   };

//   const value = {
//     cartCount,
//     wishlistCount,
//     addItemToCart,
//     addItemToWishlist,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };

// export const useCart = () => useContext(CartContext);
