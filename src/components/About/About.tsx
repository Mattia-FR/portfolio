import "./About.css";

function About() {
  return (
    <main className="mainAbout" id="about">
      <h2>&lt;à propos /&gt;</h2>
      <section className="textAbout">
        <p>
          Développeur web front-end et back-end en reconversion, passionné par
          la création d'applications modernes, dynamiques et responsive.
        </p>
        <p>
          Après un parcours dans l'animation socioculturelle et les espaces
          verts, j’ai suivi un bootcamp intensif à la Wild Code School pour me
          former aux technologies web. Aujourd’hui, je cherche à intégrer une
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
