import { useRef } from "react";
import "./About.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutSectionRef = useRef(null);

  useGSAP(
    () => {
      if (!aboutSectionRef.current) return;

      const computedStyle = getComputedStyle(document.documentElement);
      const colorOne = computedStyle.getPropertyValue("--color-two").trim();
      const colorTwo = computedStyle.getPropertyValue("--color-three").trim();

      gsap.fromTo(
        aboutSectionRef.current,
        {
          backgroundColor: colorOne,
        },
        {
          backgroundColor: colorTwo,
          immediateRender: false,
          scrollTrigger: {
            trigger: aboutSectionRef.current,
            start: "top 75%",
            end: "top top",
            scrub: true,
          },
        },
      );
    },
    { scope: aboutSectionRef },
  );

  return (
    <main className="mainAbout" id="about" ref={aboutSectionRef}>
      <h2>&lt;à propos /&gt;</h2>
      <section className="textAbout">
        <p>
          Développeur web front-end et back-end en reconversion, passionné par
          la création d'applications modernes, dynamiques et responsive.
        </p>
        <p>
          Après un parcours dans l'animation socioculturelle et les espaces
          verts, j'ai suivi un bootcamp intensif à la Wild Code School pour me
          former aux technologies web. Aujourd'hui, je cherche à intégrer une
          équipe dynamique pour mettre mes compétences au service de projets
          concrets, tout en continuant à apprendre et progresser.
        </p>
        <p>
          Spécialités : React, Node.js, Express, HTML, CSS, Git, gestion de
          projet agile avec Trello.
        </p>
      </section>
      <section className="navAbout">
        <a href="#hero">
          <button type="button">[ accueil ]</button>
        </a>
        <a href="#projects">
          <button type="button">[ projets ]</button>
        </a>
        <a href="#contact">
          <button type="button">[ contact ]</button>
        </a>
      </section>
    </main>
  );
}

export default About;
