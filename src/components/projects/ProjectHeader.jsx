export default function ProjectHeader({ project }) {
  
    
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX / 20,
        y: e.clientY / 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700">
      
      {/* Parallax blob */}
      <div
        className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center text-white px-6">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 transition hover:scale-105">
            Hallo, ik ben <span className="text-yellow-300">[Jouw Naam]</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Frontend Developer • React • Tailwind
          </p>
          <a
            href="#projects"
            className="inline-block px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl
                       hover:bg-yellow-300 hover:text-black transition-all duration-300 shadow-lg"
          >
            Bekijk mijn werk
          </a>
        </div>
      </div>
    </section>
  );
  
}