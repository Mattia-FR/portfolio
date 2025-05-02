import { useRef } from "react";
import "./Contact.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const contactSectionRef = useRef(null);
  const protonmailRef = useRef(null);
  const linkedinRef = useRef(null);
  const githubRef = useRef(null);

  useGSAP(
    () => {
      if (!protonmailRef.current || !linkedinRef.current || !githubRef.current)
        return;

      const iconElements = [
        protonmailRef.current,
        linkedinRef.current,
        githubRef.current,
      ];

      gsap.set(iconElements, { opacity: 0, y: 30 });
      const tl = gsap.timeline({ paused: true });

      tl.to(iconElements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
      });

      ScrollTrigger.create({
        trigger: contactSectionRef.current,
        start: "top 60%",
        onEnter: () => tl.play(),
        // markers: true // Pour le débogage - à désactiver en production
      });
    },
    { scope: contactSectionRef },
  );

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
