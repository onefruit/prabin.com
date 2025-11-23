import React from 'react';
import './Services.css';
import resumeData from '../data/resume.json';

const Services = () => {
    const { services } = resumeData;

    return (
        <section className="services section-padding" id="services">
            <div className="container">
                <h2 className="section-title">Services I Offer</h2>
                <p className="section-subtitle">Comprehensive IT solutions for your business needs</p>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card glass" key={index}>
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
