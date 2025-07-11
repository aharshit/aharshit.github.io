import React from 'react';
import { educationData } from '../../data/education';

const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-normal mb-12 text-gray-700 dark:text-gray-300">
          education
        </h2>
        
        <div className="space-y-8">
          {educationData.map((education, index) => (
            <div key={education.id} className="border-b border-gray-200 dark:border-gray-800 pb-8 last:border-b-0">
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl text-gray-900 dark:text-white mb-2">
                  {education.degree}
                </h3>
                <div className="text-lg text-gray-600 dark:text-gray-400 mb-1">
                  {education.institution} • {education.location}
                </div>
                <div className="text-gray-500">
                  {education.duration} • {education.gpa}
                </div>
              </div>
              
              {/* Coursework */}
              {education.coursework && (
                <div>
                  <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-3">
                    relevant coursework
                  </h4>
                  <div className="text-gray-600 dark:text-gray-400">
                    {education.coursework.join(', ')}
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

export default Education;