// Item.jsx
import React from "react";
import "./Item.css";

export const Item = (props) => {
  const handleCartClick = (e) => {
    e.preventDefault(); // Prevent any default behavior
    e.stopPropagation(); // Stop event from bubbling up to Link
    props.onAddToCart(props.id);
  };

  const handleWishlistClick = (e) => {
    e.preventDefault(); // Prevent any default behavior
    e.stopPropagation(); // Stop event from bubbling up to Link
    props.onAddToWishlist(props.id);
  };

  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
      <div className="item-buttons">
        <button className="add-to-cart-btn" onClick={handleCartClick}>
          Add to Cart
        </button>
        <button className="add-to-wishlist-btn" onClick={handleWishlistClick}>
          Add to Wishlist
        </button>
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
