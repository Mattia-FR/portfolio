import { useState } from "react";
import "./ProjectsPage.css";
import ProjectCard from "../../components/molecules/ProjectCard";
import { Modal } from "../../components/organisms/Modal";
import projectsData from "../../data/projects.ts";
import type { Project } from "../../types/projects";

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="projects-page">
      <h1 className="projects-page__title">Mes projets</h1>
      <div className="projects-page__list">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
      <Modal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div className="projects-page__modal-content">
            <h2 className="projects-page__modal-title">
              {"< "}
              {selectedProject.title}
              {" >"}
            </h2>
            <p className="projects-page__modal-description">
              {selectedProject.description}
            </p>
            <ul className="projects-page__modal-highlights">
              {selectedProject.highlights.map((highlight) => (
                <li key={highlight} className="projects-page__modal-highlight">
                  {highlight}
                </li>
              ))}
            </ul>
            <ul className="projects-page__modal-stack">
              {selectedProject.stack.map((technology) => (
                <li key={technology} className="projects-page__modal-tag">
                  {technology}
                </li>
              ))}
            </ul>
            <div className="projects-page__modal-links">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

export default ProjectsPage;
