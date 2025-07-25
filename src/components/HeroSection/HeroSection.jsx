import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/Hero.png";
import { heroContent } from "../../data/content";
import "./HeroSection.css";

const HeroSection = () => {
  useEffect(() => {
    const move = (e) => {
      const blobs = document.querySelectorAll(".hero-blob");
      blobs.forEach((blob, i) => {
        const speed = (i + 1) * 0.03;
        blob.style.transform = `translate(${(window.innerWidth / 2 - e.clientX) * speed}px, ${(window.innerHeight / 2 - e.clientY) * speed}px)`;
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="hero-new-section">
      <div className="hero-blob blob-1"></div>
      <div className="hero-blob blob-2"></div>
      <div className="hero-blob blob-3"></div>

      <div className="hero-new-wrapper glass-card">
        <div className="hero-new-left">
          <h1>{heroContent.title} <span>{heroContent.highlight}</span></h1>
          <p>{heroContent.description}</p>
          <div className="hero-new-buttons">
            {heroContent.buttons.map((btn, i) => (
              <Link key={i} to={btn.path} className={`btn ${btn.type}`}>{btn.label}</Link>
            ))}
          </div>
        </div>
        <div className="hero-new-right">
          <img src={heroImage} alt="Hero" className="hero-floating-img" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
