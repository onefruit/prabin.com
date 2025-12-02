import React from 'react';
import './Projects.css';
import resumeData from '../data/resume.json';

const Projects = () => {
    const { projects } = resumeData;

    const handleMouseMove = (e) => {
        for (const card of document.getElementsByClassName("project-card")) {
            const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        }
    };

    return (
        <section className="projects section-padding" id="projects" onMouseMove={handleMouseMove}>
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card glass" key={index}>
                            <div className="project-content">
                                <h3 className="project-title">{project.name}</h3>
                                <div className="project-features">
                                    <h4>Key Features:</h4>
                                    <ul>
                                        {project.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
