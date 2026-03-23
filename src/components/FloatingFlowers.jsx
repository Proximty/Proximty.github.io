import { useMemo } from 'react';

const FLOWERS = ['🌸', '🌺', '🌼', '🌻', '🌷', '💐', '🌹', '🪷', '🪴', '🌱', '🌿', '🍄', '✨', '🍃'];

export default function FloatingFlowers() {
  // Generate 45 flowers with random positions and animation params (stable via useMemo)
  const flowers = useMemo(() =>
    Array.from({ length: 45 }, (_, i) => ({
      id: i,
      emoji: FLOWERS[i % FLOWERS.length],
      left: `${3 + (i * 7.7) % 94}%`,
      top: `${2 + (i * 11.3) % 96}%`,
      size: 16 + (i % 7) * 8,
      duration: 3 + (i % 6) * 1.5,
      delay: (i * 0.3) % 8,
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
