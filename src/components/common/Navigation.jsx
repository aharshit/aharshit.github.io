import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../../data/personalInfo';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Simple text logo */}
        <a href="#home" className="text-gray-300 text-lg cursor-pointer hover:text-white">
          hi
        </a>

        {/* Basic nav links */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-white hover:text-gray-300">about</a>
          <a href="#experience" className="text-white hover:text-gray-300">experience</a>
          <a href="#education" className="text-white hover:text-gray-300">education</a>
          <a href="#projects" className="text-white hover:text-gray-300">projects</a>
          <a href="#contact" className="text-white hover:text-gray-300">contact</a>
        </div>

        {/* Social icons */}
        <div className="flex space-x-3">
          <a href={personalInfo.social.email} className="text-white hover:text-gray-300">
            <FiMail className="w-5 h-5" />
          </a>
          <a href={personalInfo.social.github} className="text-white hover:text-gray-300">
            <FiGithub className="w-5 h-5" />
          </a>
          <a href={personalInfo.social.linkedin} className="text-white hover:text-gray-300">
            <FiLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;