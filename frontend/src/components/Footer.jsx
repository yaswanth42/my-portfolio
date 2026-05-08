import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="text-gradient">YKD.</span>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Yaswanth Kumar Dandu. All rights reserved.
        </p>
        <p className="built-with">
          Built with React & MERN Stack. Designed for scale.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
