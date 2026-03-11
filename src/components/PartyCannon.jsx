import { useEffect, useState, useRef } from "react";

export default function PartyCannon() {
  const [particles, setParticles] = useState([]);
  const requestRef = useRef();

  useEffect(() => {
    const handleGlobalClick = (e) => {
      const newParticles = Array.from({ length: 15 }).map((_, i) => ({
        id: Date.now() + i,
        x: e.clientX,
        y: e.clientY,
        color: ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#8B00FF", "#FF1493", "#00FFFF"][Math.floor(Math.random() * 8)],
        shape: Math.random() > 0.5 ? "circle" : "square",
        vx: (Math.random() - 0.5) * 15,
        vy: (Math.random() - 1) * 20, // Even more explosive jump
        life: 1,
      }));

      setParticles((prev) => [...prev, ...newParticles].slice(-100));

      // Trigger Screen Shake
      document.body.classList.remove("screen-shake");
      void document.body.offsetWidth; // trigger reflow
      document.body.classList.add("screen-shake");
      
      setTimeout(() => {
        document.body.classList.remove("screen-shake");
      }, 500);
    };

    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, []);

  const animate = () => {
    setParticles((prevParticles) => {
      if (prevParticles.length === 0) return prevParticles;
      return prevParticles
        .map((p) => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          vy: p.vy + 0.8, // Faster gravity
          life: p.life - 0.02,
        }))
        .filter((p) => p.life > 0);
    });
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: p.x,
            top: p.y,
            opacity: p.life,
            transform: `scale(${p.life}) rotate(${p.life * 360}deg)`,
            width: "12px",
            height: "12px",
            backgroundColor: p.color,
            borderRadius: p.shape === "circle" ? "50%" : "2px",
            boxShadow: `0 0 5px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}
