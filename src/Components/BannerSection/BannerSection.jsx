// src/Components/BannerSection/BannerSection.jsx
import React from "react";
import "./BannerSection.css";
import bannerImg from "../../assets/images/CTA-BG-image-1.png";

const BannerSection = () => {
  return (
    <section className="banner-section">
      <p className="intro-statement">
  We Helped Honeywell achieve a <span className="highlight-green">25% increase</span> in operational efficiency. 100% ticket resolution.
      </p>

      <div className="banner-content">
        <h1>
          Leading your<br /> digital journey to success
        </h1>

        <button className="work-button">Let's work together</button>
        
        <div className="stats-separator"></div>

        <div className="banner-stats">
          <div className="stat-box">
            <h3>15+</h3>
            <p>Years of driving growth</p>
          </div>
          <div className="stat-box">
            <h3>1000+</h3>
            <p>Forward thinking experts</p>
          </div>
          <div className="stat-box">
            <h3>500+</h3>
            <p>Digital Projects Delivered</p>
          </div>
          <div className="stat-box">
            <h3>94%</h3>
            <p>Customer Satisfaction</p>
          </div>
          <div className="stat-box">
            <h3>40%</h3>
            <p>Industries Served</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
