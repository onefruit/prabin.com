import React from 'react';
import './About.css';
import resumeData from '../data/resume.json';

const About = () => {
    const { aboutSummary } = resumeData.personalInfo;
    const { stats } = resumeData;

    return (
        <section className="about section-padding" id="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-text">
                        <p>{aboutSummary}</p>
                    </div>
                </div>

                <div className="stats-container">
                    {stats.map((stat, index) => (
                        <div className="stat-item glass" key={index}>
                            <h3 className="stat-value gradient-text">{stat.value}</h3>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
