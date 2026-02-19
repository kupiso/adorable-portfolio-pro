import { useEffect, useRef } from "react";

const EMOJIS = ["🌸", "🌺", "💮", "🌼", "✨", "💕", "🌷"];

const FloatingPetals = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < 18; i++) {
      const petal = document.createElement("div");
      petal.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      petal.style.position = "absolute";
      petal.style.opacity = "0.15";
      petal.style.left = `${Math.random() * 100}%`;
      petal.style.animationDuration = `${12 + Math.random() * 18}s`;
      petal.style.animationDelay = `${Math.random() * 20}s`;
      petal.style.fontSize = `${14 + Math.random() * 16}px`;
      petal.style.animation = `floatPetal ${12 + Math.random() * 18}s linear ${Math.random() * 20}s infinite`;
      container.appendChild(petal);
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
