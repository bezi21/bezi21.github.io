import React from 'react';
import "../styles/Services.css";

function Services() {
  const services = [
    {
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with modern frameworks.',
      icon: 'fa-laptop-code'
    },
    {
      title: 'Backend Development',
      description: 'Creating robust server-side applications and RESTful APIs.',
      icon: 'fa-server'
    },
    {
      title: 'Full Stack Web Applications',
      description: 'End-to-end web application development with MERN stack.',
      icon: 'fa-layer-group'
    },
    {
      title: 'Responsive Website Design',
      description: 'Designing websites that work perfectly on all devices and screen sizes.',
      icon: 'fa-mobile-alt'
    },
    {
      title: 'Database Design',
      description: 'Designing efficient database schemas and optimizing queries.',
      icon: 'fa-database'
    }
  ];

  return (
    <div className="services">
      <div className="container">
        <h2 className="section-title">What I Can Do</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;