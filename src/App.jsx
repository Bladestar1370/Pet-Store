// App.jsx
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./page/Home.jsx";
import { MainLayout } from "./layout/MainLayout.jsx";
import Category from "./Components/Category/Category.jsx";
import CategoryProducts from "./Components/Category/CategoryProducts.jsx";
import ProductDetails from "./Components/ProductsDetails/ProductDetails.jsx";
import { CartProvider } from './Components/CartContext/CartContext.jsx';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const addItemToCart = () => {
    setCartCount(cartCount + 1);
    console.log("Cart count updated:", cartCount + 1); // Debug
  };

  const addItemToWishlist = () => {
    setWishlistCount(wishlistCount + 1);
    console.log("Wishlist count updated:", wishlistCount + 1); // Debug
  };

  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route
          element={
            <MainLayout
              cartCount={cartCount}
              wishlistCount={wishlistCount}
              addItemToCart={addItemToCart}
              addItemToWishlist={addItemToWishlist}
            />
          }
        >
          <Route
            path="/"
            element={
              <Home
                addItemToCart={addItemToCart}
                addItemToWishlist={addItemToWishlist}
              />
            }
          />
          <Route path="/category" element={<Category />} />
          <Route
            path="/category/:name"
            element={
              <CategoryProducts
                addItemToCart={addItemToCart}
                addItemToWishlist={addItemToWishlist}
              />
            }
          />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;

// import React, { useState } from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Home } from './page/Home.jsx'; // Import Home page
// import { MainLayout } from './layout/MainLayout.jsx'; // Import MainLayout
// import Category from './Components/Category/Category.jsx'; // Import other components
// import CategoryProducts from './Components/Category/CategoryProducts.jsx';

// import ProductDetails from './Components/ProductsDetails/ProductDetails.jsx';

// function App() {
//   const [cartCount, setCartCount] = useState(0); // State to manage the cart count

//   // Function to simulate adding items to the cart
//   const addItemToCart = () => {
//     setCartCount(cartCount + 1); // Increment cart count
//   };

//   return (
//     <Router> {/* Only include Router here */}
//       <Routes>
//         {/* MainLayout will persist across the routes */}
//         <Route element={<MainLayout cartCount={cartCount} addItemToCart={addItemToCart} />}>
//           <Route path="/" element={<Home />} /> {/* Home page route */}
//           <Route path="/category" element={<Category />} />
//           <Route path="/category/:name" element={<CategoryProducts />} />
//           <Route path="/product/:id" element={<ProductDetails />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;
