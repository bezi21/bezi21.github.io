import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const form = e.target;
      const formData = new FormData(form);
      
      const response = await fetch('https://formsubmit.co/ajax/fiyaasmamaw@gmail.com', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        setErrorMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">
          Have a question or want to work together? Let's connect!
        </p>

        <div className="contact-wrapper">
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            <h3 className="contact-info-title">Let's Talk</h3>
            <p className="contact-info-sub">
              I'm always interested in hearing about new opportunities, 
              collaborations, or just having a chat. Feel free to reach out!
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-content">
                  <h4>Email</h4>
                  <a href="mailto:fiyaasmamaw@gmail.com">fiyaasmamaw@gmail.com</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="info-content">
                  <h4>Phone</h4>
                  <a href="tel:+251912492122">+251 912 492 122</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-content">
                  <h4>Location</h4>
                  <p>Ethiopia</p>
                </div>
              </div>
 
            </div>

            <div className="contact-social">
              <h4>Connect With Me</h4>
              <div className="social-icons">
                <a href="https://github.com/account" target="_blank" rel="noopener noreferrer" className="social-icon github">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://t.me/fiyamata21" target="_blank" rel="noopener noreferrer" className="social-icon telegram">
                  <i className="fab fa-telegram"></i>
                </a>
                <a href="https://tiktok.com/@bezi21214" target="_blank" rel="noopener noreferrer" className="social-icon tiktok">
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form-wrapper">
            {!isSuccess ? (
              <>
                <h3 className="contact-form-title">Send Me a Message</h3>
                <p className="contact-form-sub">
                  Fill in the form below and I'll get back to you as soon as possible.
                </p>

                {errorMessage && (
                  <div className="error-banner">
                    <i className="fas fa-exclamation-circle"></i>
                    {errorMessage}
                  </div>
                )}

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">
                        Full Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">
                        Email Address <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">
                      Subject <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      placeholder="Enter message subject"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      placeholder="Write your message here..."
                      rows="5"
                      required
                    ></textarea>
                  </div>

                  {/* FormSubmit hidden fields */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_subject" value="New Contact Form Submission!" />
                  <input type="hidden" name="_autoresponse" value="Thank you for your message! I'll get back to you soon." />

                  <button type="submit" className="btn-submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span> Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i> Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button 
                  className="btn-submit" 
                  onClick={() => setIsSuccess(false)}
                  style={{ marginTop: '10px' }}
                >
                  <i className="fas fa-plus"></i> Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;