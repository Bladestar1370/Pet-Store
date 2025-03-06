// App.jsx
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./page/Home.jsx";
import { MainLayout } from "./layout/MainLayout.jsx";
import Category from "./Components/Category/Category.jsx";
import CategoryProducts from "./Components/Category/CategoryProducts.jsx";
import ProductDetails from "./page/ProductsDetails/ProductDetails.jsx";
import { CartProvider } from "./Components/CartContext/CartContext.jsx";
import { LoginSignUp } from "./page/Login/LoginSignup.jsx";
import Cart from "./page/Cart/Cart.jsx";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/category/:name" element={<CategoryProducts />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<LoginSignUp />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
