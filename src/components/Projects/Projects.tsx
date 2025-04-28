import "./Projects.css";

function Projects() {
  return (
    <main className="mainProjects">
      <h2>&lt;projets /&gt;</h2>
      <section className="sectionProjects">
        <article className="project">
          <img
            src="/images/cookiePatron.png"
            alt="Une capture d'écran d'un site internet de vente de cookies en ligne"
          />
          <h3>:le cookie du patron</h3>
          <p>2025</p>
        </article>
        <article className="project">
          <img
            src="/images/cookiePatron.png"
            alt="Une capture d'écran d'un site internet de gestion d'arrosage de lantes d'intérieur"
          />
          <h3>:plantodoro</h3>
          <p>2025</p>
        </article>
        <article className="project">
          <img
            src="/images/cookiePatron.png"
            alt="Une capture d'écran d'un site internet sur Naruto"
          />
          <h3>:konoharchives</h3>
          <p>2025</p>
        </article>
        <article className="project">
          <img
            src="/images/cookiePatron.png"
            alt="Une capture d'écran d'une application mobile Tamagochi-like"
          />
          <h3>:tamagucci</h3>
          <p>2025</p>
        </article>
      </section>
      <section className="navProjects">
        <button type="button">[ accueil ]</button>
        <button type="button">[ à propos ]</button>
        <button type="button">[ contact ]</button>
      </section>
    </main>
  );
}

export default Projects;
