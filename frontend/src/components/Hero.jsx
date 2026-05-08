import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode, FaHackerrank } from 'react-icons/fa';
import { SiCodechef, SiCodeforces } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="greeting">Hi, I'm <span className="neon-text-cyan">Yaswanth Kumar Dandu</span></h2>
          <h1 className="hero-title">
            Building <span className="text-gradient">Scalable</span> Web Applications & Systems
          </h1>
          <p className="hero-subtitle">
            Full Stack Developer | Problem Solver | MERN Stack Expert
          </p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
            <a href="#resume" className="btn btn-outline">Resume</a>
          </div>

          <div className="social-links">
            <a href="https://github.com/yaswanth42" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/yaswanth-kumar-dandu/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://leetcode.com/u/yaswanth_34/" target="_blank" rel="noreferrer" aria-label="LeetCode" title="LeetCode">
              <FaCode />
            </a>
            <a href="https://www.codechef.com/users/yaswanth_34" target="_blank" rel="noreferrer" aria-label="CodeChef" title="CodeChef">
              <SiCodechef />
            </a>
            <a href="https://codeforces.com/profile/yaswanth_34" target="_blank" rel="noreferrer" aria-label="Codeforces" title="Codeforces">
              <SiCodeforces />
            </a>
            <a href="https://www.hackerrank.com/profile/yaswanth_43" target="_blank" rel="noreferrer" aria-label="HackerRank" title="HackerRank">
              <FaHackerrank />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
