// ProductDetails.js
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import allProducts from "../../Components/Assets/all_products.js";
import { useCart } from "../../Components/CartContext/CartContext.jsx";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === Number(id)); // Ensure it's a number
  const { addItemToCart, addItemToWishlist, cart, wishlist } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="not-found">
        Product not found. <Link to="/">Go back to Home</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    const itemInCart = cart.find((item) => item.id === product.id);
    if (!itemInCart) {
      addItemToCart({ ...product, quantity });
    } else {
    }
  };

  const handleAddToWishlist = () => {
    const itemInWishlist = wishlist.find((item) => item.id === product.id);
    if (!itemInWishlist) {
      addItemToWishlist(product);
    } else {
    }
  };

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="category">Category: {product.category}</p>
        <div className="prices">
          <span className="new-price">${product.new_price.toFixed(2)}</span>
          {product.old_price && (
            <span className="old-price">${product.old_price.toFixed(2)}</span>
          )}
        </div>
        <div className="quantity-selector">
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, parseInt(e.target.value) || 1)) // Ensures minimum quantity is 1
            }
            min="1"
          />
        </div>
        <p className="description">
          {product.description || "A high-quality product for your pets."}
        </p>
        <div className="product-actions">
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="add-to-wishlist-btn" onClick={handleAddToWishlist}>
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;









// import React, { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import allProducts from "../../Components/Assets/all_products.js";
// import "./ProductDetails.css";
// import { useCart } from "../../Components/CartContext/CartContext.jsx";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const product = allProducts.find((p) => p.id === parseInt(id));
//   const { addItemToCart, addItemToWishlist } = useCart();
//   const [quantity, setQuantity] = useState(1);

//   if (!product) {
//     return (
//       <div className="not-found">
//         Product not found. <Link to="/">Go back to Home</Link>
//       </div>
//     );
//   }

//   const handleAddToCart = () => {
//     addItemToCart({ ...product, quantity });
//     alert(`${quantity} ${product.name}(s) added to cart!`);
//   };

//   const handleAddToWishlist = () => {
//     addItemToWishlist(product);
//     alert(`${product.name} added to wishlist!`);
//   };

//   return (
//     <div className="product-details">
//       <div className="product-image">
//         <img src={product.image} alt={product.name} />
//       </div>
//       <div className="product-info">
//         <h2>{product.name}</h2>
//         <p className="category">Category: {product.category}</p>
//         <div className="prices">
//           <span className="new-price">${product.new_price.toFixed(2)}</span>
//           {product.old_price && (
//             <span className="old-price">${product.old_price.toFixed(2)}</span>
//           )}
//         </div>
//         <div className="quantity-selector">
//           <label>Quantity:</label>
//           <input
//             type="number"
//             value={quantity}
//             onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
//             min="1"
//           />
//         </div>
//         <p className="description">
//           {product.description || "A high-quality product for your pets."}
//         </p>
//         <div className="product-actions">
//           <button className="add-to-cart-btn" onClick={handleAddToCart}>
//             Add to Cart
//           </button>
//           <button className="add-to-wishlist-btn" onClick={handleAddToWishlist}>
//             <i className="fa-regular fa-heart"></i>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;