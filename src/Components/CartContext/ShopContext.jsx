import React, { createContext, useContext, useState, useEffect } from "react";
import allProducts from "../Assets/all_products.js";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [all_products, setAllProducts] = useState([]);

  useEffect(() => {
    // Assuming allProducts is an array of products
    setAllProducts(allProducts);
  }, []);

  const addItemToCart = (product) => {
    // Implement add to cart functionality
  };

  const addItemToWishlist = (product) => {
    // Implement add to wishlist functionality
  };

  return (
    <ShopContext.Provider value={{ all_products, addItemToCart, addItemToWishlist }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useCart = () => {
  return useContext(ShopContext);
};