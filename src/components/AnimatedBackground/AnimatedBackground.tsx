import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./AnimatedBackground.css";

type CodeElement = {
  x: number;
  y: number;
  word: string;
  size: number;
  opacity: number;
  speed: number;
};

const CODE_WORDS: string[] = [
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

function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const codeElements = useRef<CodeElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const init = () => {
        if (!canvas.parentElement) return;

        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;

        codeElements.current = Array.from(
          { length: Math.min(Math.floor(canvas.width / 20), 60) },
          () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            word: CODE_WORDS[Math.floor(Math.random() * CODE_WORDS.length)],
            size: Math.random() * 6 + 8,
            opacity: Math.random() * 0.3 + 0.1,
            speed: Math.random() * 0.8 + 0.4,
          }),
        );

        gsap.ticker.add(animateElements);
      };

      const animateElements = () => {
        if (!ctx || !canvas) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (const el of codeElements.current) {
          el.y += el.speed;
          ctx.font = `${el.size}px monospace`;
          const wordWidth = ctx.measureText(el.word).width;

          if (el.y > canvas.height) {
            el.y = -30;
            el.x = Math.random() * (canvas.width - wordWidth);
            el.word = CODE_WORDS[Math.floor(Math.random() * CODE_WORDS.length)];
          }

          ctx.fillStyle = "var(--color-two)";
          ctx.globalAlpha = el.opacity;
          ctx.fillText(el.word, el.x, el.y);
        }

        ctx.globalAlpha = 1;
      };

      const onResize = () => {
        gsap.delayedCall(0.2, init);
      };

      const resizeObserver = new ResizeObserver(onResize);
      if (canvas.parentElement) {
        resizeObserver.observe(canvas.parentElement);
      }

      init();

      return () => {
        resizeObserver.disconnect();
        gsap.ticker.remove(animateElements);
      };
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="animated-background-container">
      <canvas ref={canvasRef} className="animated-background" />
    </div>
  );
}

export default AnimatedBackground;
