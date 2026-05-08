import github from "../../assets/github-icon.png";
import linkedin from "../../assets/linkedin-icon.png";
import "./ContactPage.css";

function ContactPage() {
  return (
    <section className="contact-page">
      <h1 className="contact-page__title">Me contacter</h1>
      <div className="contact-page__container">
        <p className="contact-page__description">
          <span className="pink">{"<"}</span> Disponible pour un poste de
          développeur web. N'hésitez pas à me contacter sur LinkedIn ou à
          consulter mon GitHub. <span className="pink">{"/>"}</span>
        </p>
        <div className="contact-page__links">
          <a
            href="https://linkedin.com/in/mattia-bouvier"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-page__link"
          >
            <img src={linkedin} alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Mattia-FR"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-page__link"
          >
            <img src={github} alt="GitHub" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
