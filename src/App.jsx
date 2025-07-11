import React from 'react';
import Navigation from './components/common/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import { useTheme } from './useTheme';

const App = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
       <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;