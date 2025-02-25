import React, { useState } from 'react';  // Import the useState hook
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Slider } from './Components/Slider/Slider';
import {Category} from './Components/Category/Category';

function App() {
  // Create the cartCount state in the parent component (App)
  const [cartCount, setCartCount] = useState(0);

  // A function to simulate adding items to the cart (you can adjust this later)
  const addItemToCart = () => {
    setCartCount(cartCount + 1);  // Increase the cart count
  };

  return (
    <div>
      <Navbar cartCount={cartCount} />                                      {/* Pass the cartCount as a prop to Navbar */}
      <Slider />
      <Category />
    {/*<button onClick={addItemToCart}>Add Item to Cart</button>   */ }           {/* Example button to simulate adding items to the cart */}
    </div>
  );
}

export default App;












// import './App.css'
// import { Navbar } from './Components/Navbar/Navbar'

// function App() {
//   return (
//       <div>
//         <Navbar/>
//       </div>
//   )
// }

// export default App
