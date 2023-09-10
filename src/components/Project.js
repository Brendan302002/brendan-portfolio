import React from 'react';
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
    
  },
  // Add more project objects here
];

function Projects() {
  return (
    <div className="projects-container">
      {projectsData.map((project, index) => (
        <div className="project-box" key={index}>
          <h2>{project.title}</h2>
          {project.imageUrl && <img src={project.imageUrl} alt={project.title} />}
          <p>{project.description}</p>
          {/* Add more content for each project */}
        </div>
      ))}
    </div>
  );
}

export default Projects;