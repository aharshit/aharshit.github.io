import React from 'react';
import { experienceData } from '../../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-light mb-8 text-secondary">
          experience
        </h2>
        
        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <div key={experience.id} className="border-b border-primary pb-8 last:border-b-0">
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-xl text-secondary mb-2">
                  {experience.position}
                </h3>
                <div className="text-lg text-muted mb-1">
                  {experience.company} • {experience.location}
                </div>
                <div className="text-muted">
                  {experience.duration}
                </div>
              </div>
              
              {/* Responsibilities */}
              {experience.responsibilities && (
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-muted mb-3">
                    key responsibilities
                  </h4>
                  <div className="space-y-2">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <div key={idx} className="text-muted leading-relaxed">
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