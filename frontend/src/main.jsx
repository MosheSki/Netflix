import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";
import { AuthContextProvider } from "./authContext/AuthContext.jsx";

axios.defaults.baseURL = "http://localhost:8080/api/";

axios.defaults.baseURL = import.meta.env.DEV
  ? "http://localhost:8080/api/"
  : "https://netflix-beige-sigma.vercel.app";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
