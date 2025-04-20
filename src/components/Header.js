import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./Header.css";

const Header = () => {
  // Mock authentication state (replace with actual auth logic)
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleAuthClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="VideoGen AI" className="logo" />
        </Link>
        <h1 className="site-name">VideoGen AI</h1>
      </div>
      <div className="auth-container">
        <button className="auth-button" onClick={handleAuthClick}>
          {isLoggedIn ? "Log Out" : "Log In"}
        </button>
      </div>
    </header>
  );
};

export default Header;
