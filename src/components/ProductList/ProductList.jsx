import React from "react";
import ProductCard from "../ProductCard/ProductCard"; // Make sure this path is correct
import candle1 from "../../assets/candle1.png";
import candle2 from "../../assets/candle2.png";
import candle3 from "../../assets/candle3.png";
import candle4 from "../../assets/candle4.png";

  
  
  
  
  
  
  
  
  
  
  
  
  const dummyProducts = [
    {
      id: 1,
      name: "Scented Wax Candle",
      description: "Lavender fragrance, 100% soy wax.",
      price: 299,
      image: candle1,
    },
    {
      id: 2,
      name: "Lavender Candle",
      description: "Soothing and calming soy blend.",
      price: 349,
      image: candle2,
    },
    {
      id: 3,
      name: "Vanilla Pillar Candle",
      description: "Slow-burning vanilla aroma.",
      price: 399,
      image: candle3,
    },
    {
      id: 4,
      name: "Decorative Jar Candle",
      description: "Perfect for gifting and home decor.",
      price: 449,
      image: candle4,
    }
  ];
  
  
  
  
  
  
  
  
 





const ProductList = () => {
  const handleAddToCart = (product) => {
    alert(`Added "${product.name}" to cart!`);
  };

  const handleBuyNow = (product) => {
    alert(`Buying "${product.name}" now!`);
  };

  return (
    <div
      className="product-list"
      style={{
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
        padding: "2rem",
      }}
    >
      {dummyProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
        />
      ))}
    </div>
  );
};

export default ProductList;
