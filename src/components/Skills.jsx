import React from 'react';
import './Skills.css';
import resumeData from '../data/resume.json';

const Skills = () => {
    const { skills } = resumeData;

    return (
        <section className="skills section-padding" id="skills">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {Object.entries(skills).map(([category, items], index) => (
                        <div className="skill-category glass" key={index}>
                            <h3 className="category-title">{category}</h3>
                            <div className="skill-tags">
                                {items.map((skill, i) => (
                                    <span className="skill-tag" key={i}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
