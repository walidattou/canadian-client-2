import React from 'react';
import "../css/nav.css";

const NavBar = () => {
  return (
    <div>
      {/* Header Bar */}
      <div className="header-bar">
        <div className="contact-info">
          <div className="hours">
            <span className="clock-icon">🕐</span>
            Mon-Fri 08:00 - 17:00
          </div>
          <div className="phone">
            <span className="phone-icon">📞</span>
            +1 (331) 000-0000
          </div>
        </div>
        <a className="estimate-btn">
          Request an Estimate
        </a>
      </div>

      {/* Navigation */}
      <nav className="navigation">
        <ul>
          <li><a href="#" className="nav-link">Accueil</a></li>
          <li><a href="#" className="nav-link active">Services</a></li>
          <li><a href="#" className="nav-link">A Propos</a></li>
          <li><a href="#" className="nav-link">Realisation</a></li>
          <li><a href="#" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
