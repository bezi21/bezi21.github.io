import React from 'react';
import "../styles/projects.css";
function Projects() {
  const projects = [
    {
      title: 'Student Clearance System',
      tech: 'React, Node.js, MongoDB',
      description: 'A web-based system that automates student clearance processes.',
      icon: 'fa-graduation-cap'
    },
    {
      title: 'Personal Portfolio Website',
      tech: 'React, CSS',

      
      description: 'A professional website showcasing my skills and projects.',
      icon: 'fa-user'
    },
    {
      title: 'Web-Based Exam System',
      tech: 'MERN Stack',
      description: 'An online examination platform for students.',
      icon: 'fa-file-alt'
    }
  ];

  return (
    <div className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => ( 
            <div className="project-card" key={index}>  
              <div className="project-icon">
                <i className={`fas ${project.icon}`}></i>
              </div>
              <h3>{project.title}</h3>
              <div className="tech-tag">
                <i className="fas fa-code"></i> {project.tech}
              </div>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;