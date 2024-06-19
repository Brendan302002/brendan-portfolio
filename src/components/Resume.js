import React from 'react';
import './Resume.css'; // Import your CSS file for styling

const Resume = () => (
  <div className="resume-container">
    <iframe
      src={`${process.env.PUBLIC_URL}/Resume_Brendan_Goddard.pdf`}
      title="Resume"
      width="100%"
      height="800px"
      style={{ border: 'none' }}
    >
      This browser does not support PDFs. Please download the PDF to view it: <a href={`${process.env.PUBLIC_URL}/Resume_Brendan_Goddard.pdf`} target="_blank" rel="noopener noreferrer">Download PDF</a>
    </iframe>
  </div>
);

export default Resume;
