import "./Contact.css";

function Contact() {
  return (
    <main className="mainContact" id="contact">
      <h2>&lt;contact /&gt;</h2>
      <section className="iconsContainer">
        <a href="mailto:mattia.bouvier@protonmail.com">
          <img
            src="/images/protonmail.svg"
            alt="Protonmail"
            className="icons"
          />
        </a>
        <a href="https://www.linkedin.com/in/mattia-bouvier">
          <img src="/images/linkedin.svg" alt="LinkedIn" className="icons" />
        </a>
        <a href="https://github.com/Mattia-FR">
          <img src="/images/github.svg" alt="GitHub" className="icons" />
        </a>
      </section>
      <section className="navContact">
        <a href="#hero">
          <button type="button">[ accueil ]</button>
        </a>
        <a href="#projects">
          <button type="button">[ projets ]</button>
        </a>
        <a href="#about">
          <button type="button">[ à propos ]</button>
        </a>
      </section>
    </main>
  );
}

export default Contact;
