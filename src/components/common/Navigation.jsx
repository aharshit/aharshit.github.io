import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiSun, FiMoon } from 'react-icons/fi';
import { personalInfo } from '../../data/personalInfo';

const Navigation = ({ isDarkMode, toggleTheme }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-colors duration-300 bg-white/20 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <div className="hidden md:flex space-x-6">
          <Link 
            to="/"
            className={`transition-colors duration-300 ${
              currentPath === '/' 
                ? 'text-secondary font-medium' 
                : 'text-primary hover:text-secondary'
            }`}
          >
            home
          </Link>
          <Link 
            to="/resume"
            className={`transition-colors duration-300 ${
              currentPath === '/resume' 
                ? 'text-secondary font-medium' 
                : 'text-primary hover:text-secondary'
            }`}
          >
            resume
          </Link>
        </div>

        <div className="flex space-x-3 items-center">
          <a 
            href={personalInfo.social.email}
            className="transition-colors duration-300 text-primary hover:text-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMail className="w-5 h-5" />
          </a>
          <a 
            href={personalInfo.social.github}
            className="transition-colors duration-300 text-primary hover:text-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a 
            href={personalInfo.social.linkedin}
            className="transition-colors duration-300 text-primary hover:text-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-all duration-300 text-secondary hover:text-primary hover:bg-surface"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
