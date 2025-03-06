//main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Import App component
import { ToastContainer } from "react-toastify";
import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Only render App component here */}
    <ToastContainer /> 
  </React.StrictMode>
);
