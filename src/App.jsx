// App.js
import React, { useState } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Slider } from './Components/Slider/Slider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Category from "./Components/Category/Category.jsx";
import CategoryProducts from "./Components/Category/CategoryProducts.jsx"; //Assuming that you also moved the CategoryProducts component.
import ProductDetails from "./Components/ProductsDetails/ProductDetails.jsx"; //Assuming that you also moved the CategoryProducts component.



function App() {
  // Create the cartCount state in the parent component (App)
  const [cartCount, setCartCount] = useState(0);

  // A function to simulate adding items to the cart (you can adjust this later)
  const addItemToCart = () => {
    setCartCount(cartCount + 1);  // Increase the cart count
  };
  return (
    // <Router> {/* Wrap the entire content in Router */}
      <div>
        <Navbar cartCount={cartCount} />
        <Slider />
        <Category />
        <Routes> {/* Routes must be inside Router */}
          <Route path="/" element={<Category />} />
          <Route path="/category/:name" element={<CategoryProducts />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        {/*<button onClick={addItemToCart}>Add Item to Cart</button> */}
      </div>
    // </Router>
    // <div>
    //   <Navbar cartCount={cartCount} />                                      {/* Pass the cartCount as a prop to Navbar */}
    //   <Slider />
    //   <Category />
    //   <Routes>
    //     <Route path="/" element={<Category />} />
    //     <Route path="/category/:name" element={<CategoryProducts />} />
    //     <Route path="/product/:id" element={<ProductDetails />} /> {/* Add product details route */}
    //   </Routes>
    //   {/*<button onClick={addItemToCart}>Add Item to Cart</button>   */}           {/* Example button to simulate adding items to the cart */}
    // </div>


  );
}

export default App;