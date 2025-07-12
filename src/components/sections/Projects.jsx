import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../../data/projects';

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    if (project.route) {
      navigate(project.route);
    }
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-light mb-8 text-secondary">
          projects
        </h2>

        <div className="space-y-16">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-muted rounded-full group-hover:bg-primary transition-colors"></div>
                  <h3
                    className={`text-xl text-secondary group-hover:text-primary transition-colors ${
                      project.route ? 'cursor-pointer' : ''
                    }`}
                    onClick={() => handleProjectClick(project)}
                  >
                    {project.title}
                  </h3>
                </div>

                {project.tech && (
                  <div className="text-sm text-muted">
                    {project.tech.join(' • ')}
                  </div>
                )}
              </div>

              <div className="ml-6 space-y-4">
                <div className="flex gap-4 text-xs">
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-muted hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ↗ code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="text-muted hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ↗ demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
