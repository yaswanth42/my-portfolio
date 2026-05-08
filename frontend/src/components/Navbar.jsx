import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Contact'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="nav-container">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="logo"
        >
          <a href="#"><span className="text-gradient">YKD</span></a>
        </motion.div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{link}</a>
            </motion.li>
          ))}
          <motion.li
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: navLinks.length * 0.1 }}
          >
             <a href="#resume" className="btn btn-outline nav-btn">Resume</a>
          </motion.li>
        </ul>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`bar ${menuOpen ? 'bar1' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'bar2' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'bar3' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
