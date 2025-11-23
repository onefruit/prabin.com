import React from 'react';
import './Footer.css';
import resumeData from '../data/resume.json';

const Footer = () => {
    const { name, role, email, phone, location, linkedin, github } = resumeData.personalInfo;

    return (
        <footer className="footer-section">


            <div className="footer-content">
                <div className="container footer-grid">
                    <div className="footer-col">
                        <h3 className="footer-name gradient-text">{name}</h3>
                        <p className="footer-role">{role}</p>
                        <div className="footer-socials">
                            {linkedin && <a href={`https://linkedin.com/in/${linkedin}`} target="_blank" rel="noopener noreferrer" className="social-icon">in</a>}
                            {github && <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer" className="social-icon">gh</a>}
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-heading">Services</h4>
                        <ul className="footer-links">
                            <li>Backend Development</li>
                            <li>Frontend Development</li>
                            <li>Cloud Solutions</li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-heading">Contact Info</h4>
                        <ul className="footer-contact">
                            <li>
                                <span className="icon">📞</span>
                                <span>{phone}</span>
                            </li>
                            <li>
                                <span className="icon">✉️</span>
                                <span>{email}</span>
                            </li>
                            <li>
                                <span className="icon">📍</span>
                                <span>{location}</span>
                            </li>
                            {github && (
                                <li>
                                    <span className="icon">🐙</span>
                                    <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer">github.com/{github}</a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
