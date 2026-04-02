import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <section className="home-page">
      <h1 className="home-page__title">Mattia Bouvier</h1>
      <p className="home-page__subtitle">
        Développeur web · React · TypeScript · Node.js · Express · MySQL
      </p>
      <p className="home-page__description">
        En reconversion depuis l'animation socioculturelle, j'ai appris à coder
        à la Wild Code School et je ne me suis pas arrêté là. Je construis des
        projets web — du frontend au fullstack — pour continuer à progresser.
      </p>
      <div className="home-page__links">
        <Link to="/projects" className="home-page__link">
          Voir mes projets
        </Link>
        <Link to="/contact" className="home-page__link">
          Me contacter
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
