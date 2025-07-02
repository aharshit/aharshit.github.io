import React, { useState, useEffect } from 'react';
import { personalInfo } from '../../data/personalInfo';
import heroImage from '../../assets/sleeping-computer-keyboard-tired-overworked-office-worker-businessman-office-vector-cartoon-stick-figure-businessman-215504142.webp';

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
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-normal mb-4 text-gray-300">
              hello i'm {personalInfo.name}
            </h1>
                     
            <div className="text-lg md:text-xl text-gray-500 mb-2 h-8">
              <span className="animate-pulse">
                {moods[currentMood]}
              </span>
            </div>
          </div>

          {/* Image */}
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
             
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 0.75; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;