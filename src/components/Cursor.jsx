import { useEffect, useRef, useState } from 'react';

// Petals that spawn on mouse move
const PETALS = ['🌸', '🌺', '🌼', '🌷', '🪷'];

function spawnPetal(x, y) {
  const el = document.createElement('span');
  el.textContent = PETALS[Math.floor(Math.random() * PETALS.length)];
  const size = 14 + Math.random() * 10;
  const angle = (Math.random() - 0.5) * 60;
  const rise = 40 + Math.random() * 40;
  Object.assign(el.style, {
    position: 'fixed',
    left: x + 'px',
    top: y + 'px',
    fontSize: size + 'px',
    pointerEvents: 'none',
    zIndex: '99998',
    transform: 'translate(-50%,-50%)',
    animation: `petalFly 0.9s ease forwards`,
    '--angle': angle + 'deg',
    '--rise': rise + 'px',
    userSelect: 'none',
  });
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 950);
}

export default function Cursor() {
  const ringRef = useRef(null);
  const dotRef  = useRef(null);
  const mouse   = useRef({ x: -300, y: -300 });
  const ringPos = useRef({ x: -300, y: -300 });
  const rafId   = useRef(null);
  const lastPetal = useRef(0);
  const [active,  setActive]  = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    // Inject petal keyframe style once
    if (!document.getElementById('petal-style')) {
      const style = document.createElement('style');
      style.id = 'petal-style';
      style.textContent = `
        @keyframes petalFly {
          0%   { opacity: 1; transform: translate(-50%,-50%) rotate(0deg) translateY(0); }
          100% { opacity: 0; transform: translate(-50%,-50%) rotate(var(--angle,20deg)) translateY(calc(-1 * var(--rise,40px))); }
        }
      `;
      document.head.appendChild(style);
    }

    if (!window.matchMedia('(pointer: fine)').matches) return;

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!active) setActive(true);

      // Dot follows instantly via transform
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
      }

      // Spawn a petal every ~120ms
      const now = Date.now();
      if (now - lastPetal.current > 120) {
        lastPetal.current = now;
        spawnPetal(e.clientX, e.clientY);
      }
    };

    const loop = () => {
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.13;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.13;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px, 0)`;
      }
      rafId.current = requestAnimationFrame(loop);
    };
    rafId.current = requestAnimationFrame(loop);

    const onDown = () => setClicked(true);
    const onUp   = () => setClicked(false);

    const attachHover = () => {
      document.querySelectorAll("a, button, input, textarea, [role='button'], .cursor-pointer")
        .forEach(el => {
          el.addEventListener('mouseenter', () => setHovered(true),  { passive: true });
          el.addEventListener('mouseleave', () => setHovered(false), { passive: true });
        });
    };
    attachHover();
    const mo = new MutationObserver(attachHover);
    mo.observe(document.body, { childList: true, subtree: true });

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup',   onUp);

    return () => {
      cancelAnimationFrame(rafId.current);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup',   onUp);
      mo.disconnect();
    };
  }, []);

  if (!active) return null;

  return (
    <>
      {/* Lagging ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          pointerEvents: 'none', zIndex: 99999,
          width:  hovered ? '54px' : clicked ? '30px' : '40px',
          height: hovered ? '54px' : clicked ? '30px' : '40px',
          borderRadius: '50%',
          border: `2.5px solid ${hovered ? '#f472b6' : '#a78bfa'}`,
          backgroundColor: hovered ? 'rgba(244,114,182,0.1)' : 'transparent',
          transition: 'width .2s ease, height .2s ease, border-color .2s ease, background .2s ease',
          willChange: 'transform',
        }}
      />
      {/* Flower dot — instant */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          pointerEvents: 'none', zIndex: 100000,
          width: '20px', height: '20px',
          fontSize: '18px', lineHeight: '20px',
          textAlign: 'center',
          transition: 'opacity .15s ease',
          opacity: hovered ? 0 : 1,
          willChange: 'transform',
          userSelect: 'none',
        }}
      >
        🌸
      </div>
    </>
  );
}
