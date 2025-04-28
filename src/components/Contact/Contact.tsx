import "./Contact.css";

function Contact() {
  return (
    <main className="mainContact" id="contact">
      <h2>&lt;contact /&gt;</h2>
      <ul>
        <li>mail : mattia.bouvier@protonmail.com</li>
        <li>linkedin : https://www.linkedin.com/in/mattia-bouvier/</li>
        <li>github : https://github.com/Mattia-FR</li>
      </ul>
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
