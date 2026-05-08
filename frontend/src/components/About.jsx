import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.png';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-container glass-panel"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About <span className="neon-text-purple">Me</span></h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate <strong>Full Stack Developer</strong> specializing in the MERN stack, with a deep-rooted focus on building scalable web applications and robust backend systems.
            </p>
            <p>
              My journey in tech is driven by a relentless problem-solving mindset. With over <strong>400+ Data Structures & Algorithms</strong> problems solved, I don't just write code; I engineer optimized solutions designed for high performance and reliability.
            </p>
            <p>
              Currently pursuing my B.Tech in Information Technology (CGPA: 9.46), I bridge the gap between theoretical computer science and practical, impact-driven product engineering. Whether it's designing REST APIs capable of handling concurrent workloads or optimizing database queries to reduce response times, I thrive on complex architectural challenges.
            </p>

            <div className="strengths-grid">
              <div className="strength-item">
                <span className="strength-title text-gradient">MERN Stack</span>
                <span className="strength-desc">React, Node, Express, MongoDB</span>
              </div>
              <div className="strength-item">
                <span className="strength-title text-gradient">System Design</span>
                <span className="strength-desc">Scalable Architectures & APIs</span>
              </div>
              <div className="strength-item">
                <span className="strength-title text-gradient">DSA</span>
                <span className="strength-desc">Optimized Problem Solving</span>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="image-container">
              <img src={profilePic} alt="Yaswanth Kumar Dandu" className="profile-image" />
              <div className="image-backdrop"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
