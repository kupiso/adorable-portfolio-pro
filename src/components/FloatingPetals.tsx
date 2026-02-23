import { useEffect, useRef } from "react";

const EMOJIS = ["🌸", "🌺", "💮", "🌼", "✨", "💕", "🌷", "⭐", "💫"];

const FloatingPetals = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Floating petals
    for (let i = 0; i < 25; i++) {
      const petal = document.createElement("div");
      petal.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      petal.style.position = "absolute";
      petal.style.opacity = "0.18";
      petal.style.left = `${Math.random() * 100}%`;
      petal.style.fontSize = `${14 + Math.random() * 18}px`;
      petal.style.animation = `floatPetal ${10 + Math.random() * 16}s linear ${Math.random() * 15}s infinite`;
      container.appendChild(petal);
    }

    // Sparkle glitters
    for (let i = 0; i < 45; i++) {
      const sparkle = document.createElement("div");
      sparkle.style.position = "absolute";
      sparkle.style.width = `${2 + Math.random() * 5}px`;
      sparkle.style.height = sparkle.style.width;
      sparkle.style.borderRadius = "50%";
      const hue = [14, 335, 130, 45, 280][Math.floor(Math.random() * 5)];
      sparkle.style.background = `hsla(${hue}, 70%, 75%, 0.7)`;
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      sparkle.style.animation = `sparkleGlitter ${1.5 + Math.random() * 3}s ease-in-out ${Math.random() * 4}s infinite`;
      sparkle.style.boxShadow = `0 0 ${6 + Math.random() * 10}px hsla(${hue}, 68%, 65%, 0.5)`;
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
