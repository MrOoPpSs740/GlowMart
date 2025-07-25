// src/data/content.js

export const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Login", path: "/login" }
  ];
  
  export const heroContent = {
    title: "Light Up Your Life with",
    highlight: "GlowMart",
    description:
      "Explore our handcrafted collection of scented candles, designed for elegance, calm, and charm.",
    buttons: [
      { label: "Shop Now", path: "/products", type: "hero-shop" },
      { label: "Learn More", path: "/about", type: "hero-outline" }
    ]
  };
  
  export const aboutContent = {
    title: "About",
    highlight: "GlowMart",
    paragraphs: [
      "At GlowMart, we believe that every space deserves a little warmth and charm.",
      "Our handcrafted candles are made from premium soy wax and infused with delightful fragrances to elevate your everyday moments.",
      "Founded with a passion for craftsmanship and self-care, we’re on a mission to create sustainable, stylish candles that don’t just light up rooms, but lives."
    ],
    points: [
      "✨ Eco-friendly, handcrafted soy wax candles",
      "💡 Designed for elegance, wellness, and atmosphere",
      "🌱 Committed to sustainability and cruelty-free production"
    ]
  };
  
  export const contactContent = {
    location: {
      email: "support@glowmart.com",
      phone: "+91 9876543210",
      address: "New Delhi, India"
    },
    message: {
      heading: "Get in Touch",
      body: "We're here to answer any questions about our candles, shipping, or custom orders. Just drop us a message!"
    }
  };
  