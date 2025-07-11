import React from 'react';
import { personalInfo } from '../../data/personalInfo';
import { skills } from '../../data/skills';
import { certificates } from '../../data/certificates';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-light mb-8 text-gray-600 dark:text-gray-400">
          about me i guess
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-2">
            <p className="leading-loose mb-6 text-lg text-gray-700 dark:text-gray-300">
              {personalInfo.bio.intro}
            </p>
            <p className="leading-relaxed opacity-90 text-gray-600 dark:text-gray-400">
              {personalInfo.bio.additional}
            </p>
          </div>
          
          <div>
            <h3 className="mb-6 text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400">
              things i can do
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="text-sm font-medium mb-2 text-gray-900 dark:text-white">
                    {skill.category.toLowerCase()}
                  </div>
                  <div className="text-xs leading-relaxed text-gray-500">
                    {skill.items.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t pt-8 border-gray-200 dark:border-gray-800/50">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400">
              some certificates
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {certificates.map((certificate, index) => (
              <div
                key={certificate.id}
                className="text-sm text-gray-600 dark:text-gray-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-gray-700 dark:text-gray-400">
                  {certificate.name}
                </span>
                <span className="mx-2 text-gray-500 dark:text-gray-600">
                  —
                </span>
                <span className="text-gray-600 dark:text-gray-500">
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

export default About;