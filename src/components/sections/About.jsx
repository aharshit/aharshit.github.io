import React from 'react';
import { personalInfo } from '../../data/personalInfo';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-light mb-8 text-secondary">
          about me i guess
        </h2>
        
        <div className="grid lg:grid-cols-1 gap-12 mb-12">
          <div>
            <p className="leading-loose mb-6 text-lg text-secondary">
              {personalInfo.bio.intro}
            </p>
            <p className="leading-relaxed opacity-90 text-muted">
              {personalInfo.bio.additional}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;