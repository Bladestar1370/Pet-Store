import React from 'react';
import { Navbar } from '../Components/Navbar/Navbar'; // Import Navbar
import { Footer } from '../Components/Footer/Footer'; // Import Footer
import { Outlet } from 'react-router-dom'; // This renders child route components

export const MainLayout = ({ cartCount, addItemToCart }) => { // Accept cartCount and addItemToCart as props
  return (
    <div>
      <Navbar cartCount={cartCount} addItemToCart={addItemToCart} /> {/* Pass cartCount and addItemToCart */}
      <main>
        <Outlet /> {/* The content of the nested route will be displayed here */}
      </main>
      <Footer />
    </div>
  );
};
