// Popular.jsx
import React, { useState } from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";
import { useCart } from "../CartContext/CartContext";

export const Popular = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const { addItemToCart, addItemToWishlist } = useCart();

  const handleAddToCart = (id) => {
    console.log("Adding to cart, ID:", id);
    addItemToCart();
  };

  const handleAddToWishlist = (id) => {
    console.log("Adding to wishlist, ID:", id);
    setWishlistItems([...wishlistItems, id]);
    addItemToWishlist();
  };

  return (
    <div className="popular">
      <h1>Popular Products</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;

// import React from 'react'
// import './Popular.css'
// import data_product from '../Assets/data'
// import Item from '../Item/Item'
// export const Popular = () => {
//   return (
//     <div className='popular'>
//         <h1>Popular Products</h1>
//         <hr />
//         <div className="popular-item">
//             {data_product.map((item,i)=>{
//                 return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
//             })}
//         </div>
//     </div>
//   )
// }
