import React, { useState } from 'react';
import "../styles/Resume.css";

// Images are stored in public folder - use absolute paths
const programmingCert = "/bezi7.jpg";
const aiCert = "/bezi3.jpg";
const androidCert = "/bezi5.jpg";
const internshipCert = "/bezi6.jpg";

function Resume() {
  const [expandedCert, setExpandedCert] = useState(null);

  const handleViewCertificate = (certImage) => {
    if (certImage) {
      window.open(certImage, '_blank');
    } else {
      alert('Certificate image not available.');
    }
  };

  // Handle CV download
  const handleDownloadCV = () => {
    const cvUrl = "/Bezawit_Asmamaw_CV1.pdf";
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Bezawit_Asmamaw_CV1.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <div className="resume-content">
          {/* Education Section */}
          <div className="resume-section">
            <h3><i className="fas fa-graduation-cap"></i> Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Software Engineering</h4>
              <p className="institution">Mekdela Amba University (MAU)</p>
              <p className="date">2021 - 2025</p>
              <p className="description">
                Focus on software development, web technologies, and database management.
              </p>
              <div className="achievement-badge">
                <i className="fas fa-trophy"></i>
                <span>Ranked 4th - Top 5 Projects (2025/26 Internship Cohort)</span>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="resume-section">
            <h3><i className="fas fa-briefcase"></i> Experience</h3>
            <div className="resume-item">
              <h4>Full-Stack Developer Intern</h4>
              <p className="institution">Clearance System for MAU - Mekdela Amba University</p>
              <p className="date">4-Month Internship Program</p>
              <ul className="responsibilities">
                <li>Developed frontend using React and Bootstrap</li>
                <li>Built RESTful APIs with Django</li>
                <li>Managed PostgreSQL and authentication</li>
                <li>Achieved 4th place ranking among Top 5 projects</li>
              </ul>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="resume-section">
            <h3><i className="fas fa-certificate"></i> Udacity Certifications</h3>
            
            {/* Certificate 1: Programming Fundamentals */}
            <div className="resume-item certificate-item">
              <div className="certificate-header">
                <div className="certificate-info">
                  <h4>Programming Fundamentals</h4>
                  <p className="institution">Udacity Nanodegree Program</p>
                  <p className="date">April 30, 2025</p>
                  <span className="cert-badge">Verified</span>
                </div>
                <div className="certificate-actions">
                  <button 
                    className="btn-view-cert" 
                    onClick={() => handleViewCertificate(programmingCert)}
                  >
                    <i className="fas fa-eye"></i> View
                  </button>
                </div>
              </div>
              <div className="certificate-preview">
                <img 
                  src={programmingCert} 
                  alt="Udacity Programming Fundamentals Certificate" 
                  className="certificate-image"
                />
                <div className="certificate-overlay">
                  <button 
                    className="btn-expand" 
                    onClick={() => handleViewCertificate(programmingCert)}
                  >
                    <i className="fas fa-expand"></i> View Full Certificate
                  </button>
                </div>
              </div>
            </div>

            {/* Certificate 2: Artificial Intelligence Fundamentals */}
            <div className="resume-item certificate-item">
              <div className="certificate-header">
                <div className="certificate-info">
                  <h4>Artificial Intelligence Fundamentals</h4>
                  <p className="institution">Udacity Nanodegree Program</p>
                  <p className="date">May 25, 2025</p>
                  <span className="cert-badge">Verified</span>
                </div>
                <div className="certificate-actions">
                  <button 
                    className="btn-view-cert" 
                    onClick={() => handleViewCertificate(aiCert)}
                  >
                    <i className="fas fa-eye"></i> View
                  </button>
                </div>
              </div>
              <div className="certificate-preview">
                <img 
                  src={aiCert} 
                  alt="Udacity Artificial Intelligence Fundamentals Certificate" 
                  className="certificate-image"
                />
                <div className="certificate-overlay">
                  <button 
                    className="btn-expand" 
                    onClick={() => handleViewCertificate(aiCert)}
                  >
                    <i className="fas fa-expand"></i> View Full Certificate
                  </button>
                </div>
              </div>
            </div>

            {/* Certificate 3: Android Developer Fundamentals */}
            <div className="resume-item certificate-item">
              <div className="certificate-header">
                <div className="certificate-info">
                  <h4>Android Developer Fundamentals</h4>
                  <p className="institution">Udacity Nanodegree Program</p>
                  <p className="date">May 25, 2025</p>
                  <span className="cert-badge">Verified</span>
                </div>
                <div className="certificate-actions">
                  <button 
                    className="btn-view-cert" 
                    onClick={() => handleViewCertificate(androidCert)}
                  >
                    <i className="fas fa-eye"></i> View
                  </button>
                </div>
              </div>
              <div className="certificate-preview">
                <img 
                  src={androidCert} 
                  alt="Udacity Android Developer Fundamentals Certificate" 
                  className="certificate-image"
                />
                <div className="certificate-overlay">
                  <button 
                    className="btn-expand" 
                    onClick={() => handleViewCertificate(androidCert)}
                  >
                    <i className="fas fa-expand"></i> View Full Certificate
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Internship Certificate Section */}
          <div className="resume-section">
            <h3><i className="fas fa-award"></i> Internship Certificate</h3>
            <div className="resume-item certificate-item">
              <div className="certificate-header">
                <div className="certificate-info">
                  <h4>Certificate of Appreciation</h4>
                  <p className="institution">Clearance System for MAU Project</p>
                  <p className="date">2025/26 Internship Cohort</p>
                  <div className="achievement-badge">
                    <i className="fas fa-medal"></i>
                    <span>Ranked 4th - Top 5 Projects</span>
                  </div>
                </div>
                <div className="certificate-actions">
                  <button 
                    className="btn-view-cert" 
                    onClick={() => handleViewCertificate(internshipCert)}
                  >
                    <i className="fas fa-eye"></i> View
                  </button>
                </div>
              </div>
              <div className="certificate-preview">
                <img 
                  src={internshipCert} 
                  alt="Certificate of Appreciation - Clearance System for MAU" 
                  className="certificate-image"
                />
                <div className="certificate-overlay">
                  <button 
                    className="btn-expand" 
                    onClick={() => handleViewCertificate(internshipCert)}
                  >
                    <i className="fas fa-expand"></i> View Full Certificate
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Download CV Button */}
          <div className="resume-download">
            <button className="btn btn-download" onClick={handleDownloadCV}>
              <i className="fas fa-download"></i> Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;