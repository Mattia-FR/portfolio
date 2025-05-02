import { useRef, useEffect } from "react";
import "./AnimatedBackground.css";

type CodeElement = {
  x: number;
  y: number;
  word: string;
  size: number;
  opacity: number;
  speed: number;
};

function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const codeElements = useRef<CodeElement[]>([]);
  const rafId = useRef<number>(0);

  // Liste de mots liés à JavaScript et HTML
  const codeWords = [
    ".then()",
    ".catch()",
    ".finally()",
    ".map()",
    ".filter()",
    ".reduce()",
    ".push()",
    ".pop()",
    ".slice()",
    ".splice()",
    "<div>",
    "</div>",
    "<span>",
    "</span>",
    "<p>",
    "</p>",
    "<h1>",
    "</h1>",
    "<ul>",
    "</ul>",
    "<li>",
    "</li>",
    "<a>",
    "</a>",
    "<input/>",
    "<img/>",
    "<br/>",
    "<hr/>",
    "=>",
    "...",
    "++",
    "--",
    "+=",
    "-=",
    "*=",
    "/=",
    "===",
    "!==",
    "&&",
    "||",
    "?.",
    "??",
    "()",
    "[]",
    "{}",
    "${}",
    "#{}",
    "/* */",
    "//",
    "/** */",
    "`${}`",
    "...rest",
    "...spread",
    "()=>{}",
    "function(){}",
    "class{}",
    "try{}",
    "catch{}",
    "finally{}",
    "if(){}",
    "else{}",
    "for(){}",
    "while(){}",
    "switch(){}",
    "case:",
    "default:",
    "import{}",
    "export{}",
    "`string`",
    "/regex/",
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Ajuster la taille du canvas
    const resizeCanvas = () => {
      if (canvas?.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
        initElements(); // Réinitialiser les éléments après redimensionnement
      }
    };

    // Initialiser les éléments de code
    const initElements = () => {
      codeElements.current = [];
      // Ajusté pour avoir moins de mots (car ils sont plus grands que des caractères)
      const elementCount = Math.min(Math.floor(canvas.width / 20), 60);

      for (let i = 0; i < elementCount; i++) {
        codeElements.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          word: codeWords[Math.floor(Math.random() * codeWords.length)],
          size: Math.random() * 6 + 8, // Taille légèrement réduite pour les mots
          opacity: Math.random() * 0.3 + 0.1,
          speed: Math.random() * 0.8 + 0.4, // Vitesse comme demandé précédemment
        });
      }
    };

    // Dessiner et animer les éléments
    const drawElements = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < codeElements.current.length; i++) {
        const el = codeElements.current[i];

        // Déplacement vertical
        el.y += el.speed;

        // Mesurer la largeur du mot pour éviter qu'il ne commence hors de l'écran
        ctx.font = `${el.size}px monospace`;
        const wordWidth = ctx.measureText(el.word).width;

        // Réinitialiser quand l'élément sort de l'écran
        if (el.y > canvas.height) {
          el.y = -30;
          // S'assurer que le mot est entièrement visible horizontalement
          el.x = Math.random() * (canvas.width - wordWidth);
          el.word = codeWords[Math.floor(Math.random() * codeWords.length)];
        }

        // Dessiner le mot
        ctx.fillStyle = "var(--color-two)";
        ctx.globalAlpha = el.opacity;
        ctx.fillText(el.word, el.x, el.y);
      }

      ctx.globalAlpha = 1;
      rafId.current = requestAnimationFrame(drawElements);
    };

    // Mettre en place l'animation
    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();
    initElements();
    rafId.current = requestAnimationFrame(drawElements);

    // Nettoyage
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="animated-background" />;
}

export default AnimatedBackground;
