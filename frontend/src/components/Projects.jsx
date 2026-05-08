import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projectsData = [
  {
    title: "Voice of the People (Grievance System)",
    description: "A comprehensive public grievance platform designed to streamline complaint registration, tracking, and resolution processes. Built with scalable backend architecture to handle high concurrent user traffic efficiently.",
    metrics: [
      "Supported 100+ concurrent users with scalable APIs",
      "Reduced API response time by 30% through optimized queries",
      "Implemented secure role-based authentication using JWT"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/Yaswanth-Kumar-Dandu",
    demo: "#",
    featured: true
  },
  {
    title: "AI Career Advisor Web App",
    description: "A full-stack platform providing personalized career guidance and recommendations. Features a real-time chatbot and optimized modular architecture for efficient handling of structured user data.",
    metrics: [
      "Integrated real-time chatbot using WebSockets for low-latency communication",
      "Optimized backend performance to support concurrent users with reduced latency",
      "Designed REST APIs for structured data processing"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "WebSockets"],
    github: "https://github.com/Yaswanth-Kumar-Dandu",
    demo: "#",
    featured: true
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Featured <span className="neon-text-purple">Projects</span></h2>
      
      <div className="projects-grid">
        {projectsData.map((project, idx) => (
          <motion.div 
            key={idx}
            className="project-card glass-panel"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="project-content">
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer"><FaGithub /></a>
                  <a href={project.demo} target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a>
                </div>
              </div>
              
              <p className="project-desc">{project.description}</p>
              
              <div className="project-metrics">
                <h4>Key Impact:</h4>
                <ul>
                  {project.metrics.map((metric, i) => (
                    <li key={i}>{metric}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
