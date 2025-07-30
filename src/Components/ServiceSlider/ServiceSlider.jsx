import React, { useRef } from 'react';
import './ServiceSlider.css';

const data = [
  {
    title: 'Leverage AI to gain insights, automate processes, and drive innovation.',
    button: 'Artificial Intelligence',
  },
  {
    title: 'We build & deploy AI agents that automate tasks, streamline operations & enhance customer experience.',
    button: 'AI Agents',
  },
  {
    title: 'Streamline apps for cost savings and cloud efficiency.',
    button: 'Application Modernization',
  },
  {
    title: 'Strengthen future readiness against threats and ensure secure data.',
    button: 'Cybersecurity',
  },
  // You can add more if needed
];

const Slider = () => {
  const sliderRef = useRef();

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 350; // Scrolls one card width (or adjust if needed)
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 350;
    }
  };

  return (
    <div className="slider-container">
      {/* Top bar */}
      <div className="slider-topbar">
        <h2 className="slider-heading">What would you like to get done?</h2>
        <div className="slider-buttons">
           <div className="all-services">All Services</div>
          <button className="arrow-btn" onClick={handlePrev}>
            <i className="ri-arrow-left-s-line" style={{ fontSize: "24px" }}></i>
          </button>
          <button className="arrow-btn" onClick={handleNext}>
            <i className="ri-arrow-right-s-line" style={{ fontSize: "24px" }}></i>
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="slider-wrapper">
        <div className="slider" ref={sliderRef}>
          {data.map((item, index) => (
            <div className="card" key={index}>
              <div className="card-content">
                <div className="dot"></div>
                <p className="card-title">{item.title}</p>
              </div>
              <button className="card-button">{item.button}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
