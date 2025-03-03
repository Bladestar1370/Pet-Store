// Item.jsx
import React from "react";
import "./Item.css";
import { useCart } from "../CartContext/CartContext"; // Import the context hook

export const Item = (props) => {
  const { addItemToCart, addItemToWishlist } = useCart(); // Access both functions from context

  const handleCartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItemToCart(props.id);
  };

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItemToWishlist(props.id);
  };

  return (
    <div className="item">
      <div className="item-content">
        <img src={props.image} alt={props.name} />
        <div className="item-details">
          <h3>{props.name}</h3>
          <p className="item-description">{props.description}</p>
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

// import React from 'react'
// import './Item.css'
// export const Item = (props) => {
//   return (
//     <div className='item'>
//         <img src={props.image} alt="" />
//         <p>{props.name}</p>
//         <div className="item-prices">
//             <div className="item-price-new">
//                 ${props.new_price}
//             </div>
//             <div className="item-price-old">
//                 ${props.old_price}
//             </div>
//         </div>
//     </div>
//   )
// }
// export default Item;
