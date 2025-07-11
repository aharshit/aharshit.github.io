import React, { useState, useEffect } from 'react';
import { personalInfo } from '../../data/personalInfo';
import heroImage from '../../assets/image.jpg';

const Hero = () => {
  const [currentMood, setCurrentMood] = useState(0);
  
  const moods = [
    "ctrl+c, ctrl+v is my best friend",
    "it works on my machine 🤷‍♂️",
    "stack overflow's biggest fan",
    "professional googler",
    "semicolon placement expert",
    "console.log('why isn't this working?')",
    "writing comments that confuse future me",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMood((prev) => (prev + 1) % moods.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-light mb-4 transition-colors duration-300 text-secondary">
              hello i'm {personalInfo.name}
            </h1>
            
            <div className="text-lg md:text-xl mb-2 h-8 transition-colors duration-300 text-muted">
              <span className="animate-pulse">
                {moods[currentMood]}
              </span>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <img 
                src={heroImage}
                alt="Tired programmer at computer"
                className="w-80 md:w-96 h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;