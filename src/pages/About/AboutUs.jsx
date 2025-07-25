import React from "react";
import { aboutContent } from "../../data/content";
import AboutImg from "../../assets/About.png";
import "./AboutUs.css";

const AboutUs = () => (
  <section className="about-section">
    <div className="about-container">
      <div className="about-image-container">
        <img src={AboutImg} alt="About GlowMart" className="about-image" />
      </div>
      <div className="about-content">
        <h2>{aboutContent.title} <span>{aboutContent.highlight}</span></h2>
        {aboutContent.paragraphs.map((para, i) => <p key={i}>{para}</p>)}
        <ul className="about-points">
          {aboutContent.points.map((pt, i) => <li key={i}>{pt}</li>)}
        </ul>
      </div>
    </div>
  </section>
);

export default AboutUs;
