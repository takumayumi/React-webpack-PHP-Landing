/**
 * index.js
 * Entry point.
 *
 * Author: Yumi Takuma
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/styles.css";

const root = document.getElementById("root");

// Wrap the App component with React.StrictMode to help find potential problems
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Create a root using the new React 18 API and render the app
const rootElement = ReactDOM.createRoot(root);
rootElement.render(app);
