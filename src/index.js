import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/common.css"; // Import common styles globally

// Utility to enable animations after the page loads
const enableAnimations = () => {
  // Add a class to the body when the page is fully loaded
  document.body.classList.add("page-loaded");

  // Initialize scroll observers if available in the browser
  if ("IntersectionObserver" in window) {
    // This will be picked up by our scrollAnimation.js utility
    document.body.classList.add("supports-animation");
  }
};

// Run after the page loads
window.addEventListener("load", enableAnimations);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
