import { useMemo } from 'react';

const FLOWERS = ['🌸', '🌺', '🌼', '🌻', '🌷', '💐', '🌹', '🪷'];

export default function FloatingFlowers() {
  // Generate 20 flowers with random positions and animation params (stable via useMemo)
  const flowers = useMemo(() =>
    Array.from({ length: 22 }, (_, i) => ({
      id: i,
      emoji: FLOWERS[i % FLOWERS.length],
      left: `${5 + (i * 4.3) % 90}%`,
      top: `${3 + (i * 7.1) % 92}%`,
      size: 18 + (i % 5) * 7,
      duration: 4 + (i % 5) * 1.4,
      delay: (i * 0.4) % 6,
      rotate: i % 2 === 0 ? 'flower-float-cw' : 'flower-float-ccw',
    })), []
  );

  return (
    <div
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}
    >
      {flowers.map(f => (
        <span
          key={f.id}
          className={f.rotate}
          style={{
            position: 'absolute',
            left: f.left,
            top: f.top,
            fontSize: f.size + 'px',
            animationDuration: f.duration + 's',
            animationDelay: f.delay + 's',
            opacity: 0.55,
            userSelect: 'none',
            display: 'inline-block',
            filter: 'drop-shadow(0 2px 6px rgba(167,139,250,0.35))',
          }}
        >
          {f.emoji}
        </span>
      ))}
    </div>
  );
}
