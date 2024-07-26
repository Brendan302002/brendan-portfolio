import React, { useState } from 'react';
import './Home.css';
import image from './assets/images/profile/IMG_3557.jpeg';
import linkedinIcon from './assets/images/Linked-in.png'; // Replace with your LinkedIn icon path
import githubIcon from './assets/images/github-img.png'; // Replace with your GitHub icon path

const Home = () => {
  const [searchActive, setSearchActive] = useState(false);

  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };

  return (
    <div className="home">
      <div className='links-bar'>
      <div className="social-icons">
          <a href="https://www.linkedin.com/in/brendan-goddard/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://github.com/Brendan302002" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
      </div>
      <div className="top-bar">
        <div className={`search-bar ${searchActive ? 'active' : ''}`}>
          <input type="text" placeholder="search" />
        </div>
        <div className="search-icon" onClick={toggleSearch}></div>
      </div>
      <div className="center-content">
        <img src={image} className="profile-pic" alt="Profile" />
        <h1>Brendan Goddard</h1>
        <p className="job-title">Software Development Student</p>
      </div>
    </div>
  );
};

export default Home;
