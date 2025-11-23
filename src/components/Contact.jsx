import React from 'react';
import './Contact.css';
import resumeData from '../data/resume.json';

const Contact = () => {
    const { email, phone, location } = resumeData.personalInfo;

    return (
        <section className="contact section-padding" id="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-container glass">
                    <div className="contact-info-section">
                        <h3>Let's Talk</h3>
                        <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <span className="icon">📧</span>
                                <a href={`mailto:${email}`}>{email}</a>
                            </div>
                            <div className="contact-item">
                                <span className="icon">📱</span>
                                <span>{phone}</span>
                            </div>
                            <div className="contact-item">
                                <span className="icon">📍</span>
                                <span>{location}</span>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form">
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
