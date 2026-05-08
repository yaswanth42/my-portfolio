import React from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { FaTrophy, FaMedal, FaCertificate, FaCode } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <h2 className="section-title">Milestones & <span className="neon-text-cyan">Achievements</span></h2>
      
      <div className="achievements-grid">
        <motion.div 
          className="achievement-card glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="ach-icon"><FaCode /></div>
          <h3>400+ DSA Solved</h3>
          <p>Consistently solving complex algorithmic problems across LeetCode, Codeforces, and CodeChef.</p>
        </motion.div>

        <motion.div 
          className="achievement-card glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="ach-icon"><FaTrophy /></div>
          <h3>LeetCode Rating: 1616</h3>
          <p>Achieved top percentile ranking in competitive programming contests.</p>
        </motion.div>

        <motion.div 
          className="achievement-card glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="ach-icon"><FaMedal /></div>
          <h3>GDGC Core Team</h3>
          <p>Core Team Member at Google Developer Groups on Campus (GDGC), leading technical initiatives.</p>
        </motion.div>

        <motion.div 
          className="achievement-card glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="ach-icon"><FaCertificate /></div>
          <h3>AWS Certified</h3>
          <p>Certified in AWS Cloud Foundations and Machine Learning Foundations.</p>
        </motion.div>
      </div>

      <motion.div 
        className="github-contributions glass-panel"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3>GitHub Contributions</h3>
        <div className="calendar-wrapper">
          <GitHubCalendar 
            username="yaswanth42" 
            colorScheme="dark"
            theme={{
              dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
