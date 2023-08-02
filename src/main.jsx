import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ShoppingProvider } from "./context/ShoppingProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShoppingProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShoppingProvider>
  </React.StrictMode>
);
