import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "/ le cookie du patron /",
      image: "/images/cookiePatron.png",
      description:
        "Une capture d'écran d'un site internet de vente de cookies en ligne",
      year: 2025,
    },
    {
      id: 2,
      title: "/ plantodoro /",
      image: "/images/plantodoro.png",
      description:
        "Une capture d'écran d'un site internet de gestion d'arrosage de plantes d'intérieur",
      year: 2025,
    },
    {
      id: 3,
      title: "/ konoharchives /",
      image: "/images/konohArchives.png",
      description: "Une capture d'écran d'un site internet sur Naruto",
      year: 2025,
    },
    {
      id: 4,
      title: "/ tamagucci /",
      image: "/images/cookiePatron.png",
      description:
        "Une capture d'écran d'une application mobile Tamagochi-like",
      year: 2025,
    },
  ];

  return (
    <main className="mainProjects" id="projects">
      <h2>&lt;projets /&gt;</h2>
      <section className="sectionProjects">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            year={project.year}
          />
        ))}
      </section>
      <section className="navProjects">
        <a href="#hero">
          <button type="button">[ accueil ]</button>
        </a>
        <a href="#about">
          <button type="button">[ à propos ]</button>
        </a>
        <a href="#contact">
          <button type="button">[ contact ]</button>
        </a>
      </section>
    </main>
  );
}

export default Projects;
