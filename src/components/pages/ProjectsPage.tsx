import { useState } from "react";
import "./ProjectsPage.css";
import ProjectCard from "../../components/molecules/ProjectCard";
import { Modal } from "../../components/organisms/Modal";
import projectsData from "../../data/projects.ts";
import type { Project } from "../../types/projects";

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const mainProjects = projectsData.filter((p) => p.tier === "main");
  const secondaryProjects = projectsData.filter((p) => p.tier === "secondary");

  return (
    <section className="projects-page">
      <h1 className="projects-page__title">Mes projets</h1>
      <div className="projects-page__list projects-page__list-main">
        <h2 className="projects-page__list-title">
          <span className="pink">{"/*"}</span> Projets globaux{" "}
          <span className="pink">{"*/"}</span>
        </h2>
        {mainProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
      <div className="projects-page__list projects-page__list-secondary">
        <h2 className="projects-page__list-title">
          <span className="pink">{"/*"}</span> Projets ciblés{" "}
          <span className="pink">{"*/"}</span>
        </h2>
        {secondaryProjects.map((project) => (
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
            <img
              src={selectedProject.thumbnail}
              alt={selectedProject.title}
              className="projects-page__modal-thumbnail"
            />
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
          </div>
        )}
      </Modal>
    </section>
  );
}

export default ProjectsPage;
