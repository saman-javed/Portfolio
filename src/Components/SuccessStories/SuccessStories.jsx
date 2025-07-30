import React from 'react';
import backgroundImage1 from "../../assets/images/image-element1.jpg";
import backgroundImage2 from "../../assets/images/image-element2.avif";
import backgroundImage3 from "../../assets/images/Groupon.jpg";
import backgroundImage4 from "../../assets/images/Nokia.jpg";
import backgroundImage5 from "../../assets/images/image-element5.jpg";
import backgroundImage6 from "../../assets/images/honewell.jpg";
import backgroundImage7 from "../../assets/images/SternKessler.jpg";
import backgroundImage8 from "../../assets/images/Replenium.png";


import './SuccessStories.css';

const cards = [
  {
    sector: 'Manufacturing',
    title1: 'Streamlined Operations',
    title2: 'With Salesforce & Azure Integration',
    logo: 'https://tkxel.com/wp-content/uploads/2024/02/ABB.svg',
    value: '100%',
    text: 'Timely Ticket<br />Resolution',
    arrow: 'https://tkxel.com/wp-content/themes/tkxel-theme/assets/images/cs_slider_arrow-2.svg.svg',
    desc: 'They shared our vision right from the start and helped us achieve the unthinkable...',
    custImage: 'https://tkxel.com/wp-content/uploads/2023/12/ABB.png',
    name: 'Pam Chitwood',
    role: 'Product Manager, ABB',
    backgroundImage: backgroundImage1,
  },
  {
    sector: 'Technology',
    title1: 'AI Automation in',
    title2: 'Banking Sector',
    logo: 'https://tkxel.com/wp-content/uploads/2024/02/ABB.svg',
    value: '80%',
    text: 'Improved Loan<br />Processing',
    arrow: 'https://tkxel.com/wp-content/themes/tkxel-theme/assets/images/cs_slider_arrow-2.svg.svg',
    desc: 'We transformed their outdated process with AI-powered solutions that cut turnaround time...',
    custImage: 'https://tkxel.com/wp-content/uploads/2023/12/ABB.png',
    name: 'Sarah Liu',
    role: 'VP Operations, FinCorp',
    backgroundImage: backgroundImage2,
  },
  {
    sector: 'E-Commerce',
    title1: 'Remote Patient Monitoring',
    title2: 'with IoT Devices',
    logo: 'https://tkxel.com/wp-content/uploads/2024/02/ABB.svg',
    value: '95%',
    text: 'Increased Patient<br />Engagement',
    arrow: 'https://tkxel.com/wp-content/themes/tkxel-theme/assets/images/cs_slider_arrow-2.svg.svg',
    desc: 'Our IoT-integrated solutions helped reduce hospital visits and improved long-term care...',
    custImage: 'https://tkxel.com/wp-content/uploads/2023/12/ABB.png',
    name: 'Dr. Ethan Cole',
    role: 'CTO, MedTrack',
    backgroundImage: backgroundImage3,
  },
  {
    sector: 'Telecom',
    title1: 'Streamlined Operations',
    title2: 'With Salesforce & Azure Integration',
    logo: 'https://tkxel.com/wp-content/uploads/2024/02/ABB.svg',
    value: '100%',
    text: 'Timely Ticket<br />Resolution',
    arrow: 'https://tkxel.com/wp-content/themes/tkxel-theme/assets/images/cs_slider_arrow-2.svg.svg',
    desc: 'They shared our vision right from the start and helped us achieve the unthinkable...',
    custImage: 'https://tkxel.com/wp-content/uploads/2023/12/ABB.png',
    name: 'Pam Chitwood',
    role: 'Product Manager, ABB',
    backgroundImage: backgroundImage4,
  },
  {
    sector: 'HealthCare',
    title1: 'AI Automation in',
    title2: 'Banking Sector',
    logo: 'https://tkxel.com/wp-content/uploads/2024/02/ABB.svg',
    value: '80%',
    text: 'Improved Loan<br />Processing',
    arrow: 'https://tkxel.com/wp-content/themes/tkxel-theme/assets/images/cs_slider_arrow-2.svg.svg',
    desc: 'We transformed their outdated process with AI-powered solutions that cut turnaround time...',
    custImage: 'https://tkxel.com/wp-content/uploads/2023/12/ABB.png',
    name: 'Sarah Liu',
    role: 'VP Operations, FinCorp',
    backgroundImage: backgroundImage5,
  },
  {
    sector: 'Manufacturing',
    title1: 'Streamlined Operations',
    title2: 'With Salesforce & Azure Integration',
    logo: 'https://tkxel.com/wp-content/uploads/2024/02/ABB.svg',
    value: '100%',
    text: 'Timely Ticket<br />Resolution',
    arrow: 'https://tkxel.com/wp-content/themes/tkxel-theme/assets/images/cs_slider_arrow-2.svg.svg',
    desc: 'They shared our vision right from the start and helped us achieve the unthinkable...',
    custImage: 'https://tkxel.com/wp-content/uploads/2023/12/ABB.png',
    name: 'Pam Chitwood',
    role: 'Product Manager, ABB',
    backgroundImage: backgroundImage6,
  },
  {
    sector: 'Legal Services',
    title1: 'AI Automation in',
    title2: 'Banking Sector',
    logo: 'https://tkxel.com/wp-content/uploads/2024/02/ABB.svg',
    value: '80%',
    text: 'Improved Loan<br />Processing',
    arrow: 'https://tkxel.com/wp-content/themes/tkxel-theme/assets/images/cs_slider_arrow-2.svg.svg',
    desc: 'We transformed their outdated process with AI-powered solutions that cut turnaround time...',
    custImage: 'https://tkxel.com/wp-content/uploads/2023/12/ABB.png',
    name: 'Sarah Liu',
    role: 'VP Operations, FinCorp',
    backgroundImage: backgroundImage7,
  },
  {
    sector: 'Information Technology',
    title1: 'Streamlined Operations',
    title2: 'With Salesforce & Azure Integration',
    logo: 'https://tkxel.com/wp-content/uploads/2024/02/ABB.svg',
    value: '100%',
    text: 'Timely Ticket<br />Resolution',
    arrow: 'https://tkxel.com/wp-content/themes/tkxel-theme/assets/images/cs_slider_arrow-2.svg.svg',
    desc: 'They shared our vision right from the start and helped us achieve the unthinkable...',
    custImage: 'https://tkxel.com/wp-content/uploads/2023/12/ABB.png',
    name: 'Pam Chitwood',
    role: 'Product Manager, ABB',
    backgroundImage: backgroundImage8,
  },
];

