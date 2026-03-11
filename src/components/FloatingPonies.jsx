import { useEffect, useState } from 'react';

export default function FloatingPonies() {
  const [ponies, setPonies] = useState([]);

  useEffect(() => {
    // Generate random ponies
    const poniesList = ["🦄", "🐴", "🐎", "🦋", "🍄"];
    const newPonies = Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      emoji: poniesList[i % poniesList.length],
      bottom: Math.random() * 20 + '%', // fly near bottom
      size: Math.random() * 2 + 2 + 'rem', 
      speed: Math.random() * 15 + 15 + 's', // 15s to 30s
      delay: '-' + (Math.random() * 15) + 's',
    }));
    setPonies(newPonies);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {ponies.map((pony) => (
        <div
          key={pony.id}
          className="absolute pb-10 animate-pony"
          style={{
            bottom: pony.bottom,
            fontSize: pony.size,
            animationDuration: pony.speed,
            animationDelay: pony.delay,
            filter: 'drop-shadow(0 5px 5px rgba(255, 105, 180, 0.5))'
          }}
        >
          {pony.emoji}
        </div>
      ))}

      <style>
        {`
          @keyframes movePony {
            0% { 
              transform: translateX(-10vw) scaleX(1) translateY(0); 
            }
            25% {
              transform: translateX(20vw) scaleX(1) translateY(-20px); 
            }
            50% { 
              transform: translateX(50vw) scaleX(1) translateY(0); 
            }
            75% { 
              transform: translateX(80vw) scaleX(1) translateY(-15px); 
            }
            100% { 
              transform: translateX(110vw) scaleX(1) translateY(0); 
            }
          }
          .animate-pony {
            animation-name: movePony;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            left: -10vw !important; /* Start off screen */
          }
        `}
      </style>
    </div>
  );
}
