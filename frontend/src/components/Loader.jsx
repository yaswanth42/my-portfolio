import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const Loader = ({ finishLoading }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timeout = setTimeout(() => {
      finishLoading();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [finishLoading]);

  return (
    <motion.div 
      className="loader-container"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      <motion.div
        className="loader-logo"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-gradient">YKD.</span>
      </motion.div>
      <div className="loader-progress-bar">
        <motion.div 
          className="loader-progress"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default Loader;
