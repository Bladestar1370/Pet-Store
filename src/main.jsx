import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // 🔹 Added React Router
import "./index.css";
import App from "./App.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>   {/* 🔹 Wrapped App inside BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
