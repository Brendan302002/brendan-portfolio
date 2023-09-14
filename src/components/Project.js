import React, { useState } from 'react';
import './Project.css'; // Create this CSS file for styling
import logo from './assets/images/BG-Logo.jpg';
//import live from './assets/images/Live.jpg';
import git from './assets/images/github-img.png';

const projectsData = [
  {
    title: 'Unity Golf',
    description: 'This game was created in Unity, using C#, and 3D sprites to make a golf game, then deployed to webGL',
    imageUrl: logo,
  },
  {
    title: 'SQL - LINQ Project',
    description: 'This project demonstrates the basics of the Linq to entities framework. It runs a C# test application, which runs a linq query to an SQL server object, giving results to the user',
    imageUrl: logo,
  },
];

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < projectsData.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  return (
    
    <div className="projects-container">
      <>
      
      <button className="prev-button" onClick={handlePrev}>
        &lt; Prev
      </button>
      {projectsData.map((project, index) => (
        <div
          className={`project-box ${currentIndex === index ? 'active' : ''}`}
          key={index}
        >
          <h2>{project.title}</h2>
          {project.imageUrl && (
            <img src={project.imageUrl} alt={project.title} />
          )}
          <p>{project.description}</p>
          <div className='button'>
              <a href="https://github.com/Brendan302002" target="_blank">
              <img src={git} alt="GitHub" />
              <p>Source Code</p>
              </a>
              <a href="https://www.linkedin.com/in/brendan-goddard/" target="_blank">
                <img src={git} alt="LinkedIn" />
                <p>Live Demo</p>
              </a>
          </div>
        </div>
      ))}
      
   
      </>
    </div>

    
    
    
  );
}

export default Projects;