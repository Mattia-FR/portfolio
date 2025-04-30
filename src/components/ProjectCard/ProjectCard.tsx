import { type JSX, useState } from "react";
import "./ProjectCard.css";
import Modal from "../Modal/Modal";
import type { Project } from "../../types/Project";

type ProjectCardProps = Project;

function ProjectCard({
  title,
  image,
  description,
  year,
  stack,
  features,
}: ProjectCardProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (): void => setIsModalOpen(true);
  const closeModal = (): void => setIsModalOpen(false);

  return (
    <>
      <article
        className="projectCard"
        onClick={openModal}
        onKeyDown={(e): void => {
          if (e.key === "Enter" || e.key === " ") openModal();
        }}
        role="button"
        tabIndex={0}
        aria-label={`Voir les détails du projet ${title}`}
      >
        <img src={image} alt={description} />
        <div className="projectCardInfo">
          <h3>{title}</h3>
          <p className="projectCardYear">{year}</p>
        </div>
      </article>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="project-modal">
          <h3>{title}</h3>
          <div>
            <p className="projectCardYear">{year}</p>
            {stack && stack.length > 0 && (
              <div className="project-modal-stack">
                {stack.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            )}
          </div>
          {features && features.length > 0 && (
            <div className="project-modal-features">
              <h4>Fonctionnalités principales:</h4>
              <ul>
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}

export default ProjectCard;
