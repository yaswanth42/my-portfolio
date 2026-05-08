import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaBriefcase } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Professional <span className="text-gradient">Experience</span></h2>
      
      <div className="timeline">
        <motion.div 
          className="timeline-item glass-panel"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="timeline-icon">
            <FaBriefcase />
          </div>
          <div className="timeline-content">
            <div className="exp-header">
              <h3>AI/ML Intern</h3>
              <span className="exp-date">May 2025 - July 2025</span>
            </div>
            <h4 className="exp-company"><FaAws className="aws-icon"/> AWS Virtual Internship — EduSkills</h4>
            
            <ul className="exp-details">
              <li>Developed and deployed machine learning solutions using <strong>AWS SageMaker, Lambda, API Gateway, and S3</strong>.</li>
              <li>Designed backend <strong>REST APIs</strong> to integrate ML models into scalable applications.</li>
              <li>Processed and analyzed datasets using cloud-based pipelines for efficient model training.</li>
              <li>Built scalable systems handling concurrent workloads with high availability and performance optimization.</li>
              <li>Collaborated in a team environment following agile practices to deliver production-ready solutions.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
