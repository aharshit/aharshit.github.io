import React, { useState } from 'react';
import Navigation from './components/common/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Resume from './components/sections/Resume';
import { useTheme } from './useTheme';

const App = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [activeView, setActiveView] = useState('home');

  const renderView = () => {
    switch (activeView) {
      case 'home':
        return (
          <div className="min-h-screen">
            <Hero />
            <About />
            <Projects />
            <Contact />
          </div>
        );
      case 'resume':
        return (
          <div className="min-h-screen">
            <Resume />
            <Education />
            <Experience />
            <Contact />
          </div>
        );
      default:
        return (
          <div className="min-h-screen">
            <Hero />
            <About />
            <Projects />
            <Contact />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-primary">
      <Navigation 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        activeView={activeView} 
        setActiveView={setActiveView}
      />
      {renderView()}
    </div>
  );
};

export default App;