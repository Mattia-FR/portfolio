import { useRef } from "react";
import "./Contact.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function Contact() {
  // Référence pour la section entière
  const contactSectionRef = useRef(null);

  // Références pour les icônes individuelles
  const protonmailRef = useRef(null);
  const linkedinRef = useRef(null);
  const githubRef = useRef(null);

  useGSAP(
    () => {
      // S'assurer que les références sont disponibles
      if (!protonmailRef.current || !linkedinRef.current || !githubRef.current)
        return;

      // Créer un tableau avec toutes les références d'icônes
      const iconElements = [
        protonmailRef.current,
        linkedinRef.current,
        githubRef.current,
      ];

      // Définir les icônes comme initialement invisibles
      gsap.set(iconElements, { opacity: 0, y: 30 });

      // Créer la timeline d'animation
      const tl = gsap.timeline({ paused: true });

      tl.to(iconElements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
      });

      // Créer le ScrollTrigger qui jouera l'animation quand l'utilisateur arrive à la section
      ScrollTrigger.create({
        trigger: contactSectionRef.current,
        start: "top 80%", // Déclenche quand le haut de la section atteint 80% depuis le haut de la fenêtre
        onEnter: () => tl.play(),
        // markers: true // Pour le débogage - à désactiver en production
      });

      // Pas besoin de faire le nettoyage manuellement - useGSAP s'en charge
    },
    { scope: contactSectionRef },
  ); // Définir le scope pour le context

  return (
    <main className="mainContact" id="contact" ref={contactSectionRef}>
      <h2>&lt;contact /&gt;</h2>
      <section className="iconsContainer">
        <a href="mailto:mattia.bouvier@protonmail.com" ref={protonmailRef}>
          <img
            src="/images/protonmail.svg"
            alt="Protonmail"
            className="icons"
          />
        </a>
        <a href="https://www.linkedin.com/in/mattia-bouvier" ref={linkedinRef}>
          <img src="/images/linkedin.svg" alt="LinkedIn" className="icons" />
        </a>
        <a href="https://github.com/Mattia-FR" ref={githubRef}>
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
