export default function InteractiveFlora() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 30 }}>
       {/* LEAVES (grow on hover) */}
       <span className="flora-leaf" style={{ top: '-1.5rem', left: '-1rem', '--rot': '-15deg', fontSize: '2.5rem' }}>🌿</span>
       <span className="flora-leaf" style={{ bottom: '-1rem', right: '-1rem', '--rot': '10deg', fontSize: '3rem', transitionDelay: '0.05s' }}>🪴</span>
       <span className="flora-leaf" style={{ top: '15%', right: '-1.5rem', '--rot': '45deg', fontSize: '2rem', transitionDelay: '0.1s' }}>🍃</span>
       <span className="flora-leaf" style={{ bottom: '15%', left: '-1rem', '--rot': '-30deg', fontSize: '2.3rem', transitionDelay: '0.08s' }}>🌱</span>

       {/* FLOWERS (bloom on click) */}
       <span className="flora-flower drop-shadow-md" style={{ top: '10%', left: '15%', '--rot': '10deg', fontSize: '3rem' }}>🌸</span>
       <span className="flora-flower drop-shadow-md" style={{ top: '60%', right: '10%', '--rot': '-20deg', fontSize: '3.5rem', transitionDelay: '0.05s' }}>🌺</span>
       <span className="flora-flower drop-shadow-md" style={{ bottom: '10%', left: '30%', '--rot': '5deg', fontSize: '2.8rem', transitionDelay: '0.08s' }}>🌼</span>
       <span className="flora-flower drop-shadow-md" style={{ top: '5%', right: '35%', '--rot': '15deg', fontSize: '3.2rem', transitionDelay: '0.12s' }}>🌷</span>
       <span className="flora-flower drop-shadow-md" style={{ bottom: '40%', left: '45%', '--rot': '-10deg', fontSize: '2.5rem', transitionDelay: '0.02s' }}>✨</span>
    </div>
  );
}
