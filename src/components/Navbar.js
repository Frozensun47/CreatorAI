import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="desktop-nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/create"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Create
        </NavLink>
        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Pricing
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          About Us
        </NavLink>
      </div>

      <div className="mobile-nav">
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <span className="menu-icon"></span>
        </button>

        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <NavLink
              to="/"
              className="mobile-nav-item"
              onClick={toggleMobileMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/create"
              className="mobile-nav-item"
              onClick={toggleMobileMenu}
            >
              Create
            </NavLink>
            <NavLink
              to="/pricing"
              className="mobile-nav-item"
              onClick={toggleMobileMenu}
            >
              Pricing
            </NavLink>
            <NavLink
              to="/about"
              className="mobile-nav-item"
              onClick={toggleMobileMenu}
            >
              About Us
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
