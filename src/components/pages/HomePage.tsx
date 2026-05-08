import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <section className="home-page">
      <div className="home-page__header">
        <h1 className="home-page__title">Mattia Bouvier</h1>
        <p className="home-page__subtitle">
          <span className="pink">{"/*"}</span> Développeur web · React ·
          TypeScript · Node.js · Express · MySQL{" "}
          <span className="pink">{"*/"}</span>
        </p>
      </div>
      <div className="home-page__content">
        <p className="home-page__description">
          <span className="pink">{"<"}</span> En reconversion depuis l'animation
          socioculturelle, j'ai appris à coder à la Wild Code School et ne me
          suis pas arrêté là. Je construis des projets web — du frontend au
          fullstack — pour continuer à progresser.{" "}
          <span className="pink">{"/>"}</span>
        </p>
        <div className="home-page__links">
          <Link
            to="/projects"
            viewTransition
            className="home-page__link ghost-btn"
          >
            Voir mes projets
          </Link>
          <Link to="/contact" viewTransition className="home-page__link cta">
            Me contacter
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
