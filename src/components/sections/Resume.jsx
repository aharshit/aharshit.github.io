import React from 'react';
import { skills } from '../../data/skills';
import { certificates } from '../../data/certificates';

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-light mb-2 text-secondary">
                  things i can do
                </h2>
                <div className="h-0.5 bg-primary w-24"></div>
              </div>
              <a 
                href="https://drive.google.com/file/d/1TUVI5STjdOsWVnbolD7Sn4WHuVL-p7w6/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-white transition-colors text-sm  tracking-wider"
              >
                view full resume
              </a>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="text-sm font-medium mb-2 text-primary">
                    {skill.category.toLowerCase()}
                  </div>
                  <div className="text-xs leading-relaxed text-muted">
                    {skill.items.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t pt-12 border-primary">
          <div className="mb-8">
            <h2 className="text-2xl font-light mb-2 text-secondary">
              some certificates
            </h2>
            <div className="h-0.5 bg-primary w-24"></div>
          </div>
                     
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {certificates.map((certificate, index) => (
              <div
                key={certificate.id}
                className="text-sm text-muted"
              >
                <span className="text-secondary">
                  {certificate.name}
                </span>
                <span className="mx-2 text-muted">
                  —
                </span>
                <span className="text-muted">
                  {certificate.issuer}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;