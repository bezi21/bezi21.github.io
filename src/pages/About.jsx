import React from 'react';
import "../styles/About.css";
import profileImage from "../assets/fiya3.jpg";

function About() {
  // Handle CV download
  const handleDownloadCV = () => {
    // Link to your CV in the public folder
    const cvUrl = "/Bezawit_Asmamaw_CV1.pdf";
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Bezawit_Asmamaw_CV1.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        {/* Top Section: Text and Image */}
        <div className="about-wrapper">
          <div className="about-text">
            <div className="about-header">
              <h3>Hello, I'm <span className="highlight-name">Bezawit Asmamaw</span></h3>
              <div className="title-badge">Full-Stack Developer</div>
            </div>
            
            <div className="about-description">
              <p>
                I am Bezawit Asmamaw, a passionate Full-Stack Web Developer with a strong focus on building practical and accessible web applications. I specialize in the MERN stack (MongoDB, Express.js, React, and Node.js) and enjoy creating modern, scalable, and user-friendly systems.
              </p>
              <p>
                Currently, I am working on my final year project: an <strong>Online Examination System for Blind Students</strong>. This project is designed to improve accessibility in education by providing an inclusive exam platform that supports students with visual impairments. It focuses on usability, accessibility, and smooth user interaction.
              </p>
              <p>
                Through this project, I am strengthening my skills in:
              </p>
              <ul className="skills-list">
                <li>Frontend development using React</li>
                <li>Backend API development using Node.js and Express.js</li>
                <li>Database design and management using MongoDB</li>
                <li>Building real-world full-stack applications</li>
              </ul>
              <p>
                I am passionate about solving real-world problems using technology, especially in the areas of education, accessibility, and digital systems. My goal is to become a professional software engineer who builds impactful solutions that make a difference in people's lives.
              </p>
            </div>

            <div className="about-actions">
              <button className="btn btn-download" onClick={handleDownloadCV}>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </button>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-wrapper">
              <img src={profileImage} alt="Bezawit Asmamaw" />
              <div className="image-overlay">
                <div className="social-links">
                  <a href="https://github.com/account" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://t.me/fiyamata21" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Telegram">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </a>
                  <a href="https://tiktok.com/@bezi21214" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Info Cards */}
        <div className="info-cards-section">
          <div className="info-cards-wrapper">
            <div className="info-card">
              <div className="card-header">
                <div className="card-icon">🎓</div>
                <h3>Education</h3>
              </div>
              <div className="card-body">
                <h4>Bachelor of Software Engineering</h4>
                <p className="institution">Mekdela Amba University</p>
                <p className="duration">2021 - 2025</p>
                <div className="card-tags">
                  <span className="tag">GPA: 3.4/4.0</span>
                  <span className="tag">Honors</span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="card-header">
                <div className="card-icon">🎯</div>
                <h3>Career Goals</h3>
              </div>
              <div className="card-body">
                <h4>Senior Full-Stack Developer</h4>
                <p className="goal-item">Build scalable web applications</p>
                <p className="goal-item">Contribute to open-source projects</p>
                <p className="goal-item">Lead development teams</p>
                <div className="card-tags">
                  <span className="tag">Leadership</span>
                  <span className="tag">Innovation</span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="card-header">
                <div className="card-icon">💼</div>
                <h3>Internship</h3>
              </div>
              <div className="card-body">
                <h4>Full-Stack Developer Intern</h4>
                <p className="project-name">Student Clearance System</p>
                <div className="tech-stack">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Django</span>
                  <span className="tech-tag">PostgreSQL</span>
                </div>
                <div className="card-tags">
                  <span className="tag">4 Months</span>
                  <span className="tag">Remote</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;