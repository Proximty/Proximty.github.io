import { useEffect } from "react";

export default function ChaosMonkey() {
  useEffect(() => {
    const interval = setInterval(() => {
      // Find random elements and mess them up
      const tags = ["p", "h1", "h2", "h3", "img", "button", "a"];
      const randomTag = tags[Math.floor(Math.random() * tags.length)];
      const elements = document.querySelectorAll(randomTag);
      
      if (elements.length > 0) {
        const randomEl = elements[Math.floor(Math.random() * elements.length)];
        
        // Apply random chaotic inline styles
        const randomRotation = (Math.random() - 0.5) * 360; // -180 to 180
        const randomScale = Math.random() * 2; // 0 to 2
        const randomX = (Math.random() - 0.5) * 100;
        const randomY = (Math.random() - 0.5) * 100;
        
        // Random neon color
        const colors = ["#FF00FF", "#00FFFF", "#00FF00", "#FFFF00", "#FF0000"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomBg = colors[Math.floor(Math.random() * colors.length)];

        randomEl.style.transition = "all 0.5s ease-in-out";
        randomEl.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg) scale(${randomScale})`;
        
        if (randomTag !== "img") {
          randomEl.style.color = randomColor;
          randomEl.style.backgroundColor = randomBg;
          randomEl.style.textShadow = `5px 5px 0px ${colors[Math.floor(Math.random() * colors.length)]}`;
        }
      }
    }, 200); // Mess up a new element every 200ms

    return () => clearInterval(interval);
  }, []);

  return null;
}
