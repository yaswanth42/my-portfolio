import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiExpress, SiMongodb, SiMysql, SiDotnet } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { VscAzure } from 'react-icons/vsc';
import './Skills.css';

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "Java", icon: <FaJava color="#f89820" /> },
      { name: "C++", icon: <SiCplusplus color="#00599C" /> },
      { name: "C#", icon: <TbBrandCSharp color="#239120" /> },
      { name: "Python", icon: <FaPython color="#3776AB" /> },
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> }
    ]
  },
  {
    category: "Web Technologies",
    skills: [
      { name: "React.js", icon: <FaReact color="#61DAFB" /> },
      { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
      { name: "Express.js", icon: <SiExpress color="#ffffff" /> },
      { name: ".NET Core", icon: <SiDotnet color="#512BD4" /> }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> }
    ]
  },
  {
    category: "Tools & Cloud",
    skills: [
      { name: "AWS", icon: <FaAws color="#FF9900" /> },
      { name: "Azure", icon: <VscAzure color="#0089D6" /> },
      { name: "Docker", icon: <FaDocker color="#2496ED" /> },
      { name: "Git", icon: <FaGitAlt color="#F05032" /> }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Technical <span className="neon-text-cyan">Arsenal</span></h2>
      
      <div className="skills-grid">
        {skillsData.map((category, idx) => (
          <motion.div 
            key={idx}
            className="skill-category glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h3>{category.category}</h3>
            <div className="skill-items">
              {category.skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-icon">{skill.icon}</div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
