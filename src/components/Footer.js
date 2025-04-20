import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-navigation">
        <Link to="/create" className="footer-btn">
          Create
        </Link>
        <Link to="/" className="footer-btn">
          Home
        </Link>
        <Link to="/about" className="footer-btn">
          About Us
        </Link>
        <Link to="/pricing" className="footer-btn">
          Pricing
        </Link>
        <Link to="/contact" className="footer-btn">
          Contact Us
        </Link>
      </div>

      <div className="social-links">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaYoutube />
        </a>
      </div>

      <div className="copyright">
        <p>
          &copy; {new Date().getFullYear()} VideoGen AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
