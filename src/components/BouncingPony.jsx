import { useEffect, useState, useRef } from "react";

export default function BouncingPony() {
  const [pos, setPos] = useState({ x: 100, y: 100, dx: 4, dy: 4 });
  const [colorIndex, setColorIndex] = useState(0);
  const size = 150; // pony emoji size
  
  const colors = [
    "drop-shadow(0 0 20px #FF0000)",
    "drop-shadow(0 0 20px #FF7F00)",
    "drop-shadow(0 0 20px #FFFF00)",
    "drop-shadow(0 0 20px #00FF00)",
    "drop-shadow(0 0 20px #0000FF)",
    "drop-shadow(0 0 20px #8B00FF)",
  ];

  const requestRef = useRef();
  
  const animate = () => {
    setPos((prev) => {
      let { x, y, dx, dy } = prev;
      let hit = false;
      
      x += dx;
      y += dy;
      
      if (x + size >= window.innerWidth || x <= 0) {
        dx = -dx;
        hit = true;
      }
      
      if (y + size >= window.innerHeight || y <= 0) {
        dy = -dy;
        hit = true;
      }
      
      if (hit) {
        setColorIndex((c) => (c + 1) % colors.length);
      }
      
      return { x, y, dx, dy };
    });
    requestRef.current = requestAnimationFrame(animate);
  };
  
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
  
  return (
    <div 
      className="fixed pointer-events-none z-[9998]"
      style={{
        left: pos.x,
        top: pos.y,
        fontSize: "120px",
        filter: colors[colorIndex],
        transform: pos.dx < 0 ? "scaleX(-1)" : "scaleX(1)",
        transition: "filter 0.2s"
      }}
    >
      🦄
    </div>
  );
}
