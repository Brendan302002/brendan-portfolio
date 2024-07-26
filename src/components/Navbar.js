import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import homeIcon from './assets/images/home-icon-main.png';  // replace with your icon paths
import aboutIcon from './assets/images/info.png';
import contactIcon from './assets/images/library.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-button">
        <img src={homeIcon} alt="Home" />
        <span>Home</span>
      </Link>
      <Link to="/about" className="navbar-button">
        <img src={aboutIcon} alt="About" />
        <span>About</span>
      </Link>
      <Link to="/contact" className="navbar-button">
        <img src={contactIcon} alt="Contact" />
        <span>Contact</span>
      </Link>
    </div>
  );
};

export default Navbar;
