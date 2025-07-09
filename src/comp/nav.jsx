import React from 'react';
import "../css/nav.css";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      {/* Header Bar */}
      <div className="header-bar">
        <div className="contact-info">

          <div className="hours">
            {/* Custom Clock SVG */}
            <span className="clock-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Mon-Fri 08:00 - 17:00
          </div>

          <div className="phone">
            {/* Phone SVG */}
            <span className="phone-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V21C22 21.5304 21.7893 22.0391 21.4142 22.4142C21.0391 22.7893 20.5304 23 20 23C10.6112 23 2.99994 15.3888 2.99994 6C2.99994 5.46957 3.21068 4.96086 3.58575 4.58579C3.96082 4.21071 4.46953 4 4.99994 4H9.07994C9.32842 3.99984 9.57308 4.0716 9.78267 4.20609C9.99227 4.34058 10.1577 4.53283 10.2599 4.758L12.2599 9.258C12.3675 9.49025 12.3957 9.75593 12.3405 10.0106C12.2853 10.2653 12.1495 10.4951 11.9499 10.671L10.2099 12.171C11.3992 14.4485 13.5514 16.6007 15.8289 17.79L17.3289 16.05C17.5048 15.8507 17.7344 15.7147 17.9887 15.6594C18.243 15.6041 18.5084 15.6322 18.7409 15.739L23.2409 17.739C23.466 17.8412 23.6583 18.0066 23.7928 18.2162C23.9273 18.4258 23.999 18.6704 23.9999 18.9189V23C23.9999 23.5304 23.7892 24.0391 23.4141 24.4142C23.039 24.7893 22.5303 25 21.9999 25H20.9999C20.7346 25 20.4805 24.8946 20.2929 24.7071C20.1054 24.5196 19.9999 24.2655 19.9999 24V19.92L22 16.92Z" fill="white"/>
              </svg>
            </span>
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
