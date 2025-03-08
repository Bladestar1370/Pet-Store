import React from "react";
import "./Item.css";
import { useCart } from "../CartContext/ShopContext"; // Import the context hook

export const Item = (props) => {
  const { addItemToCart, addItemToWishlist } = useCart(); // Access both functions from context

  const handleCartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItemToCart(props); // Pass the ENTIRE product object (props)
  };

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItemToWishlist(props); // Pass the ENTIRE product object
  };

  return (
    <div className="item">
      <div className="item-content">
        <img src={props.image} alt={props.name} />
        <div className="item-details">
          <h3>{props.name}</h3>
          <p className="item-description">
            {props.category || "No category available"}
          </p>
          <div className="item-prices">
            <div className="item-price">${props.new_price}</div>
          </div>
          <div className="item-buttons">
            <button className="add-to-cart-btn" onClick={handleCartClick}>
              Add to Cart
            </button>
            <button
              className="add-to-wishlist-btn"
              onClick={handleWishlistClick}
            >
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
