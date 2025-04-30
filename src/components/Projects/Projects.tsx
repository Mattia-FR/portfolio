import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import type { Project } from "../../types/Project";
import type { JSX } from "react";

function Projects(): JSX.Element {
  const projects: Project[] = [
    {
      id: 1,
      title: "/ le cookie du patron /",
      image: "/images/cookiePatron.png",
      description:
        "Une capture d'écran d'un site internet de vente de cookies en ligne",
      year: 2025,
      stack: ["React", "Node.js", "Express", "MySQL", "Stripe API"],
      features: [
        "Catalogue de produits avec système de filtrage",
        "Panier d'achat avec persistance",
        "Système de paiement sécurisé via Stripe",
        "Authentification utilisateur",
        "Interface d'administration pour la gestion des produits",
      ],
    },
    {
      id: 2,
      title: "/ plantodoro /",
      image: "/images/plantodoro.png",
      description:
        "Une capture d'écran d'un site internet de gestion d'arrosage de plantes d'intérieur",
      year: 2025,
      stack: ["React", "Node.js", "Express", "MySQL"],
      features: [
        "Suivi d'arrosage de plantes avec notifications",
        "Base de données de plantes avec conseils d'entretien",
        "Mode hors ligne avec synchronisation",
      ],
    },
    {
      id: 3,
      title: "/ konoharchives /",
      image: "/images/konohArchives.png",
      description: "Une capture d'écran d'un site internet sur Naruto",
      year: 2025,
      stack: ["React", "Node.js", "Express", "MySQL"],
      features: ["Encyclopédie complète des personnages de Naruto"],
    },
    {
      id: 4,
      title: "/ tamagucci /",
      image: "/images/cookiePatron.png",
      description:
        "Une capture d'écran d'une application mobile Tamagochi-like",
      year: 2025,
      stack: ["React Native"],
      features: [
        "Créature virtuelle avec animation 2D",
        "Système de jauges",
        "Notifications push",
      ],
    },
  ];

  return (
    <main className="mainProjects" id="projects">
      <h2>&lt;projets /&gt;</h2>
      <section className="sectionProjects">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
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
