import React from "react";
import "./ProductCard.css";
import { FaShoppingCart, FaBolt } from "react-icons/fa";

const ProductCard = ({ product, onAddToCart, onBuyNow }) => {
  if (!product || typeof product !== "object") return null;

  return (
    <div className="pro-card">
      <div className="pro-img-container">
        
        <img src={product.image} alt={product.name || "Product"} className="pro-img" />
      </div>
      <div className="pro-details">
        <h3 className="pro-title">{product.name}</h3>
        <p className="pro-desc">{product.description}</p>
        <div className="pro-bottom">
          <span className="pro-price">₹{product.price}</span>
          <div className="pro-btns">
            <button className="btn-buy-now" onClick={() => onBuyNow(product)}>
              <FaBolt /> Buy Now
            </button>
            <button className="btn-add-cart" onClick={() => onAddToCart(product)}>
              <FaShoppingCart /> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
