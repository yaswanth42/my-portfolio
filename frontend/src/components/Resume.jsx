import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <h2 className="section-title">My <span className="neon-text-cyan">Resume</span></h2>
      
      <motion.div 
        className="resume-container glass-panel"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="resume-actions">
          <a href="#" className="btn btn-primary" download>
            <FaDownload style={{ marginRight: '8px' }} /> Download PDF
          </a>
        </div>
        
        <div className="resume-preview">
          {/* A minimal text representation of the resume */}
          <div className="resume-header">
            <h3>YASWANTH KUMAR DANDU</h3>
            <p>Full Stack Developer | B.Tech IT</p>
          </div>
          
          <div className="resume-body">
            <div className="resume-block">
              <h4>Education</h4>
              <div className="resume-item">
                <div className="resume-item-header">
                  <span>Gayatri Vidya Parishad College of Engineering (A)</span>
                  <span>Sep 2023 - Present</span>
                </div>
                <p>B.Tech in Information Technology (CGPA: 9.46/10)</p>
              </div>
            </div>
            
            <div className="resume-block">
              <h4>Technical Skills</h4>
              <p><strong>Languages:</strong> Java, C++, Python, JavaScript, C#</p>
              <p><strong>Web:</strong> React.js, Node.js, Express.js, HTML, CSS, .NET Core</p>
              <p><strong>Databases:</strong> MongoDB, MySQL</p>
              <p><strong>Tools:</strong> AWS, Azure, Docker, Git, GitHub</p>
            </div>
            
            <div className="resume-block">
              <h4>Experience</h4>
              <div className="resume-item">
                <div className="resume-item-header">
                  <span>AWS AI/ML Virtual Internship — EduSkills</span>
                  <span>May 2025 - July 2025</span>
                </div>
                <p>Developed scalable REST APIs and ML pipelines using SageMaker and Lambda.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
