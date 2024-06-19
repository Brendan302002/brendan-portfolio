import React from 'react';
import './Home.css';
import myPicture from './assets/images/profile/IMG_3557.jpeg'; // Replace with your actual image path
import topImage1 from './assets/images/Linked-in.png'; // Replace with your actual image path
import topImage2 from './assets/images/github-img.png'; // Replace with your actual image path

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="top-right-links">
          <a href="https://www.linkedin.com/in/brendan-goddard/" target="_blank" rel="noopener noreferrer">
            <img src={topImage1} alt="LinkedIn" />
          </a>
          <a href="https://github.com/Brendan302002" target="_blank" rel="noopener noreferrer">
            <img src={topImage2} alt="GitHub" />
          </a>
        </div>
        <div className="welcome-text">
          <img src={myPicture} alt="Brendan Goddard" className="profile-picture" />
          <h1>Welcome to My Website</h1>
          <p>Hello, I'm Brendan Goddard. I'm thrilled to have you here! As a dedicated software developer, I have a deep passion for creating meaningful applications and exploring the exciting world of game development. 
             This website showcases my journey, projects, and interests. Feel free to explore and connect!</p>
        </div>
      </div>
    );
  }
}

export default Home;
