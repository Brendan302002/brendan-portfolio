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
          <button href="#About">About</button>
          <button href="#Projects">Projects</button>
          <button href="#Resume">Resume</button>
          <button href="#Contact">Contact</button>

        </nav>

      </header>
    </div>
  );
}

export default Nav;


