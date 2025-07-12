import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/common/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Resume from './components/sections/Resume';
import Matrix from './projects/Matrix';
import { useTheme } from './useTheme';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  
  const HomePage = () => (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Projects />
    </div>
  );
  
  const ResumePage = () => (
    <div className="min-h-screen">
      <Resume />
      <Education />
      <Experience />
    </div>
  );
  
  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden bg-primary">
        <ScrollToTop />
        <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/matrix" element={<Matrix />} />
        </Routes>
        
        <Contact />
      </div>
    </Router>
  );
};

export default App;