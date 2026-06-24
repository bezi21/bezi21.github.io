import React from 'react';
import "../styles/Skills.css";
function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: 'fa-code',
      skills: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
      title: 'Backend',
      icon: 'fa-server',
      skills: ['Node.js', 'Express.js','Django']
    },
    {
      title: 'Database',
      icon: 'fa-database',
      skills: ['MongoDB', 'MySQL','PostgreSQL']
    },
    {
      title: 'Tools',
      icon: 'fa-tools',
      skills: ['Git', 'GitHub', 'VS Code']
    }
  ];

  return (
    <div className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-header">
                <i className={`fas ${category.icon}`}></i>
                <h3>{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check-circle"></i>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;