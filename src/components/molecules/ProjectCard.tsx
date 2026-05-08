import github from "../../assets/github-icon.png";
import type { ProjectCardProps } from "../../types/projects";

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
        </button>
      </div>
      <div className="project-card__links">
        {project.githubUrl.map((url, i) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
          >
            <img src={github} alt="GitHub" />
            <span>{project.githubNames?.[i] || `GitHub ${i + 1}`}</span>
          </a>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
