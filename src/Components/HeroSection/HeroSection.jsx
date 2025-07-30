import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-wrapper">
      <section className="hero-section">
        <div className="bg-pattern-layer"></div>

        <div className="hero-content">
          <h1 className="hero-title">
            Driving Business Growth with <br />
            <span className="highlight">Scalable Digital Solutions</span>
          </h1>
          <p className="hero-subtext">AI is at the core of everything we do.</p>
          <button className="hero-button">Get in Touch</button>

          {/* Combined clients and awards container */}
          <div className="clients-awards-container">
            <div className="clients-section">
              <p className="clients-label">FEATURED CLIENTS</p>
              <div className="client-logos">
                <span>NBCUniversal</span>
                <span>BARCLAYS</span>
                <span>ABB</span>
                <span>Honeywell</span>
                <span>GROUPON</span>
              </div>
            </div>

            <div className="awards-section">
              <p className="awards-label">AWARDS</p>
              <div className="awards-logos">
                <span>Inc. 5000</span>
                <span>Forbes</span>
                <span>FT</span>
                <span>Clutch</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;