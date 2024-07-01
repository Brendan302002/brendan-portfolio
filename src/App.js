// App.js

import React from 'react';
import './App.css';

import profile from './components/assets/images/profile/IMG_3557.jpeg';
import search from './components/assets/images/searchlogo.png';
import home from './components/assets/images/homelogo.png';
import library from './components/assets/images/library.png';

const App = () => {
  const posts = [
    { title: 'First Playlist', language: 'JavaScript', image: 'https://via.placeholder.com/100', pin: 'https://via.placeholder.com/14' },
    { title: 'Second Playlist', language: 'Python', image: 'https://via.placeholder.com/100', pin: 'https://via.placeholder.com/14' },
    { title: 'Third Playlist', language: 'C++', image: 'https://via.placeholder.com/100', pin: 'https://via.placeholder.com/14' },
    { title: 'Fourth Playlist', language: 'Ruby', image: 'https://via.placeholder.com/100', pin: 'https://via.placeholder.com/14' },
    { title: 'Fifth Playlist', language: 'Java', image: 'https://via.placeholder.com/100', pin: 'https://via.placeholder.com/14' },
    { title: 'Sixth Playlist', language: 'Go', image: 'https://via.placeholder.com/100', pin: 'https://via.placeholder.com/14' },
  ];

  const currentProject = {
    title: 'Current Project',
    image: 'https://via.placeholder.com/150',
    progress: 70, // progress in percentage
  };

  return (
    <div className="App">
      <div className="header">
        <img src={profile} alt="Profile" />
        <div className="info">
          <div className="name">Brendan Goddard</div>
          <div className="role">Software Developer</div>
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
      </div>

      <div className="posts-wrapper">
        <div className="posts">
          {posts.map((post, index) => (
            <div className="post" key={index}>
              <img src={post.image} alt={post.title} />
              <div className="details">
                <div className="title">{post.title}</div>
                <div className="language">
                  <img src={post.pin} alt="Pin Logo" />{post.language}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="current-project">
        <img src={currentProject.image} alt={currentProject.title} />
        <div className="title">{currentProject.title}</div>
        <div className="progress">
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${currentProject.progress}%` }}
            ></div>
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
