import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiSun, FiMoon } from 'react-icons/fi';
import { personalInfo } from '../../data/personalInfo';

const Navigation = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-colors duration-300 bg-white/20 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <div className="hidden md:flex space-x-6">
          <a 
            href="#about" 
            className="transition-colors duration-300 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
          >
            about
          </a>
          <a 
            href="#experience" 
            className="transition-colors duration-300 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
          >
            experience
          </a>
          <a 
            href="#education" 
            className="transition-colors duration-300 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
          >
            education
          </a>
          <a 
            href="#projects" 
            className="transition-colors duration-300 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
          >
            projects
          </a>
          <a 
            href="#contact" 
            className="transition-colors duration-300 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
          >
            contact
          </a>
        </div>

        <div className="flex space-x-3 items-center">
          <a 
            href={personalInfo.social.email} 
            className="transition-colors duration-300 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
            target='_blank'
          >
            <FiMail className="w-5 h-5" />
          </a>
          <a 
            href={personalInfo.social.github} 
            className="transition-colors duration-300 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
            target='_blank'
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a 
            href={personalInfo.social.linkedin} 
            className="transition-colors duration-300 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
            target='_blank'
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-all duration-300 text-gray-700 dark:text-yellow-400 hover:text-gray-900 dark:hover:text-yellow-300 hover:bg-gray-200 dark:hover:bg-gray-800"
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