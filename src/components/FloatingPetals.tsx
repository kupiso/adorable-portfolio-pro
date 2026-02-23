import { useEffect, useRef } from "react";

const EMOJIS = ["🌸", "🌺", "💮", "🌼", "✨", "💕", "🌷", "⭐", "💫"];

const FloatingPetals = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Floating petals
    for (let i = 0; i < 20; i++) {
      const petal = document.createElement("div");
      petal.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      petal.style.position = "absolute";
      petal.style.opacity = "0.12";
      petal.style.left = `${Math.random() * 100}%`;
      petal.style.fontSize = `${14 + Math.random() * 16}px`;
      petal.style.animation = `floatPetal ${12 + Math.random() * 18}s linear ${Math.random() * 20}s infinite`;
      container.appendChild(petal);
    }

    // Sparkle glitters
    for (let i = 0; i < 30; i++) {
      const sparkle = document.createElement("div");
      sparkle.style.position = "absolute";
      sparkle.style.width = `${2 + Math.random() * 4}px`;
      sparkle.style.height = sparkle.style.width;
      sparkle.style.borderRadius = "50%";
      sparkle.style.background = `hsla(${14 + Math.random() * 320}, 60%, 70%, 0.6)`;
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      sparkle.style.animation = `sparkleGlitter ${2 + Math.random() * 4}s ease-in-out ${Math.random() * 5}s infinite`;
      sparkle.style.boxShadow = `0 0 ${4 + Math.random() * 8}px hsla(14, 68%, 62%, 0.4)`;
      container.appendChild(sparkle);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
};

export default FloatingPetals;
