import { useEffect, useState } from 'react';

export default function FloatingClouds() {
  const [clouds, setClouds] = useState([]);

  useEffect(() => {
    // Generate some random clouds
    const newClouds = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      top: Math.random() * 80 + '%',
      left: Math.random() * 100 + '%',
      size: Math.random() * 3 + 4 + 'rem', // 4rem to 7rem
      speed: Math.random() * 20 + 20 + 's', // 20s to 40s
      delay: '-' + (Math.random() * 20) + 's',
      opacity: Math.random() * 0.3 + 0.2 // soft opacity
    }));
    setClouds(newClouds);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="absolute text-white animate-cloud"
          style={{
            top: cloud.top,
            left: cloud.left,
            fontSize: cloud.size,
            opacity: cloud.opacity,
            animationDuration: cloud.speed,
            animationDelay: cloud.delay,
            filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.8))'
          }}
        >
          ☁️
        </div>
      ))}

      <style>
        {`
          @keyframes moveCloud {
            0% { transform: translateX(-10vw); }
            100% { transform: translateX(110vw); }
          }
          .animate-cloud {
            animation-name: moveCloud;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            left: -10vw !important; /* Start off screen */
          }
        `}
      </style>
    </div>
  );
}
