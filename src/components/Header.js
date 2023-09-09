import React, { useEffect, useState } from 'react';
import prof from './assets/images/Profile-BG.jpg';
import linkedin from './assets/images/Linked-in.png';
import github from './assets/images/github-img.png';
import js from './assets/images/JS-img.png';
import java from './assets/images/java-img.png';
import c from './assets/images/c++--img.png';
import react from './assets/images/react-img.png';
import db from './assets/images/db-img.png';

import './Header.css';

const Header = () => {

  
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`header ${isLoaded ? 'show' : ''}`}>
      <img src={prof} alt="brendan" className={`header-image ${isLoaded ? 'show' : ''}`} />
      <div className={`header-info ${isLoaded ? 'show' : ''}`}>
        <h1 className={`fade-in ${isLoaded ? 'show' : ''}`}>Brendan Goddard</h1>
        <h2 className={`fade-in ${isLoaded ? 'show' : ''}`}>Software Developer</h2>
        <p className={`software-text fade-in ${isLoaded ? 'show' : ''}`}>
          I have a passion for designing elegant and simplistic websites, which are easy for users and make people want to return for a second look
        </p>
        <div className={`buttons fade-in ${isLoaded ? 'show' : ''}`}>
          <a href="https://github.com/Brendan302002" target="_blank">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/brendan-goddard/" target="_blank">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className="softwares">
        <ul>
          <li>
            <div className="software-icon-wrapper">
            <a href="https://jsdoc.app/" target="_blank">
              <img src={js} alt="JavaScript" className="software-icon" />
            </a>
            </div>
          </li>
          <li>
            <div className="software-icon-wrapper">
            <a href="https://docs.oracle.com/en/java/" target="_blank">
              <img src={java} alt="Java" className="software-icon" />
            </a>
            </div>
          </li>
          <li>
            <div className="software-icon-wrapper">
            <a href="https://devdocs.io/cpp/" target="_blank">
              <img src={c} alt="C++" className="software-icon" />
            </a>
            </div>
          </li>
          <li>
            <div className="software-icon-wrapper">
            <a href="https://react.dev/" target="_blank">
              <img src={react} alt="React" className="software-icon" />
            </a>
            </div>
          </li>
          <li>
            <div className="software-icon-wrapper">
            <a href="link5-url" target="_blank">
              <img src={db} alt="Database" className="software-icon" />
            </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;