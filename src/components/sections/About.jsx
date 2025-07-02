import React from 'react';
import { personalInfo } from '../../data/personalInfo';
import { skills } from '../../data/skills';
import { certificates } from '../../data/certificates';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-light mb-8 text-gray-400">
          about me i guess
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-2">
            <p className="text-gray-300 leading-loose mb-6 text-lg">
              {personalInfo.bio.intro}
            </p>
            <p className="text-gray-400 leading-relaxed opacity-90">
              {personalInfo.bio.additional}
            </p>
          </div>
          
          <div>
            <h3 className="text-gray-400 mb-6 text-sm uppercase tracking-wider">
              things i can do
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="text-white text-sm font-medium mb-2">
                    {skill.category.toLowerCase()}
                  </div>
                  <div className="text-gray-500 text-xs leading-relaxed">
                    {skill.items.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-gray-400 text-sm uppercase tracking-wider">
              some certificates
            </h3>
            <div className="h-px bg-gradient-to-r from-gray-800 to-transparent flex-1"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {certificates.map((certificate, index) => (
              <div 
                key={certificate.id} 
                className="text-gray-500 text-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-gray-400">{certificate.name}</span>
                <span className="text-gray-600 mx-2">—</span>
                <span className="text-gray-500">{certificate.issuer}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;