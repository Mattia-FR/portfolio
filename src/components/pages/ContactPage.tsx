import "./ContactPage.css";

function ContactPage() {
  return (
    <section className="contact-page">
      <h1 className="contact-page__title">Contactez-moi</h1>
      <p className="contact-page__description">
        Disponible pour un poste de développeur web junior. N'hésitez pas à me
        contacter sur LinkedIn ou à consulter mon GitHub.
      </p>
      <div className="contact-page__links">
        <a
          href="https://github.com/Mattia-FR"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/mattia-bouvier"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default ContactPage;
