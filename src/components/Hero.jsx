import React, { useState, useEffect } from 'react';
import './Hero.css';
import resumeData from '../data/resume.json';

const Hero = () => {
    const { name, role, summary } = resumeData.personalInfo;
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = [role, "Frontend Developer", "Backend Developer", "Problem Solver"];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, roles, typingSpeed]);

    return (
        <section className="hero" id="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="greeting">Hello, I'm</span>
                    <h1 className="hero-name gradient-text">{name}</h1>
                    <h2 className="hero-role">
                        I am a <span className="typing-text">{text}</span>
                        <span className="cursor">|</span>
                    </h2>
                    <p className="hero-summary">{summary}</p>
                    <div className="hero-buttons">
                        <a href="#services" className="btn btn-primary">View Services</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="glow-circle"></div>
                    <div className="abstract-shape"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
