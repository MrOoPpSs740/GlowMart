import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <Link to="/" className="footer-logo">
            Glow<span>Mart</span>
          </Link>
          <p>Your trusted destination for stylish, quality products ✨</p>
          <p className="footer-copy">&copy; {new Date().getFullYear()} GlowMart. All rights reserved.</p>
        </div>

        <div className="footer-right">
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/cart" className="cart-link"><FaShoppingCart /></Link>
            <Link to="/login">Login</Link>
          </div>

          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Subscribe to our newsletter" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
