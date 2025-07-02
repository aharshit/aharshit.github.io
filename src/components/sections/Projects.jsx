import React from 'react';
import { projects } from '../../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-normal mb-16 text-gray-300">
          projects
        </h2>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.id} className="group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-gray-400 transition-colors"></div>
                  <h3 className="text-xl text-white group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                {project.tech && (
                  <div className="text-sm text-gray-400">
                    {project.tech.join(' • ')}
                  </div>
                )}
              </div>
              
              <div className="ml-6 space-y-4">
                
                {(project.github || project.demo) && (
                  <div className="flex gap-4 text-xs">
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-gray-500 hover:text-gray-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ↗ code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="text-gray-500 hover:text-gray-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ↗ demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;