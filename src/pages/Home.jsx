import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Home.css";
import profileImage from "../assets/bezi2.jpg"; // Make sure path is correct

function Home() {
  const textRef = useRef(null);

  useEffect(() => {
    // Typing effect for the job title
    const jobTitle = "Software Engineering Student";
    const jobTitleElement = document.querySelector('.typing-text');
    
    if (jobTitleElement) {
      let index = 0;
      let isDeleting = false;
      
      const typeEffect = () => {
        if (!isDeleting && index <= jobTitle.length) {
          jobTitleElement.textContent = jobTitle.slice(0, index);
          index++;
          setTimeout(typeEffect, 100);
        } else if (isDeleting && index >= 0) {
          jobTitleElement.textContent = jobTitle.slice(0, index);
          index--;
          setTimeout(typeEffect, 50);
        } else if (index > jobTitle.length) {
          isDeleting = true;
          setTimeout(typeEffect, 2000);
        } else if (index < 0) {
          isDeleting = false;
          setTimeout(typeEffect, 500);
        }
      };
      
      typeEffect();
    }
  }, []);

  return (
    <section className="home-section" id="home">
      <div className="home-container">
        <div className="home-grid">
          {/* Left Content */}
          <div className="home-content">
            <div className="home-text">
              <div className="badge-wrapper">
                <span className="badge">
                  <i className="fas fa-hand-peace"></i> Welcome to my Portfolio
                </span>
              </div>

              <h1 className="hero-title">
                I'm <span className="highlight">Bezi</span>
                <br />
                <span className="typing-text"></span>
                <span className="cursor-blink">|</span>
              </h1>

              <div className="bio-wrapper">
                <p className="bio">
                  <i className="fas fa-quote-left quote-icon"></i>
                  I'm Full-Stack Web Developer specializing in <strong>React</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>.
                  Currently working on a <strong>final project: an Online Examination System for Blind Students</strong>, designed to improve accessibility in education through technology.
                </p>
              </div>

              <div className="cta-buttons">
                <Link to="/projects" className="btn btn-primary">
                  <i className="fas fa-arrow-right"></i> View Projects
                  <span className="btn-glow"></span>
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  <i className="fas fa-envelope"></i> Contact Me
                </Link>
              </div>

              {/* Social Links Section */}
              <div className="social-links-section">
                <span className="social-label">Connect with me:</span>
                <div className="social-links-group">
                  <a 
                    href="https://github.com/account"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link github"
                    aria-label="GitHub"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://t.me/@fiyamata21"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link telegram"
                    aria-label="Telegram"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://tiktok.com/@bezi21214"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link tiktok"
                    aria-label="TikTok"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image - With Social Links Overlay */}
          <div className="home-image-wrapper">
            <div className="image-container">
              <div className="image-frame">
                <img 
                  src={profileImage}
                  alt="Bezawit Asmamaw - Full-Stack Developer" 
                  className="profile-image"
                />
                <div className="image-overlay">
                  <div className="social-links">
                    <a 
                      href="https://github.com/account" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label="GitHub"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://t.me/@fiyamata21"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label="Telegram"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://tiktok.com/@yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label="TikTok"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="floating-element floating-element-1"></div>
              <div className="floating-element floating-element-2"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;