import { useEffect } from "react";

export default function RainbowCursor() {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".rainbow-circle");
    
    // Rainbow Dash colors: Red, Orange, Yellow, Green, Blue, Purple
    const colors = [
      "#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#8B00FF",
      "#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#8B00FF",
      "#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#8B00FF",
      "#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#8B00FF"
    ];

    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId;

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;
      
      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        
        // Scale down as they trail off
        const scale = (circles.length - index) / circles.length;
        circle.style.transform = `scale(${scale})`;
        
        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.4; // The smaller the multiplier, the longer/slower the trail
        y += (nextCircle.y - y) * 0.4;
      });
 
      animationFrameId = requestAnimationFrame(animateCircles);
    }
    
    animateCircles();
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <style>
        {`
          .rainbow-circle {
            pointer-events: none;
            position: fixed;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            z-index: 9999;
            will-change: transform, left, top;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          }
        `}
      </style>
      {Array.from({ length: 24 }).map((_, i) => (
        <div key={i} className="rainbow-circle" />
      ))}
    </>
  );
}
