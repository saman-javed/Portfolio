import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavBar.css';
import logo from '../../assets/images/vertexai-logo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="#home">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        {/* Desktop Menu - Now on left side */}
        <div className="navbar-menu">
          <a href="#services">Services</a>
          <a href="#customers">Customers</a>
          <a href="#company">Company</a>
          <a href="#career">Career</a>
          <a href="#resources">Resources</a>
        </div>

        {/* Mobile Menu Button - Right aligned */}
        <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#customers" onClick={() => setIsOpen(false)}>Customers</a>
        <a href="#company" onClick={() => setIsOpen(false)}>Company</a>
        <a href="#career" onClick={() => setIsOpen(false)}>Career</a>
        <a href="#resources" onClick={() => setIsOpen(false)}>Resources</a>
      </div>
    </nav>
  );
};

export default Navbar;