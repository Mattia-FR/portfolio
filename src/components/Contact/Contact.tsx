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
      if (!contactSectionRef.current) return;

      const computedStyle = getComputedStyle(document.documentElement);
      const colorOne = computedStyle.getPropertyValue("--color-three").trim();
      const colorTwo = computedStyle.getPropertyValue("--color-one").trim();

      gsap.fromTo(
        contactSectionRef.current,
        { backgroundColor: colorOne },
        {
          backgroundColor: colorTwo,
          immediateRender: false,
          scrollTrigger: {
            trigger: contactSectionRef.current,
            start: "top 90%",
            end: "top 50%",
            scrub: true,
          },
        },
      );

      if (!protonmailRef.current || !linkedinRef.current || !githubRef.current)
        return;

      const iconElements = [
        protonmailRef.current,
        linkedinRef.current,
        githubRef.current,
      ];

      gsap.set(iconElements, { opacity: 0, y: 30 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contactSectionRef.current,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(iconElements, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.4)",
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
