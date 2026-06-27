
import { ArrowUpRight, Github } from 'lucide-react';
import { projects } from '../data/portfolio';

function Projects() {
  return (
    <section id="projects" className="section">
      <p className="sectionLabel">Projects</p>
      <h2>Selected work</h2>

      <div className="projectsGrid">
        {projects.map((project) => (
          <article className="projectCard" key={project.title}>
            <img src={project.image} alt={project.title} />

            <div className="projectContent">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="techList">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="projectLinks">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live <ArrowUpRight size={16} />
                </a>

                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  Code <Github size={16} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
