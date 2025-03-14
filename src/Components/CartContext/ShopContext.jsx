import React, { createContext, useContext, useState, useEffect } from "react";
import allProducts from "../Assets/all_products.js";

export const ShopContext = createContext();

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < allProducts.length; index++) {
    cart[allProducts[index].id] = 0;
  }
  return cart;
};

const getDefaultWishlist = () => {
  let wishlist = {};
  for (let index = 0; index < allProducts.length; index++) {
    wishlist[allProducts[index].id] = false;
  }
  return wishlist;
};

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [wishlistItems, setWishlistItems] = useState(getDefaultWishlist());
  const [all_products, setAllProducts] = useState([]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) - 1 }));
  };

  const addToWishlist = (itemId) => {
    setWishlistItems((prev) => ({ ...prev, [itemId]: true }));
  };

  const removeFromWishlist = (itemId) => {
    setWishlistItems((prev) => ({ ...prev, [itemId]: false }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const getTotalWishlistItems = () => {
    let totalItem = 0;
    for (const item in wishlistItems) {
      if (wishlistItems[item]) {
        totalItem += 1;
      }
    }
    return totalItem;
  };

  useEffect(() => {
    // Assuming allProducts is an array of products
    setAllProducts(allProducts);
  }, []);

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    getTotalWishlistItems,
    all_products,
    cartItems,
    wishlistItems,
    addToCart,
    removeFromCart,
    addToWishlist,
    removeFromWishlist,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export const useCart = () => {
  return useContext(ShopContext);
};

export const useWishlist = () => {
  return useContext(ShopContext);
};