const SuccessStories = () => {
  const scrollSlider = (direction) => {
    const slider = document.getElementById('slider');
    const scrollAmount = 320;
    slider.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="component">
      <div className="heading d-flex justify-content-between align-items-center">
        <div className="header">
          <h3>Success Stories in Spotlight</h3>
        </div>
        <div className="slider-buttons">
          <div className="all-podcasts">All Case Studies</div>
          <button className="slide-btn" onClick={() => scrollSlider(-1)}><i className="ri-arrow-left-s-line" style={{ fontSize: "24px" }}></i></button>
          <button className="slide-btn" onClick={() => scrollSlider(1)}><i className="ri-arrow-right-s-line" style={{ fontSize: "24px" }}></i></button>
        </div>
      </div>

      <div className="slider-container2 d-flex" id="slider">
        {cards.map((card, index) => (
          <div
            className="box"
            key={index}
            style={
              card.backgroundImage
                ? {
                    '--bg-img': `url(${card.backgroundImage})`,
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent), url(${card.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                  }
                : {}
            }
          >
            <div className="box-header d-flex justify-content-end">
              <button className="btn btn-primary">{card.sector}</button>
            </div>
            <div className="cs_body">
              <div className="cs_title">
                <h3>{card.title1}</h3>
                <h3>{card.title2}</h3>
                <hr />
              </div>
              <div className="kpis">
                <div className="cs_logo">
                  <img width="47" height="18" src={card.logo} alt="Logo" />
                </div>
                <div className="kpi d-flex">
                  <p className="value">{card.value}<span>%</span></p>
                  <p className="text" dangerouslySetInnerHTML={{ __html: card.text }} />
                </div>
              </div>
              <img width="60" height="60" className="cs_card_arrow" src={card.arrow} alt="Arrow" />
              <div className="cs_footer">
                <p className="cs_desc">{card.desc}</p>
                <div className="customer d-flex align-items-center mt-3">
                  <img width="60" height="60" className="me-3" src={card.custImage} alt="Customer" />
                  <div className="detail">
                    <h4 className="cust_name">{card.name}</h4>
                    <p className="cust_role">{card.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
