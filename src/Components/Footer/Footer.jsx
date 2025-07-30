import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      {/* Top section */}
      <div className="footer-top">
        <div className="footer-section">
          <h4>Advisory</h4>
          <ul>
            <li>Discovery Workshop</li>
            <li>Market Research</li>
            <li>Technical Feasibility Study</li>
            <li>Product Strategy</li>
            <li>UI/UX Design</li>
            <li>Digital Transformation</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Engineering</h4>
          <ul>
            <li>Product Development</li>
            <li>Application Development</li>
            <li>Application Modernization</li>
            <li>POC Development</li>
            <li>AI Software Development</li>
            <li>Cloud Engineering</li>
            <li>Cloud Migration</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Artificial Intelligence</h4>
          <ul>
            <li>AI Agents</li>
            <li>AI Workshop</li>
            <li>AI PoC & MVP</li>
            <li>Generative AI</li>
            <li>Machine Learning</li>
            <li>MLOps</li>
            <li>Conversational AI</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Optimization</h4>
          <ul>
            <li>Software Audit</li>
            <li>Quality Assurance</li>
            <li>Support & Maintenance</li>
          </ul>
        </div>

        <div className="footer-subscribe">
          <h4>Subscribe</h4>
          <p>Get exclusive insights, curated resources and expert guidance.</p>
          <input type="email" placeholder="EMAIL" />
          <button>Subscribe</button>
        </div>
      </div>

      {/* Bottom section */}
      <div className="footer-bottom">
        <div className="footer-brand">
          <h1>tkxel<sup>®</sup></h1>
        </div>
        <div className="footer-address">
          <h4>Address</h4>
          <p>11921 Freedom Drive<br />Two Fountain Square, Suite 550,<br />Reston, VA 20190 - USA</p>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>services@tkxel.com</p>
          <p>(202) 978-3410</p>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <span>🔗</span>
            <span>📘</span>
            <span>📸</span>
            <span>▶️</span>
            <span>🎵</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom-nav">
        <p>© 2025 | All rights reserved.</p>
        <div className="nav-links">
          <span>Customers</span>
          <span>Podcasts</span>
          <span>Webinars</span>
          <span>News</span>
          <span>Media</span>
          <span>Press Kit</span>
          <span>Site Map</span>
          <span>Privacy Policy</span>
          <span>Terms Of Use</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
