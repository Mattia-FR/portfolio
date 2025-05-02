import { useRef, useEffect } from "react";
import "./Hero.css";
import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";
import gsap from "gsap";

function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Animation d'entrée avec GSAP optimisée pour mobile
    if (titleRef.current && subtitleRef.current && navRef.current) {
      // Réglage initial des éléments
      gsap.set([titleRef.current, subtitleRef.current], {
        y: 20,
        opacity: 0,
      });

      gsap.set(navRef.current, {
        y: 10,
        opacity: 0,
      });

      // Timeline d'animation optimisée pour mobile (plus rapide)
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.1,
      })
        .to(
          subtitleRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          },
          "-=0.3",
        )
        .to(
          navRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          },
          "-=0.2",
        );
    }
  }, []);

  return (
    <main className="mainHero" id="hero">
      <AnimatedBackground />
      <h1 ref={titleRef}>mattia bouvier</h1>
      <h2 ref={subtitleRef}>&lt;web dev /&gt;</h2>
      <section className="navHero" ref={navRef}>
        <a href="#projects">
          <button type="button">[ projets ]</button>
        </a>
        <a href="#about">
          <button type="button">[ à propos ]</button>
        </a>
        <a href="#contact">
          <button type="button">[ contact ]</button>
        </a>
      </section>
    </main>
  );
}

export default Hero;
