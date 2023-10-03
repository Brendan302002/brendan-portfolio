import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-stack">
          <h1>Brendan Goddard</h1>
          <h2>Software Developer</h2>
        </div>
        <div className="footer-links">
          <a href="/">About</a>
          <a href="/">Projects</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; Made by Brendan Goddard 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
