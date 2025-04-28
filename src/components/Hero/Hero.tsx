import "./Hero.css";

function Hero() {
  return (
    <main className="mainHero" id="hero">
      <h1>mattia bouvier</h1>
      <h2>&lt;web dev /&gt;</h2>
      <section className="navHero">
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
