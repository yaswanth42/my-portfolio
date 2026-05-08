import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="app-container">
      {loading ? (
        <Loader finishLoading={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Achievements />
            <Resume />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
