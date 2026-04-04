import type { Project } from "../../types/projects";

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
};

function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__gradient-border">
        <button type="button" className="project-card__main" onClick={onClick}>
          <h2 className="project-card__title">
            {"< "}
            {project.title}
            {" >"}
          </h2>
          <img
            src={project.thumbnail}
            alt={project.title}
            className="project-card__thumbnail"
          />
          <p className="project-card__description">{project.description}</p>
          <div className="project-card__stack">
            {project.stack.map((technology) => (
              <span key={technology} className="project-card__tag">
                {technology}
              </span>
            ))}
          </div>
        </button>
      </div>
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card__link"
      >
        GitHub
      </a>
    </article>
  );
}

export default ProjectCard;
