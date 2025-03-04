import React from "react";
import { useParams } from "react-router-dom";
import allProducts from "../Assets/all_products.js"; // Import your data
import "./ProductDetails.css"; // Create this CSS file
import { useCart } from "../CartContext/CartContext.jsx"; // Import useCart hook

const ProductDetails = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found.</div>;
  }

  // Access cart and wishlist functions from context
  const { addItemToCart, addItemToWishlist } = useCart();

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      <p>
        Price: ${product.new_price.toFixed(2)}{" "}
        {product.old_price && (
          <span style={{ textDecoration: "line-through", color: "gray" }}>
            ${product.old_price.toFixed(2)}
          </span>
        )}
      </p>
      {/* Add buttons for cart and wishlist */}
      <div className="product-actions">
        <button
          className="add-to-cart-btn"
          onClick={() => addItemToCart(product.id)}
        >
          Add to Cart
        </button>
        <button
          className="add-to-wishlist-btn"
          onClick={() => addItemToWishlist(product.id)}
        >
          <i className="fa-regular fa-heart"></i>
        </button>
      </div>
      {/* Add more product details here if needed */}
    </div>
  );
};

export default ProductDetails;

// // ProductDetails.js
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import allProducts from '../Assets/all_products.js'; // Import your data
// import './ProductDetails.css'; // Create this CSS file

// const ProductDetails = () => {
//      const { id } = useParams();
//      const product = allProducts.find((p) => p.id === parseInt(id));

//      if (!product) {
//           return <div>Product not found.</div>;
//      }

//      return (
//           <div className="product-details">
//                <img src={product.image} alt={product.name} />
//                <h2>{product.name}</h2>
//                <p>Category: {product.category}</p>
//                <p>
//                     Price: ${product.new_price.toFixed(2)}{' '}
//                     {product.old_price && (
//                          <span style={{ textDecoration: 'line-through', color: 'gray' }}>
//                               ${product.old_price.toFixed(2)}
//                          </span>
//                     )}
//                </p>
//                {/* Add more product details here */}
//           </div>
//      );
// };

// export default ProductDetails;
