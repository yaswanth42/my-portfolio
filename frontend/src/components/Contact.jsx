import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Use relative path in production, localhost in development
      const apiUrl = import.meta.env.DEV ? 'http://localhost:5000' : '';
      const res = await axios.post(`${apiUrl}/api/contact`, formData);
      setStatus({ type: 'success', message: res.data.message || 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Let's <span className="neon-text-purple">Connect</span></h2>
      
      <motion.div 
        className="contact-container glass-panel"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>I'm always open to discussing product design work, backend architecture, or partnership opportunities.</p>
          <div className="contact-details">
            <p><strong>Email:</strong> danduyaswanthyash@gmail.com</p>
            <p><strong>Phone:</strong> +91 95500 78195</p>
            <p><strong>Location:</strong> Visakhapatnam, India</p>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                rows="5" 
                value={formData.message} 
                onChange={handleChange} 
                required 
              ></textarea>
            </div>
            
            {status && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}

            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
