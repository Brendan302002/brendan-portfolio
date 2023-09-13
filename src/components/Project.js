import React, { useState } from 'react';
import './Project.css'; // Create this CSS file for styling
import logo from './assets/images/BG-Logo.jpg';

const projectsData = [
  {
    title: 'Project 1',
    description: 'This is the description for Project 1.',
    imageUrl: logo, // Relative URL to the image
  },
  {
    title: 'Project 2',
    description: 'This is the description for Project 2.',
    // Add more project objects here
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
          {/* Add more content for each project */}
        </div>
      ))}
      <button className="next-button" onClick={handleNext}>
        Next &gt;
      </button>
    </div>
  );
}

export default Projects;