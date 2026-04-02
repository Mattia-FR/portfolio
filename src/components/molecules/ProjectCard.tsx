import type { Project } from "../../types/projects";

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
};

function ProjectCard({ project, onClick }: ProjectCardProps) {
  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <button type="button" className="project-card" onClick={onClick}>
      <h2 className="project-card__title">
        {"< "}
        {project.title}
        {" >"}
      </h2>
      <p className="project-card__description">{project.description}</p>
      <div className="project-card__stack">
        {project.stack.map((technology) => (
          <span key={technology} className="project-card__tag">
            {technology}
          </span>
        ))}
      </div>
      <div className="project-card__links">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
        >
          GitHub
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
          >
            Live
          </a>
        )}
      </div>
    </button>
  );
}

export default ProjectCard;
