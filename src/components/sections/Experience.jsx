import React from 'react';
import { experienceData } from '../../data/experience';

const Experience = ({ isDarkMode }) => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-normal mb-12 text-gray-700 dark:text-gray-300">
          experience
        </h2>
        
        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <div key={experience.id} className="border-b border-gray-200 dark:border-gray-800 pb-8 last:border-b-0">
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl text-gray-900 dark:text-white mb-2">
                  {experience.position}
                </h3>
                <div className="text-lg text-gray-600 dark:text-gray-400 mb-1">
                  {experience.company} • {experience.location}
                </div>
                <div className="text-gray-500">
                  {experience.duration}
                </div>
              </div>
              
              {/* Responsibilities */}
              {experience.responsibilities && (
                <div>
                  <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-3">
                    key responsibilities
                  </h4>
                  <div className="space-y-2">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <div key={idx} className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        • {responsibility}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;