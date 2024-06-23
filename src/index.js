import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/styles.css";

const root = document.getElementById("root");

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootElement = ReactDOM.createRoot(root);
rootElement.render(app);
