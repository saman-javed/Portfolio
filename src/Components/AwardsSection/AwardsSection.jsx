import React from 'react';
import widgetImage1 from "../../assets/images/INC-5000.svg";
import widgetImage2 from "../../assets/images/forbes.svg";
import widgetImage3 from "../../assets/images/FT.svg";
import widgetImage4 from "../../assets/images/mogul.svg";
import widgetImage5 from "../../assets/images/2025-Asia-Winner.svg";
import widgetImage6 from "../../assets/images/clutch.svg";
import widgetImage7 from "../../assets/images/CMMI-DEV.svg";
import widgetImage8 from "../../assets/images/ISO-9001.svg";
import widgetImage9 from "../../assets/images/ISO-27001.svg";
import widgetImage10 from "../../assets/images/ISO-20000.svg";
import widgetImage11 from "../../assets/images/Microsoft.svg";
import widgetImage12 from "../../assets/images/Salesforce.svg";
import widgetImage13 from "../../assets/images/aws.svg";

import './AwardsSection.css';

const awards = [
  {
    img: widgetImage1,
    text: "Became America's fastest-growing company for the second consecutive year",
  },
  {
    img: widgetImage2,
    text: 'Forbes Business Council Member',
  },
  {
    img: widgetImage3,
    text: 'Recognized by Financial Times',
  },
  {
    img: widgetImage4,
    text: "Listed in Mogul's Top People Leaders & CHROs",
  },
  {
    img: widgetImage5,
    text: 'Officially ranked among the Top 10 Inspiring Workplaces across Asia - 2025',
  },
  {
    img: widgetImage6,
    text: 'Listed in Top B2B Companies 2022 by Clutch',
  },
  {
    img: widgetImage7,
    text: 'Recognized by Financial Times',
  },
  {
    img: widgetImage8,
    text: "Listed in Mogul's Top People Leaders & CHROs",
  },
  {
    img: widgetImage9,
    text: 'Officially ranked among the Top 10 Inspiring Workplaces across Asia - 2025',
  },
  {
    img: widgetImage10,
    text: 'Listed in Top B2B Companies 2022 by Clutch',
  }
];
const partnerships = [
  {
    img: widgetImage11,
    text: "Microsoft",
  },
  {
    img: widgetImage12,
    text: "Salesforce",
  },
  {
    img: widgetImage13,
    text: "AWS",
  },
 
];

const AwardsSection = () => {
  return (
    <>
    <section className="awards-section">
      <h2>Awards & Certifications</h2>
      <p className="subtitle">
        We are proud of the recognition we have received demonstrating our
        industry leading practices <br /> and capabilities.
      </p>
      <div className="awards-grid">
  {awards.map((award, index) => (
    <div
      className={`award-card 
        ${index >= 6 ? 'dot-on-after' : ''} 
        ${index === awards.length - 1 ? 'dot-top-right' : ''}`
      }
      key={index}
    >
      <img src={award.img} alt={`Award ${index}`} />
      <p>{award.text}</p>
    </div>
  ))}
</div>
    </section>
    <section className="partnership-section">
      <h2>Our Partnerships</h2>
      <p className="subtitle">
        Our industry leading partnerships give you access to a broader range of technologies and <br /> services.
      </p>
      <div className="awards-grid">
  {partnerships.slice(0, 3).map((partnerships, index) => (
    <div className="award-card" key={index}>
      <img src={partnerships.img} alt={`partnerships ${index}`} />
      <p>{partnerships.text}</p>
    </div>
  ))}
</div>
    </section>
    </>
  );
};

export default AwardsSection;
