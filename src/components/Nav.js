import React, { useState } from 'react';
import './Nav.css';
import logo from './assets/images/BG-Logo.jpg';

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
        <div className="logo">
          {/* <img src={logo} alt="logo" className="logo" /> */}
        </div>
        <nav className="nav">
          <button href="#About">About</button>
          <div className="select-menu" onClick={handleDropdownClick}>
            <button className="select-btn">
              <span className="sBtn-text">{selectedOption}</span>
              <i className={`bx ${isDropdownOpen ? 'bx-chevron-up' : 'bx-chevron-down'}`}></i>
            </button>
            {isDropdownOpen && (
              <ul className="options">
                <li className="option" onClick={() => handleOptionClick('Project 1')}>
                  <i className="bx bxl-project1-alt" style={{ color: '#E1306C' }}></i>
                  <span className="option-text">Project 1</span>
                </li>
                <li className="option" onClick={() => handleOptionClick('Project 2')}>
                  <i className="bx bxl-project2-square" style={{ color: '#0E76A8' }}></i>
                  <span className="option-text">Project 2</span>
                </li>
                <li className="option" onClick={() => handleOptionClick('Project 3')}>
                  <i className="bx bxl-project3-circle" style={{ color: '#4267B2' }}></i>
                  <span className="option-text">Project 3</span>
                </li>
              </ul>
            )}
          </div>
          <button href="#Contact">Contact</button>
        </nav>
      </header>
    </div>
  );
}

export default Nav;


