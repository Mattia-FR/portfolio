import "./ProjectCard.css";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  year: number;
}

function ProjectCard({ title, image, description, year }: ProjectCardProps) {
  return (
    <article className="project">
      <img src={image} alt={description} />
      <section className="titleProject">
        <h3>{title}</h3>
        <p>{year}</p>
      </section>
      <hr />
    </article>
  );
}

export default ProjectCard;
