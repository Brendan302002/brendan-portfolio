import React, { useState, useEffect } from 'react';
import './App.css';

import profile from './components/assets/images/profile/IMG_3557.jpeg';
import search from './components/assets/images/search2.png';
import home from './components/assets/images/home21.png';
import library from './components/assets/images/library2.png';
import pin2 from './components/assets/images/pin.png';
import linkedin from './components/assets/images/Linked-in.png';
import github from './components/assets/images/github-img.png';

const App = () => {
  const [time, setTime] = useState(new Date());
  const [lightMode, setLightMode] = useState(false);
  const [sortOrder, setSortOrder] = useState('projects');

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      setLightMode(currentTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', lightMode ? 'dark' : 'light');
    localStorage.setItem('theme', lightMode ? 'dark' : 'light');
  }, [lightMode]);

  const posts = [
    { title: 'First Playlist', type: 'project', language: 'JavaScript', image: 'https://via.placeholder.com/100', pin: pin2, github: '#' },
    { title: 'Second Blog Post', type: 'blog', language: 'Python', image: 'https://via.placeholder.com/100', pin: pin2, github: '#' },
    { title: 'Third Playlist', type: 'project', language: 'C++', image: 'https://via.placeholder.com/100', pin: pin2, github: '#' },
    { title: 'Fourth Blog Post', type: 'blog', language: 'Ruby', image: 'https://via.placeholder.com/100', pin: pin2, github: '#' },
    { title: 'Fifth Playlist', type: 'project', language: 'Java', image: 'https://via.placeholder.com/100', pin: pin2, github: '#' },
    { title: 'Sixth Blog Post', type: 'blog', language: 'Go', image: 'https://via.placeholder.com/100', pin: pin2, github: '#' },
  ];

  const currentProject = {
    title: 'Current Project',
    language: 'JavaScript',
    image: 'https://via.placeholder.com/25',
    progress: 70, // progress in percentage
  };

  const sortedPosts = posts
    .filter(post => post.type === sortOrder)
    .concat(posts.filter(post => post.type !== sortOrder));

  return (
    <div className={`App ${lightMode ? 'light-mode' : ''}`}>
      <div className='topRow'>
        <div className="timer">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        <div className="switch">
          <label className="theme-switch" htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              checked={lightMode}
              onChange={() => setLightMode(!lightMode)}
            />
            <div className="slider round"></div>
          </label>
        </div>
      </div>
      <div className="header">
        <div className="left">
          <img src={profile} alt="Profile" />
          <div className="info">
            <div className="name">Brendan Goddard</div>
            <div className="role">Software Developer</div>
          </div>
        </div>
        <div className="right">
          <div className="linkedin-github-links">
            <a href="https://www.linkedin.com/"><img src={linkedin} alt="LinkedIn" /></a>
            <a href="https://github.com/"><img src={github} alt="GitHub" /></a>
          </div>
        </div>
      </div>

      <div className="bubble-buttons">
        <button>About</button>
        <button>Blog</button>
        <button>Projects</button>
        <button>Resume</button>
      </div>

      <div className="recent-posts">
        <h2>Recent Posts</h2>
        <button className="sort-button" onClick={() => setSortOrder(sortOrder === 'projects' ? 'blog' : 'projects')}>
          {sortOrder === 'projects' ? 'Show Blogs First' : 'Show Projects First'}
        </button>
      </div>

      <div className="posts-wrapper">
        <div className="posts">
          {sortedPosts.map((post, index) => (
            <div className="post" key={index}>
              <img src={post.image} alt={post.title} />
              <div className="details">
                <div className="title">{post.title}</div>
                <div className="language">
                  <img src={post.pin} alt="Pin Logo" />
                  {post.language} <span>&#8226;</span> 
                  <a href={post.github}><img src={github} alt="GitHub"/></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="current-project">
        <img src={currentProject.image} alt={currentProject.title} />
        <div className="details">
          <div className="title">{currentProject.title}</div>
          <div className="language">{currentProject.language}</div>
          <div className="progress">
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${currentProject.progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar">
        <button>
          <img src={home} alt="About" />
          About
        </button>
        <button>
          <img src={search} alt="Search" />
          Search
        </button>
        <button>
          <img src={library} alt="Library" />
          Library
        </button>
      </div>
    </div>
  );
};

export default App;
