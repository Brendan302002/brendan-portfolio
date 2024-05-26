import React, { useState } from 'react';
import './Nav.css';
import logo from './assets/images/BG-Logo.jpg';
import home from './assets/images/home-nav.png';

function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Projects');

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (optionText) => {
    setSelectedOption(optionText);
    setIsDropdownOpen(false);
  };

  
  return (
    <div className="App">
      <header className="navbar">
        {/* <div className="logo">
        <button className='home' href="#home"><img src={home}></img></button>
        </div> */}
        <nav className="nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      </header>
    </div>
  );
}

export default Nav;


