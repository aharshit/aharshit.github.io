import React from 'react';
import { experienceData } from '../../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-normal mb-12 text-gray-300">
          experience
        </h2>
        
        <div className="space-y-16">
          {experienceData.map((experience, index) => (
            <div key={experience.id} className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <h3 className="text-xl text-white mb-2">
                  {experience.position}
                </h3>
                <div className="text-gray-400 mb-1">
                  {experience.company}
                </div>
                <div className="text-gray-500 text-sm">
                  {experience.location}
                </div>
                <div className="text-gray-500 text-sm mt-2">
                  {experience.duration}
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <div className="space-y-3">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <div key={idx} className="text-gray-400 leading-relaxed">
                      • {responsibility}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;