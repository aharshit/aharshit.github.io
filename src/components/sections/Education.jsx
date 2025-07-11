import React from 'react';
import { educationData } from '../../data/education';

const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-light mb-8 text-secondary">
          education
        </h2>
        
        <div className="space-y-8">
          {educationData.map((education, index) => (
            <div key={education.id} className="border-b border-primary pb-8 last:border-b-0">
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-xl text-secondary mb-2">
                  {education.degree}
                </h3>
                <div className="text-lg text-muted mb-1">
                  {education.institution} • {education.location}
                </div>
                <div className="text-muted">
                  {education.duration} • {education.gpa}
                </div>
              </div>
              
              {/* Coursework */}
              {education.coursework && (
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-muted mb-3">
                    relevant coursework
                  </h4>
                  <div className="text-muted">
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